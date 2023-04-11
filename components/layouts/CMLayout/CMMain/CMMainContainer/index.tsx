import React, { ReactNode } from 'react'

interface CMMainContainerProps {
  Topbar: ReactNode
  Content: ReactNode
}

const CMMainContainer: React.FC<CMMainContainerProps> = (
  props: CMMainContainerProps
) => {
  const { Topbar, Content } = props
  return (
    <>
      <div id={'main-topbar'} className={'w-full h-12! flex ic pt-3 mb-3 px-4'}>
        {Topbar}
      </div>
      <div id={'main-content'} className={'full flex flex-col px-20'}>
        {Content}
      </div>
    </>
  )
}

export default CMMainContainer
