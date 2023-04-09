import { MENULINKS } from '@/common/constants/links/menuLinks'
import CMMenuFollows from './CMMenuFollows'
import CMMenuLinks from './CMMenuLinks'
import CMMenuOptions from './CMMenuOptions'

interface CMMainMenuBarProps {}

const CMMainMenuBar: React.FC<CMMainMenuBarProps> = () => {
  return (
    <div id={'container-menu'} className={'w-16 h-full flex flex-col py-3 ja'}>
      <CMMenuOptions />
      <CMMenuLinks menuLinks={MENULINKS} />
      <CMMenuFollows />
    </div>
  )
}

export default CMMainMenuBar
