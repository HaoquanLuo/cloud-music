import type { AppProps } from 'next/app'

import LinkBox from '@/components/LinkBox'
import IconBox from '@/components/IconBox'
import CMLayout from '@/layouts/CMLayout'

import '@unocss/reset/tailwind.css'
import '@/styles/uno.css'
import '@/styles/custom.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={'w-full h-full grid pic'}>
        <div className={'w-80% h-85%'}>
          <CMLayout>
            <Component {...pageProps} />
          </CMLayout>
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
    </>
  )
}
