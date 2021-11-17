module.exports = {
  siteMetadata: {
    siteUrl: 'https://sebdelile.github.io/',
    title: 'SebDelile',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
  ],
};
