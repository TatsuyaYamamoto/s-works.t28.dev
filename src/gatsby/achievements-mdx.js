const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

const achievementPageTemplate = path.resolve(`./src/templates/achievement.tsx`)

/** @param {import("gatsby").CreatePagesArgs} args */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const {
    data: {
      allMdx: { nodes: achievementNodes },
    },
  } = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { contentType: { eq: "achievements" } } }
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  achievementNodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: achievementPageTemplate,
      context: {
        id: node.id,
      },
    })
  })
}

/** @param {import('gatsby').CreateNodeArgs} args */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode })
    // 並び替えのために西暦がprefixに入っている場合、削除する
    // /2021_lovelive_joya_no_kane/ => /lovelive_joya_no_kane/
    const slugWithoutPrefix = slug.replace(/^\/[0-9]{4}_/, "/")
    createNodeField({
      node,
      name: `slug`,
      value: slugWithoutPrefix,
    })

    const pattern = /^.+\/contents\/(?<contentType>[0-9a-zA-Z]+)\/.+/
    const {
      groups: { contentType },
    } = pattern.exec(node.fileAbsolutePath)
    createNodeField({
      node,
      name: `contentType`,
      value: contentType,
    })
  }
}

/** @param {import('gatsby').CreateSchemaCustomizationArgs} args */
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(`
  type Mdx implements Node {
     frontmatter: Frontmatter
   }
   
  type Frontmatter {
    heroImage: File @fileByRelativePath
  }
 `)
}
