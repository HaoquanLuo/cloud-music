import { ReactNode } from 'react'

interface CMContentProps {
  children?: ReactNode
}

const CMContent: React.FC<CMContentProps> = (props) => {
  const { children } = props
  return <>{children}</>
}

export default CMContent
