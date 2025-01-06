import { QueryClientProvider } from '@tanstack/react-query'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import Layout from '../layouts/AppLayout'
import { queryClient } from '../lib/react-query'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </QueryClientProvider>
  )
}
