module.exports = {
  siteMetadata: {
    title: 'FreqFinder (~2011)',
    description: 'ACMA data driven locator of broadcast towers.',
    siteUrl: 'https://freqfinder.euphemize.net/',
    author: 'jufemaiz',
    twitter: 'jufemaiz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
     {
       resolve: 'gatsby-source-filesystem',
       options: {
         path: './src/data/',
       },
     },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
