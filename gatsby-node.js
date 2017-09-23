const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type !== `ProjectsJson`){
    console.log(node, 'NOT JSON');
  }
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `ProjectsJson`) {
    console.log(node, 'json')
    const slug = `${createFilePath({ node, getNode, basePath: `work` }).slice(6, 12) + node.slug}`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // console.log(node, createFilePath({ node, getNode, basePath: `work` }).slice(6))
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allProjectsJson{
        edges{
          node{
            fields{
              slug
            }
          }
        }
      }
      }
    `
).then(result => {
  result.data.allProjectsJson.edges.map(({ node }) => {
    console.log(node.fields.slug.slice(6), 'creating page')
    createPage({
      path: node.fields.slug,
      component: path.resolve('',`./src/templates/project-page.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug.slice(6)
      },
    })
  })
      resolve()
    })
  })
}