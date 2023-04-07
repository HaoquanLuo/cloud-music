import { Inter } from 'next/font/google'
import CMLayout from '@/layouts/CMLayout'
import LinkBox from '@/components/LinkBox'
import IconBox from '@/components/IconBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div id="home" className={inter.className}>
      <div className={'fixed top-4 right-4'}>
        <LinkBox>
          <a href="https://github.com/ffxixslh/cloud-music">
            <IconBox
              icon={'i-ri-github-fill'}
              iconShape={'rounded'}
              iconSize={'3xl'}
            />
          </a>
        </LinkBox>
      </div>
      <div className={'w-full h-full grid pic'}>
        <div className={'w-80% h-85%'}>
          <CMLayout />
        </div>
      </div>
    </div>
  )
}
