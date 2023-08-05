import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProfileInformation from '@/src/component/app/Root/ProfileInformation/ProfileInformation'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/my-cards')
  },[])
  return (
    <>
      
    </>
  )
}
