import type { GatsbyConfig } from "gatsby"
import path from "path"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `source-git-demo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `md-files`,
        remote: `https://github.com/KyleAMathews/md-files`,
        branch: `main`,
      },
    },
    `gatsby-transformer-remark`,
    // This is a bit hacky — you have to load gatsby-source-filesystem so
    // transformers can load files from gatsby-source-git as source-git assumes
    // source-filesystem is loaded.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src`),
        // Ignore everything.
        ignore: [`**`],
      },
    },
  ],
}

export default config
