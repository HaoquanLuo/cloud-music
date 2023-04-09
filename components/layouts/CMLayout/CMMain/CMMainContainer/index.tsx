import { ReactNode, useContext } from 'react'
import CMTopbar from './CMTopbar'

interface CMMainContainerProps {
  children?: ReactNode
}

const CMMainContainer: React.FC<CMMainContainerProps> = (
  props: CMMainContainerProps
) => {
  const { children } = props
  return (
    <div id={'container-main'} className={'flex-1 flex flex-col h-full '}>
      <CMTopbar />
      <>{children}</>
    </div>
  )
}

export default CMMainContainer
