module.exports = {
  siteMetadata: {
    title: `Journey`,
    description: `Journeyはあなたが自信をもって目標へ向かうための学習ロードマップです`,
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
        description: `Journeyはあなたが自信をもって目標へ向かうための学習ロードマップです`,
        lang: `ja`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        categories: `education`,
        display: `standalone`,
        icon: `src/images/icon/logo.png`,
        include_favicon: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
