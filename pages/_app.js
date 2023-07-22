import '@/styles/globals.css'
import Layout from '@/src/component/core/Layout'
import ContextApi from '@/src/Storage/ContextApi'
import 'react-image-crop/dist/ReactCrop.css';
import 'cropperjs/dist/cropper.css';
export default function App({ Component, pageProps }) {
  return <ContextApi>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    
  </ContextApi>
}
