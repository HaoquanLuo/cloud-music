import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/common/IconBox'
import React from 'react'

interface CMTopbarOptionsProps {}

const CMTopbarOptions: React.FC<CMTopbarOptionsProps> = () => {
  return (
    <div id={'topbar-options'} className={'px-2 flex gap-1'}>
      {['settings', 'minimize', 'maximize', 'close'].map((item, idx) => {
        return <IconBox key={item} icon={ICONS['menuBar'][item]} />
      })}
    </div>
  )
}

export default CMTopbarOptions
