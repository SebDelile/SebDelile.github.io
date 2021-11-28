module.exports = {
  siteMetadata: {
    siteUrl: 'https://sebdelile.github.io/',
    title: 'SebDelile',
    description:
      'the personnal page of Sébastien Delile, showing handled technologies, achievments and background',
    author: 'Sébastien Delile',
    keywords: 'developer, dev, web, react, frontend, portfolio',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['DM Sans', 'Zen Kurenaido'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SebDelil',
        short_name: 'GSebDelile',
        start_url: '/',
        background_color: '#eeeeee',
        theme_color: '#043b6b',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
