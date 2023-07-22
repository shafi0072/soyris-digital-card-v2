import '@/styles/globals.css'
import Layout from '@/src/component/core/Layout'
import ContextApi from '@/src/Storage/ContextApi'
import { useRouter } from 'next/router';
import 'react-image-crop/dist/ReactCrop.css';
import 'cropperjs/dist/cropper.css';
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return <ContextApi>
    { router?.pathname !== '/auth' ?(<Layout>
    <Component {...pageProps} />
    </Layout>):(<Component {...pageProps} />)}
    
  </ContextApi>
}
