const onCreateNode = require(`./gatsby-node-functions/onCreateNode`)
const createSchemaCustomization = require(`./gatsby-node-functions/createSchemaCustomization`)
const createPages = require(`./gatsby-node-functions/createPages`)

exports.onCreateNode = onCreateNode
exports.createSchemaCustomization = createSchemaCustomization
exports.createPages = createPages
