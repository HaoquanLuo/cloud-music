import CMContent from './CMContent'
import CMTopbar from './CMTopbar'

interface CMMainContainerProps {}

const CMMainContainer: React.FC<CMMainContainerProps> = () => {
  return (
    <div id={'container-main'} className={'flex-1 flex flex-col h-full '}>
      <CMTopbar />
      <CMContent />
    </div>
  )
}

export default CMMainContainer
