import { ReactNode } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import CMPlayer from './CMFooter/CMPlayer'
import CMMain from './CMMain'
import IconBox from '@/components/common/IconBox'
import LinkBox from '@/components/common/LinkBox'
import CMMainContainer from './CMMain/CMMainContainer'
import CMContent from './CMMain/CMMainContainer/CMContent'
import CMcontentBody from './CMMain/CMMainContainer/CMContent/CMContentBody'

interface CMLayoutProps {
  children?: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

function CMLayout(props: CMLayoutProps) {
  const { children } = props
  return (
    <div id="home" className={inter.className}>
      <div className={'w-full h-full grid pic'}>
        <div className={'w-80% h-85%'}>
          <div
            id={'view-box'}
            className={
              'flex flex-col bg-#101010 text-light w-full h-full rd-lg overflow-hidden'
            }
          >
            <CMMain>
              <CMMainContainer>
                <CMContent>
                  <CMcontentBody>{children}</CMcontentBody>
                </CMContent>
              </CMMainContainer>
            </CMMain>
            <CMPlayer />
          </div>
        </div>
      </div>
      <div className={'fixed top-4 right-4'}>
        <LinkBox>
          <Link href="https://github.com/ffxixslh/cloud-music">
            <IconBox
              icon={'i-ri-github-fill'}
              iconShape={'rounded'}
              iconSize={'3xl'}
            />
          </Link>
        </LinkBox>
      </div>
    </div>
  )
}

export default CMLayout
