import { Inter } from 'next/font/google'

import CMcontentBody from '@/layouts/CMLayout/CMMain/CMMainContainer/CMContent/CMContentBody'
import CMContentNavLink from '@/layouts/CMLayout/CMMain/CMMainContainer/CMContent/CMContentNavlink'
import { HOMELINKS } from '@/common/constants/links/homeLinks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const navLinks = HOMELINKS

  return (
    <div id="home" className={inter.className}>
      <div id={'main-content'} className={'full flex flex-col'}>
        <CMContentNavLink navLinks={navLinks} />
        <CMcontentBody />
      </div>
    </div>
  )
}
