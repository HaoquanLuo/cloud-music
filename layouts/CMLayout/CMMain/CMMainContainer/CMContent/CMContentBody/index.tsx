import BoardBox from '@/components/BoardBox'

interface CMcontentBodyProps {}

const CMcontentBody: React.FC<CMcontentBodyProps> = () => {
  return (
    <div id={'content-body'} className={'w-full flex-1 flex jc px-20'}>
      <div id={'body-board-container'} className={'w-full h-full'}>
        <BoardBox />
      </div>
    </div>
  )
}

export default CMcontentBody
