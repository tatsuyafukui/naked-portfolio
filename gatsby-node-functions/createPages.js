const path = require('path')

const SCENES = 'scenes'
const SKILLS = 'skills'

/**
 * graphQLからPageを作成
 * シーン詳細ページ
 * スキル詳細ページ
 * @param graphql
 * @param actions
 * @returns {Promise<void>}
 */
const createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const queryResults = await graphql(`
    query {
      allScenesJson {
        nodes {
          id
          fields {
            slug
          }
        }
      }
      allSkillsJson {
        nodes {
          id
          fields {
            slug
          }
          scene {
            id
          }
        }
      }
    }
  `)

  const sceneTemplate = path.resolve(
    'src/components/Templates/SceneTemplate/index.js'
  )
  queryResults.data.allScenesJson.nodes.forEach(node => {
    createPage({
      path: `/${SCENES}/${node.id}`,
      component: sceneTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const skillTemplate = path.resolve(
    'src/components/Templates/SkillTemplate/index.js'
  )
  queryResults.data.allSkillsJson.nodes.forEach(node => {
    createPage({
      path: `/${SCENES}/${node.scene.id}/${SKILLS}/${node.id}`,
      component: skillTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

module.exports = createPages
