import React from 'react'
import type { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import '@unocss/reset/tailwind.css'
import '@/styles/uno.css'
import '@/styles/custom.css'
import '@/styles/globals.css'
import { LayoutKeys } from '@/components/layouts/types'
import { layouts } from '@/components/layouts'

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutKeys
  }
}
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout =
    layouts[Component.Layout] ?? ((page: React.ReactElement) => page)

  return (
    <Layout>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
