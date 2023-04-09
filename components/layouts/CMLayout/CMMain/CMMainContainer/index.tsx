import { ReactNode, useContext } from 'react'
import CMContent from './CMContent'
import CMTopbar from './CMTopbar'
import { CMLayoutContext } from '../..'

interface CMMainContainerProps {
  children?: ReactNode
}

const CMMainContainer: React.FC<CMMainContainerProps> = ({ children }) => {
  const content = useContext(CMLayoutContext)
  return (
    <div id={'container-main'} className={'flex-1 flex flex-col h-full '}>
      <CMTopbar />
      <CMContent>{content}</CMContent>
    </div>
  )
}

export default CMMainContainer
