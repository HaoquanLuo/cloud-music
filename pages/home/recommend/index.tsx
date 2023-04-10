import BoardBox from '@/components/common/BoardBox'
import CardVerticalBox from '@/components/common/CardVerticalBox'
import LinkBox from '@/components/common/LinkBox'
import { layouts } from '@/components/layouts'
import { CMPage } from '@/components/layouts/types'

interface RecommendProps {}

const Recommend: CMPage = (props: RecommendProps) => {
  const playlist = {
    playlistCover: 'playlistCover',
    playlistTitle: 'playlistTitle',
    playlistInfo:
      'playlistInfo playlistInfo playlistInfo playlistInfo playlistInfo playlistInfo ',
  }
  return (
    <div id="recommend">
      <BoardBox title={'boardTitle'}>
        {Array.from({ length: 6 }).map((_, i) => (
          <LinkBox key={i}>
            <CardVerticalBox playlist={playlist} />
          </LinkBox>
        ))}
      </BoardBox>
    </div>
  )
}

export default Recommend

Recommend.Layout = layouts['Home']
