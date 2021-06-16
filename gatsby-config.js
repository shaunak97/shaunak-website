module.exports = {
  siteMetadata: {
    title: "Shaunak Website",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],

};
