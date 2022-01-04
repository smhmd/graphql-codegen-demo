const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '.env') })

module.exports = {
  projects: {
    api: {
      schema: 'api/generated/schema.json',
      documents: 'api/**/*.gql',
      extensions: {
        endpoints: {
          default: {
            url: process.env.NEXT_PUBLIC_ENDPOINT_URI,
          },
        },
      },
    },

    content: {
      schema: 'content/generated/schema.json',
      documents: 'content/**/*.gql',
      extensions: {
        endpoints: {
          default: {
            url: process.env.CMS_URI,
            headers: {
              Authorization: `Bearer ${process.env.CMS_TOKEN}`,
            },
          },
        },
      },
    },
  },
}
