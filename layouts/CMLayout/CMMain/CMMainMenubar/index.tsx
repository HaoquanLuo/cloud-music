import CMMenuFollows from './CMMenuFollows'
import CMMenuLinks from './CMMenuLinks'
import CMMenuOptions from './CMMenuOptions'

interface CMMainMenubarProps {}

const CMMainMenubar: React.FC<CMMainMenubarProps> = () => {
  return (
    <div id={'container-menu'} className={'w-16 h-full flex flex-col py-3 ja'}>
      <CMMenuOptions />
      <CMMenuLinks />
      <CMMenuFollows />
    </div>
  )
}

export default CMMainMenubar
