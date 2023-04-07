import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/IconBox'

interface CMMenuOptionsProps {}

const CMMenuOptions: React.FC<CMMenuOptionsProps> = () => {
  return (
    <div id={'container-menu-top'} className={'grid pic pb-11'}>
      <IconBox icon={ICONS['menubar']['menu']} iconSize={'3xl'} />
    </div>
  )
}

export default CMMenuOptions
