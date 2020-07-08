const {createRemoteFileNode} = require('gatsby-source-filesystem')
const ogs = require('open-graph-scraper')

exports.onCreateNode = async ({node, actions, store, cache, createNodeId}) => {
  const {createNodeField, createNode} = actions
  if (node.internal.type === 'RecommendedJson') {
    // URLからOGP情報を取得
    const results = await ogs({url: node.url}, (error, results) => {
      if (error) {
        throw Error('OGP取得のURLが不適切です')
      }
      return results
    })

    // Amazonはogp画像が正常に設定されていないので、ISBNから画像URLを指定
    if (node.isbn) {
      results.ogImage = {
        type: 'jpg',
        url: `https://images-na.ssl-images-amazon.com/images/P/${node.isbn}._SL500_.jpg`,
      }
    }

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

    createNodeField({
      node,
      name: 'ogp',
      value: results,
    })
  }
}
