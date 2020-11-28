const ogs = require('open-graph-scraper')
const {createRemoteFileNode} = require('gatsby-source-filesystem')

const SCENES = 'scenes'
const SKILLS = 'skills'
const SLUG = 'slug'
const OGP = 'ogp'
const NODE_TYPE_RECOMMENDED = 'RecommendedJson'
const NODE_TYPE_SCENES = 'ScenesJson'
const NODE_TYPE_SKILLS = 'SkillsJson'
const IMAGE_TYPE_JPG = 'jpg'

/**
 * GraphQLの生成時に呼び出される
 * NodeTypeに応じてカラムを追加
 * @param node
 * @param actions
 * @param createNodeId
 * @param cache
 * @param store
 * @returns {Promise<void>}
 */
const onCreateNode = async ({node, actions, createNodeId, cache, store}) => {
  const {createNodeField, createNode} = actions

  if (node.internal.type === NODE_TYPE_RECOMMENDED) {
    const results = await fetchOgp(node.url)
    results.ogImage = formatOgpImage(node, results.ogImage)

    try {
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
    } catch (e) {
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

module.exports = onCreateNode

// utils function

/**
 * URLからOGPを取得
 * @param url
 * @returns {Promise<*>}
 */
const fetchOgp = async url => {
  return await ogs({url}, (error, results) => {
    if (error) {
      // throw Error('OGP取得のURLが不適切です')
    }
    return results
  })
}

/**
 * Webサイトごとに違う画像フォーマットを整形する
 * @param node
 * @param ogImage
 * @returns {{type: string, url: string}}
 */
const formatOgpImage = (node, ogImage) => {
  if (node.isbn) {
    ogImage = getAmazonImg(node.isbn)
  }

  if (Array.isArray(ogImage)) {
    ogImage = ogImage.shift()
  }

  if (!ogImage) return

  const internal = checkInternalLink(ogImage.url)
  if (internal) {
    ogImage.url = combineDomainAndPath(node.url, ogImage.url)
  }

  return ogImage
}

/**
 * ISBNからAmazon商品画像URLを取得
 * @param isbn
 * @returns {{type: string, url: string}}
 */
const getAmazonImg = isbn => {
  return {
    type: IMAGE_TYPE_JPG,
    url: `https://images-na.ssl-images-amazon.com/images/P/${isbn}._SL500_.jpg`,
  }
}

/**
 * 内部リンクか外部リンクか判定
 * @param url
 * @returns {boolean}
 */
const checkInternalLink = url => /^\/(?!\/)/.test(url)

/**
 * 画像pathをドメインと結合して完全な画像URLに変換
 * @param url https://examplecom/doc
 * @param path /images/example.png
 * @returns {string} https://examplecom/images/example.png
 */
const combineDomainAndPath = (url, path) => {
  const domainUrl = url
    .match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[0]
    .slice(0, -1)
  return `${domainUrl}${path}`
}
