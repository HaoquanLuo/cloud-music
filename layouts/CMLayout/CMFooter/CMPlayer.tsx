import IconBox from '@/components/IconBox'
import CMPlayerRegulators from './CMPlayer/CMPlayerRegulators'
import CMPlayerSongInfo from './CMPlayer/CMPlayerSongInfo'
import CMPlayerOperations from './CMPlayer/CMPlayerOperations'

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
