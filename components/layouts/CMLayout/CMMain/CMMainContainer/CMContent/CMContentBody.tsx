import { ReactNode } from 'react'

interface CMContentBodyProps {
  children?: ReactNode
}

const CMContentBody: React.FC<CMContentBodyProps> = (props) => {
  const { children } = props
  return (
    <div id={'content-body'} className={'w-full h-full flex-1 flex jc px-20'}>
      <div id={'body-board-container'} className={'w-full h-full'}>
        {children}
      </div>
    </div>
  )
}

export default CMContentBody
