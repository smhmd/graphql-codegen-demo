/**
 * These files use Mock Service Worker (msw) to mock GraphQL API calls in browser and server.
 * @see https://mswjs.io/docs/api/graphql
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-msw
 */

if (typeof window === 'undefined') {
  const { server } = require('./server')
  server.listen()
} else {
  const { worker } = require('./browser')
  worker.start()
}
