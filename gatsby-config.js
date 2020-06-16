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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/icon/mobile.png`,
      },
    },
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
        categories: `education`,
        display: `standalone`,
        icon: `src/images/icon/mobile.png`,
        icon_options: {
          purpose: `maskable`,
        },
        include_favicon: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
