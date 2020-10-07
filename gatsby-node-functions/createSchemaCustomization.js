/**
 * GraphQLスキーマのリレーションを定義
 * @param actions
 * @param schema
 */
const createSchemaCustomization = ({actions, schema}) => {
  const {createTypes} = actions
  const typeDefs = [
    `
      type SkillsJson implements Node {
        scene: ScenesJson @link(from: "sceneId")
        getStarted: GetStarted
      }
      
      type GetStarted {
        easy: Easy
        middle: Middle
      }
      
      type Easy {
        description: String
        tasks: [Task]
        recommended: [RecommendedJson]
      }
      
      type Middle {
        description: String
        tasks: [Task!]!
        recommended: [RecommendedJson]
      }
      
      type Task {
        title: String
        child: [String!]!
      }
      
      type ScenesJson implements Node {
        skills: [SkillsJson] @link(by: "sceneId", from: "id")
      }
    `,
    schema.buildObjectType({
      name: 'SkillsJson',
      fields: {
        getStarted: {
          type: 'GetStarted',
          resolve: (source, args, context) => {
            return {
              easy: {
                ...source.getStarted.easy,
                recommended: context.nodeModel
                  .getAllNodes({type: 'RecommendedJson'})
                  .filter(
                    recommended =>
                      recommended.skillId === source.id &&
                      recommended.level === 'easy'
                  ),
              },
              middle: {
                ...source.getStarted.middle,
                recommended: context.nodeModel
                  .getAllNodes({type: 'RecommendedJson'})
                  .filter(
                    recommended =>
                      recommended.skillId === source.id &&
                      recommended.level === 'middle'
                  ),
              },
            }
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}

module.exports = createSchemaCustomization
