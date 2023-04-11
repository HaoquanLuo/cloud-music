import React, { ReactNode } from 'react'

interface CMFooterProps {
  children: ReactNode
}

const CMFooter: React.FC<CMFooterProps> = (props: CMFooterProps) => {
  const { children } = props
  return (
    <div id={'view-player'} className={'w-full h-24! px-14'}>
      {children}
    </div>
  )
}

export default CMFooter
