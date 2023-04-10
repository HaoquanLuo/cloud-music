import { ReactNode } from 'react'

interface CMContentProps {
  children?: ReactNode
}

const CMContent: React.FC<CMContentProps> = (props) => {
  const { children } = props
  return (
    <div id={'main-content'} className={'full flex flex-col'}>
      {children}
    </div>
  )
}

export default CMContent
