import { GraphQLClient } from 'graphql-request'

import { getSdk } from './generated/server'

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_ENDPOINT_URI as string,
  {
    headers: {
      Authorization: 'Bearer ' + process.env.ADMIN_TOKEN,
    },
  }
)

export const api = getSdk(client)

export * from './generated/client'
