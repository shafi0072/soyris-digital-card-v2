import '@/styles/globals.css'
import Layout from '@/src/component/core/Layout'
import ContextApi from '@/src/Storage/ContextApi'
export default function App({ Component, pageProps }) {
  return <ContextApi>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    
  </ContextApi>
}
