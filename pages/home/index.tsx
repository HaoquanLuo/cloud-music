import React from 'react'
import { layouts } from '@/components/layouts'
import { CMPage } from '@/components/layouts/types'
import { useRouter } from 'next/router'

interface HomeProps {
  children?: React.ReactNode
}

const Home: CMPage = (props: HomeProps) => {
  const router = useRouter()
  router.replace('/home/recommend')
  return <h1>home</h1>
}
export default Home

Home.Layout = layouts['Home']
