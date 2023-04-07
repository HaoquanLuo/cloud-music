import LinkBox from '@/components/LinkBox'

interface CMContentNavlinkProps {}

const CMContentNavlink: React.FC<CMContentNavlinkProps> = () => {
  return (
    <div
      id={'content-navlink'}
      className={'w-full h-8 my-3 flex jc gap-6 text-base'}
    >
      {['个性推荐', '歌手', '歌单', '排行榜'].map((item, idx) => {
        return (
          <LinkBox key={item}>
            <a className={`${idx === 0 && 'activebottom'}`}>{item}</a>
          </LinkBox>
        )
      })}
    </div>
  )
}

export default CMContentNavlink
