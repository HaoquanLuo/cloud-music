import React from 'react'

interface CMTopbarProps {
  TopbarAnchors: React.ReactNode
  TopbarSearch: React.ReactNode
  TopbarUser: React.ReactNode
  TopbarOptions: React.ReactNode
}

const CMTopbar: React.FC<CMTopbarProps> = (props) => {
  const { TopbarAnchors, TopbarOptions, TopbarSearch, TopbarUser } = props
  return (
    <>
      <div id="topbar-left">{TopbarAnchors}</div>
      <div id="topbar-middle" className={'px-16 full flex gap-6'}>
        <div id={'topbar-search'} className={'flex-1 flex ic'}>
          {TopbarSearch}
        </div>
        <div id={'topbar-user'} className={'flex ic'}>
          {TopbarUser}
        </div>
      </div>
      <div id="topbar-right">{TopbarOptions}</div>
    </>
  )
}

export default CMTopbar
