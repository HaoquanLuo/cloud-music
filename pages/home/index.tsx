import CMcontentBody from '@/components/layouts/CMLayout/CMMain/CMMainContainer/CMContent/CMContentBody'
import { CMPage } from '@/components/layouts/types'

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

Home.Layout = 'Home'
