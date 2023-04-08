import { Inter } from 'next/font/google'

import CMcontentBody from '@/layouts/CMLayout/CMMain/CMMainContainer/CMContent/CMContentBody'
import CMContentNavLink from '@/layouts/CMLayout/CMMain/CMMainContainer/CMContent/CMContentNavlink'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const navLinks = ['个性推荐', '歌手', '歌单', '排行榜']

  return (
    <div id="home" className={inter.className}>
      <div id={'main-content'} className={'w-full flex-1 flex flex-col'}>
        <CMContentNavLink navLinks={navLinks} />
        <CMcontentBody />
      </div>
    </div>
  )
}
