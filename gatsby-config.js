module.exports = {
  siteMetadata: {
    siteUrl: "https://s-works.t28.dev",
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-next-seo`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/s-works-logo.png`,
      },
    },
    `gatsby-plugin-svgr`,
    `gatsby-plugin-sitemap`,
  ],
}
