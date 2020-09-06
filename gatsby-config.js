module.exports = {
  siteMetadata: {
    title: 'Journey',
    description: 'あなたが自信をもって目標へ向かうための学習ロードマップ',
    author: 'Progate, Inc.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-52935465-1',
        cookieFlags: 'SameSite=None; Secure',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`,
        name: 'data',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Progate Journey',
        short_name: 'Journey',
        description: 'あなたが自信をもって目標へ向かうための学習ロードマップ',
        lang: 'ja',
        start_url: '/',
        background_color: '#f9fbfe',
        theme_color: '#f9fbfe',
        display: 'standalone',
        icon: 'src/images/icon.png',
        icon_options: {
          purpose: 'maskable',
        },
      },
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint',
  ],
}
