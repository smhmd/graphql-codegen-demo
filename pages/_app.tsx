import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

if (process.env.NEXT_PUBLIC_APP_ENV === 'test') {
  require('../mocks')
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
