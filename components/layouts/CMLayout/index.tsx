import { ReactNode, createContext } from 'react'
import CMPlayer from './CMFooter/CMPlayer'
import CMMain from './CMMain'
import { Inter } from 'next/font/google'
import IconBox from '@/components/common/IconBox'
import LinkBox from '@/components/common/LinkBox'

interface CMLayoutProps {
  children: ReactNode
}

export const CMLayoutContext = createContext<ReactNode>(<>default context</>)

const inter = Inter({ subsets: ['latin'] })

function CMLayout(props: CMLayoutProps) {
  const { children } = props
  return (
    <div id="home" className={inter.className}>
      <div className={'w-full h-full grid pic'}>
        <div className={'w-80% h-85%'}>
          <div id={'main-content'} className={'full flex flex-col'}>
            <div
              id={'view-box'}
              className={
                'flex flex-col bg-#101010 text-light w-full h-full rd-lg overflow-hidden'
              }
            >
              {
                <CMLayoutContext.Provider value={children}>
                  <CMMain />
                  <CMPlayer />
                </CMLayoutContext.Provider>
              }
            </div>
          </div>
        </div>
      </div>
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
    </div>
  )
}

export default CMLayout
