import { ReactNode } from 'react'
import CMMainMenuBar from './CMMainMenubar'

interface CMMainProps {
  children?: ReactNode
}

const CMMain: React.FC<CMMainProps> = (props: CMMainProps) => {
  const { children } = props
  return (
    <div id={'view-container'} className={'w-full flex-1 flex'}>
      <CMMainMenuBar />
      <>{children}</>
    </div>
  )
}

export default CMMain
