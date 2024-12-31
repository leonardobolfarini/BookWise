import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Layout from "../layouts/AppLayout";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
