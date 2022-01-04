import { GraphQLClient } from 'graphql-request'

import { getSdk } from './generated/server'

const client = new GraphQLClient(process.env.CMS_URI as string, {
  headers: {
    Authorization: 'Bearer ' + process.env.CMS_TOKEN,
  },
})

export const content = getSdk(client)

export * from './generated/server'
