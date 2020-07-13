const path = require(`path`)
const {createRemoteFileNode} = require('gatsby-source-filesystem')
const ogs = require('open-graph-scraper')

const SCENES = 'scenes'
const SKILLS = 'skills'
const SLUG = 'slug'
const OGP = 'ogp'
const IMAGE_TYPE_JPG = 'jpg'
const IMAGE_TYPE_GIF = 'gif'
const NODE_TYPE_RECOMMENDED = 'RecommendedJson'
const NODE_TYPE_SCENES = 'ScenesJson'
const NODE_TYPE_SKILLS = 'SkillsJson'

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const {createNodeField, createNode} = actions
  if (node.internal.type === NODE_TYPE_RECOMMENDED) {
    // URLからOGP情報を取得
    const results = await ogs({url: node.url}, (error, results) => {
      if (error) {
        console.log(node.url)
        throw Error('OGP取得のURLが不適切です')
      }
      return results
    })

    // Amazonはogp画像が正常に設定されていないので、ISBNから画像URLを指定
    if (node.isbn) {
      results.ogImage = {
        type: IMAGE_TYPE_JPG,
        url: `https://images-na.ssl-images-amazon.com/images/P/${node.isbn}._SL500_.jpg`,
      }
    }

    // OGP画像が配列の場合はgif以外の画像を配列から取り出して上書きする
    if (Array.isArray(results.ogImage)) {
      results.ogImage = results.ogImage
        .filter(item => item.type !== IMAGE_TYPE_GIF)
        .shift()
    }

    // OGP画像のURLがpathの場合はドメインを結合して完全なURLに上書きする
    // ex. /images/example.png → https://example.com/images/example.png
    const internal = results.ogImage && /^\/(?!\/)/.test(results.ogImage.url)
    if (internal) {
      // https://example.com/document → https://example.com
      const domain = results.requestUrl
        .match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[0]
        .slice(0, -1)
      results.ogImage.url = `${domain}${results.ogImage.url}`
    }

    try {
      // ogp画像をgatsby-imgで使えるように設定
      const fileNode = await createRemoteFileNode({
        url: results.ogImage.url,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      })

      if (fileNode) {
        results.ogImage___NODE = fileNode.id
      }
    } catch (error) {
      // 適切な画像以外は空にする
      results.ogImage = null
    }
    createNodeField({
      node,
      name: OGP,
      value: results,
    })
  }

  if (node.internal.type === NODE_TYPE_SCENES) {
    createNodeField({
      node,
      name: SLUG,
      value: `/${SCENES}/${node.id}`,
    })
  }

  if (node.internal.type === NODE_TYPE_SKILLS) {
    createNodeField({
      node,
      name: SLUG,
      value: `/${SCENES}/${node.sceneId}/${SKILLS}/${node.id}`,
    })
  }
}

exports.createSchemaCustomization = ({actions}) => {
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

exports.createPages = async ({graphql, actions}) => {
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
