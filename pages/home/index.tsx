import { layouts } from '@/components/layouts'
import { CMPage } from '@/components/layouts/types'
import React from 'react'

interface HomeProps {
  children?: React.ReactNode
}

const Home: CMPage = (props: HomeProps) => {
  const { children } = props
  return (
    <div id={'main-content'} className={'full flex flex-col'}>
      {children}
    </div>
  )
}
export default Home

Home.Layout = layouts['Main']
