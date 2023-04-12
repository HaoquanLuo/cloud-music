import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/common/IconBox'

interface CMPlayerSongInfoProps {}

const CMPlayerSongInfo: React.FC<CMPlayerSongInfoProps> = (props) => {
  return (
    <div id={'player-song'} className={'full flex gap-4 ic'}>
      <i id="song-cover" className={'w-16 h-16 ring-1 ring-light rd'}></i>
      <div id={'song-info'} className={'flex flex-col gap-1'}>
        <div id={'song-info-title'} className={''}>
          song-title
        </div>
        <div id={'song-info-singer'} className={''}>
          singer
        </div>
      </div>
      <div id={'song-detail'} className={'flex flex-col gap-1'}>
        <div id={'song-detail-addition'} className={'flex jb ic'}>
          <div id={'song-like'} className={`text-xl text-red-600 m-0 `}>
            <IconBox
              icon={
                true ? ICONS['player']['heartFill'] : ICONS['player']['heart']
              }
              iconShape={'rounded'}
              iconSize={'xl'}
              iconWidth={8}
              iconHeight={8}
            />
          </div>
          <div id={'song-format'} className={''}>
            FLAC
          </div>
        </div>
        <div id={'song-detail-length'} className={'flex'}>
          <div id={'song-current-length'} className={''}>
            01:25/05:10
          </div>
        </div>
      </div>
    </div>
  )
}

export default CMPlayerSongInfo
