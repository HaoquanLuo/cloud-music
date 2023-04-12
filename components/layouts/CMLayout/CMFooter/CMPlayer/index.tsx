import CMPlayerRegulators from './CMPlayerRegulators'
import CMPlayerSongInfo from './CMPlayerSongInfo'
import CMPlayerOperations from './CMPlayerOperations'
import React from 'react'

interface CMPlayerProps {
  PlayerSongInfo: React.ReactNode
  PlayerOperations: React.ReactNode
  PlayerRegulators: React.ReactNode
}

const CMPlayer: React.FC<CMPlayerProps> = (props: CMPlayerProps) => {
  const { PlayerOperations, PlayerRegulators, PlayerSongInfo } = props
  return (
    <div id={'player-container'} className={'w-full h-full flex'}>
      <div id={'player-left'} className={'flex-1 text-sm'}>
        {PlayerSongInfo}
      </div>
      <div id={'player-middle'} className={'flex-1'}>
        {PlayerOperations}
      </div>
      <div id={'player-right'} className={'flex-1'}>
        {PlayerRegulators}
      </div>
    </div>
  )
}

export default CMPlayer
