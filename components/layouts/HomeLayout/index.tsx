import { Children, ReactNode } from 'react'

import { HOMELINKS } from '@/common/constants/links/homeLinks'
import CMcontentBody from '../CMLayout/CMMain/CMMainContainer/CMContent/CMContentBody'
import CMContentNavLink from '../CMLayout/CMMain/CMMainContainer/CMContent/CMContentNavlink'
import CMLayout from '../CMLayout'

interface HomeLayoutProps {
  children?: ReactNode
}

const HomeLayout = (props: HomeLayoutProps) => {
  const { children } = props
  const navLinks = HOMELINKS
  return (
    <CMLayout>
      <CMContentNavLink navLinks={navLinks} />
      <CMcontentBody>{children}</CMcontentBody>
    </CMLayout>
  )
}

export default HomeLayout
