import BoardBox from '@/components/BoardBox'
import CardVerticalBox from '@/components/CardVerticalBox'
import LinkBox from '@/components/LinkBox'

interface CMcontentBodyProps {}

const CMcontentBody: React.FC<CMcontentBodyProps> = () => {
  const playlist = {
    playlistCover: 'playlistCover',
    playlistTitle: 'playlistTitle',
    playlistInfo:
      'playlistInfo playlistInfo playlistInfo playlistInfo playlistInfo playlistInfo ',
  }
  return (
    <div id={'content-body'} className={'w-full h-full flex-1 flex jc px-20'}>
      <div id={'body-board-container'} className={'w-full h-full'}>
        <BoardBox title={'boardTitle'}>
          {Array.from({ length: 6 }).map((_, i) => (
            <LinkBox key={i}>
              <CardVerticalBox playlist={playlist} />
            </LinkBox>
          ))}{' '}
        </BoardBox>
      </div>
    </div>
  )
}

export default CMcontentBody
