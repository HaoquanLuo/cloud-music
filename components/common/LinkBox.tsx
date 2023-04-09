import { ReactNode } from 'react'

interface LinkBoxProps {
  children: ReactNode
  active?: {
    value: boolean
    type: 'activeLeft' | 'activeBottom'
  }
}

const LinkBox: React.FC<LinkBoxProps> = (props) => {
  const { children, active } = props
  return (
    <div
      className={`relative rd cursor-pointer ${
        active?.value ? active.type : ''
      }`}
    >
      {children}
    </div>
  )
}

export default LinkBox
