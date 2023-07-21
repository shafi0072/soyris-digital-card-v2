import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProfileInformation from '@/src/component/app/Root/ProfileInformation/ProfileInformation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <ProfileInformation/>
    </>
  )
}
