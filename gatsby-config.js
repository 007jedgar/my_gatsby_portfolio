module.exports = {
  siteMetadata: {
    title: `Edgar Dev`,
    description: `Jonathan Edgar's website and blog.`,
    author: `Jonathan Edgar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`,
      },
    },
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
        name: `Jonathan-Edgar`,
        short_name: `JE Dev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav-j.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/images/fav-j.png`,
            sizes: `577x600`,
            type: `image/png`,
          },
          {
            src: `/images/favicon-310x310.png`,
            sizes: `310x310`,
            type: `image/png`,
          },
          {
            src: `/images/apple-icon-114x114.png`,
            sizes: `114x114`,
            type: `image/png`,
          },
          {
            src: `/images/favicon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/images/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/images/android-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/images/android-icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/images/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/images/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
        ]
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      },
    },
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
