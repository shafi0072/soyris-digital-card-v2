import '@/styles/globals.css'
import Layout from '@/src/component/core/Layout/Layout2'
import ContextApi from '@/src/Storage/ContextApi'
import { useRouter } from 'next/router';
import 'react-image-crop/dist/ReactCrop.css';
import 'cropperjs/dist/cropper.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import LoadingOverlay from 'react-loading-overlay';

export default function App({ Component, pageProps }) {
  
  const router = useRouter()
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken && router.pathname !== '/profile/[user]') {
      router.push('/auth')
    }
  }, [])

  return <>
  <ContextApi>
    {router?.pathname !== '/auth'&& router?.pathname !== '/profile/[user]'  ? (<Layout>
      <Component {...pageProps} />
    </Layout>) : (<Component {...pageProps} />)}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />
  </ContextApi>
  </>
}
