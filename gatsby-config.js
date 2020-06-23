const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "staging"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Journey`,
    description: `あなたが自信をもって目標へ向かうための学習ロードマップ`,
    author: `Progate, Inc.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        name: 'data',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Progate Journey`,
        short_name: `Journey`,
        description: `あなたが自信をもって目標へ向かうための学習ロードマップ`,
        lang: `ja`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        protocol: "https",
        hostname: process.env.HOSTNAME,
        bucketName: process.env.S3_BUCKET_NAME,
        region: process.env.REGION,
        acl: null,
        enableS3StaticWebsiteHosting: false,
      },
    },
  ],
}
