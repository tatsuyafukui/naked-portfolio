/**
 * GraphQLスキーマのリレーションを定義
 * @param actions
 */
const createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions
  const typeDefs = [
    `
      type SkillsJson implements Node {
        scene: ScenesJson @link(from: "sceneId")
        recommended: [RecommendedJson] @link(by: "skillId", from: "id")
      }
      
      type ScenesJson implements Node {
        skills: [SkillsJson] @link(by: "sceneId", from: "id")
      }
    `,
  ]
  createTypes(typeDefs)
}

module.exports = createSchemaCustomization
