import { ReactNode } from 'react'

interface CMMainProps {
  MainContainer: ReactNode
  MainMenuBar: ReactNode
}

const CMMain: React.FC<CMMainProps> = (props: CMMainProps) => {
  const { MainMenuBar, MainContainer } = props
  return (
    <div id={'view-container'} className={'w-full flex-1 flex'}>
      <div
        id={'container-menu'}
        className={'w-16 h-full flex flex-col py-3 ja'}
      >
        {MainMenuBar}
      </div>
      <div id={'container-main'} className={'flex-1 flex flex-col h-full'}>
        {MainContainer}
      </div>
    </div>
  )
}

export default CMMain
