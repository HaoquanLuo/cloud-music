import CMcontentBody from './CMContentBody'
import CMContentNavlink from './CMContentNavlink'

interface CMContentProps {}

const CMContent: React.FC<CMContentProps> = () => {
  return (
    <div id={'main-content'} className={'w-full flex-1 flex flex-col'}>
      <CMContentNavlink />
      <CMcontentBody />
    </div>
  )
}

export default CMContent
