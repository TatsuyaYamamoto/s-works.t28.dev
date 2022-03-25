const achievementsMdx = require("./src/gatsby/achievements-mdx")

/** @param {import("gatsby").CreatePagesArgs} args */
exports.createPages = async args => {
  await achievementsMdx.createPages(args)
}

/** @param {import('gatsby').CreateNodeArgs} args */
exports.onCreateNode = args => {
  achievementsMdx.onCreateNode(args)
}

/** @param {import('gatsby').CreateSchemaCustomizationArgs} args */
exports.createSchemaCustomization = args => {
  achievementsMdx.createSchemaCustomization(args)
}
