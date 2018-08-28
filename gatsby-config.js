module.exports = {
  siteMetadata: {
    title: 'Sandwich Arts',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/md-pages`,
    //     name: "markdown-pages",
    //   },
    // },
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
