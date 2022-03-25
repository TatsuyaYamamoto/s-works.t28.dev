module.exports = {
  siteMetadata: {
    siteTitle: `s-works`,
    siteUrl: `https://s-works.t28.dev`,
    siteDescription: `s-worksは様々な企画を実現するために、Webアプリを開発します。`,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/achievements`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              wrapperStyle: `
                box-shadow: 0 0px 5px 2px rgb(240 240 250);
              `,
            },
          },
        ],
      },
    },
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HWSMW4E5D8"],
      },
    },
  ],
}
