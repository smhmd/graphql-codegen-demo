import { mockAuthorsQuery } from '../content/generated/server'
import { getAuthors as authors } from './data'

export const handlers = [
  mockAuthorsQuery((_, res, ctx) => res(ctx.data({ authors }))),
]
