import BoardBox from '@/components/common/BoardBox'
import CardVerticalBox from '@/components/common/CardVerticalBox'
import LinkBox from '@/components/common/LinkBox'
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
    <BoardBox title={'boardTitle'}>
      {Array.from({ length: 6 }).map((_, i) => (
        <LinkBox key={i}>
          <CardVerticalBox playlist={playlist} />
        </LinkBox>
      ))}{' '}
    </BoardBox>
  )
}

export default Recommend

Recommend.Layout = 'Home'
