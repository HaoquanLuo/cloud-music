import { ReactNode } from 'react'
import CMMainContainer from './CMMainContainer'
import CMMainMenuBar from './CMMainMenubar'

interface CMMainProps {
  children?: ReactNode
}

const CMMain: React.FC<CMMainProps> = ({ children }) => {
  return (
    <div id={'view-container'} className={'w-full flex-1 flex'}>
      <CMMainMenuBar />
      <CMMainContainer />
    </div>
  )
}

export default CMMain
