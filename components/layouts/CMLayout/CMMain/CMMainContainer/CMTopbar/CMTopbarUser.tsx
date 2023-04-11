import React from 'react'

interface CMTopbarUserProps {}

const CMTopbarUser: React.FC<CMTopbarUserProps> = () => {
  return (
    <div id={'topbar-user'} className={'flex ic gap-3'}>
      <div id={'topbar-user-avatar'} className={'flex ic'}>
        <i className={'w-8 h-8 rd-36 ring-1 ring-light'}></i>
      </div>
      <div id={'topbar-user-nickname'}>Jay Chou</div>
    </div>
  )
}

export default CMTopbarUser
