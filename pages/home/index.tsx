import React from 'react'
import { layouts } from '@/components/layouts'
import { CMPage } from '@/components/layouts/types'
import { useRouter } from 'next/router'

interface HomeProps {
  children?: React.ReactNode
}

const Home: CMPage = (props: HomeProps) => {
  const router = useRouter()
  React.useEffect(() => {
    router.replace('/home/recommend')
  }, [router])

  return <></>
}
export default Home

Home.Layout = layouts['Home']
