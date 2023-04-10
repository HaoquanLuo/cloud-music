import CMPlayerRegulators from './CMPlayerRegulators'
import CMPlayerSongInfo from './CMPlayerSongInfo'
import CMPlayerOperations from './CMPlayerOperations'

interface CMPlayerProps {}

const CMPlayer: React.FC<CMPlayerProps> = () => {
  return (
    <div id={'view-player'} className={'w-full h-24! px-14'}>
      <div id={'player-container'} className={'w-full h-full flex'}>
        <CMPlayerSongInfo />
        <CMPlayerOperations />
        <CMPlayerRegulators />
      </div>
    </div>
  )
}

export default CMPlayer
