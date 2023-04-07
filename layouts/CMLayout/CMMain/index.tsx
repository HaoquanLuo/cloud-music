import CMMainContainer from './CMMainContainer'
import CMMainMenubar from './CMMainMenubar'

interface CMMainProps {}

const CMMain: React.FC<CMMainProps> = () => {
  return (
    <div id={'view-container'} className={'w-full flex-1 flex'}>
      <CMMainMenubar />
      <CMMainContainer />
    </div>
  )
}

export default CMMain
