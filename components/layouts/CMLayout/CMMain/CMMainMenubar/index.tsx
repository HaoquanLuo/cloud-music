import React from 'react'

interface CMMainMenuBarProps {
  MenuOptions: React.ReactNode
  MenuLinks: React.ReactNode
  MenuFollows: React.ReactNode
}

const CMMainMenuBar: React.FC<CMMainMenuBarProps> = (
  props: CMMainMenuBarProps
) => {
  const { MenuFollows, MenuLinks, MenuOptions } = props
  return (
    <>
      <div id={'container-menu-top'} className={'grid pic pb-11'}>
        {MenuOptions}
      </div>
      <div
        id={'container-menu-middle'}
        className={'text-fade flex-1 flex flex-col gap-1 jc ic'}
      >
        {MenuLinks}
      </div>
      <div
        id={'container-menu-bottom'}
        className={'flex-1 pt-4 flex flex-col ic gap-3 text-2xl'}
      >
        {MenuFollows}
      </div>
    </>
  )
}

export default CMMainMenuBar
