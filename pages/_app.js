import '@/styles/globals.css'
import Layout from '@/src/component/core/Layout'
export default function App({ Component, pageProps }) {
  return <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    
  </>
}
