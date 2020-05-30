const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              langKey
            }
            frontmatter {
              sceneId
              type
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug;

    // sceneはJSXで作り直したほうが良さそう
    // skillはi18nライブラリの中でCreateページできるかも
    let template;
    if (slug.match('/skills/')) {
      template = 'SkillTemplate/index';
    } else if (node.fields.slug.match('/scenes/')) {
      template = 'SceneTemplate/index';
    }

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/Templates/${template}.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slug,
        langKey: node.fields.langKey,
        sceneId: node.frontmatter.sceneId,
      },
    });
  });
};
