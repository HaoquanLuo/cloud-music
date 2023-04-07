import { Inter } from 'next/font/google'
import CMLayout from '@/layouts/CMLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div id="home" className={inter.className}>
      <div className={'w-full h-full grid pic'}>
        <div className={'w-80% h-85%'}>
          <CMLayout />
        </div>
      </div>
    </div>
  )
}
