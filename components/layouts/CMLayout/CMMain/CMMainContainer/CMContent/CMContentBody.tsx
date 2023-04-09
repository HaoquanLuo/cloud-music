import { ReactNode } from 'react'

interface CMcontentBodyProps {
  children: ReactNode
}

const CMcontentBody: React.FC<CMcontentBodyProps> = (props) => {
  const { children } = props
  return (
    <div id={'content-body'} className={'w-full h-full flex-1 flex jc px-20'}>
      <div id={'body-board-container'} className={'w-full h-full'}>
        {children}
      </div>
    </div>
  )
}

export default CMcontentBody
