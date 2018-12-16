module.exports = {
  siteMetadata: {
    title: 'superstyled',
    description: 'styled-components, now super!',
    author: {
      name: 'Rich Lewis',
      twitter: '@richlewis42'
    },
    nav: [
      { label: 'home', to: '/' },
      { label: 'quickstart', to: '/quickstart/' },
      { label: 'examples', to: '/examples/' },
      { label: 'FAQ', to: '/faq/' }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'superstyled',
        start_url: '/',
        background_color: '#58c9ad',
        theme_color: '#58c9ad',
        display: 'minimal-ui',
        icon: 'src/images/superstyled-icon.svg'
      }
    },
    'gatsby-plugin-offline'
  ]
}
