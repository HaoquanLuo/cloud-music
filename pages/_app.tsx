import React from 'react'
import type { NextComponentType, NextPage, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import { LayoutKeys } from '@/components/layouts/types'
import { layouts } from '@/components/layouts'

import '@unocss/reset/tailwind.css'
import '@/styles/uno.css'
import '@/styles/custom.css'
import '@/styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? ((page: React.ReactElement) => <>{page}</>)

  return Layout(
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}
