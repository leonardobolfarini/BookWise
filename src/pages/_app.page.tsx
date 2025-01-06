import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Layout from "../layouts/AppLayout";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/react-query";

globalStyles()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
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
