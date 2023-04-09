import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/common/IconBox'

interface CMMenuOptionsProps {}

const CMMenuOptions: React.FC<CMMenuOptionsProps> = () => {
  return (
    <div id={'container-menu-top'} className={'grid pic pb-11'}>
      <IconBox icon={ICONS['menuBar']['menu']} iconSize={'3xl'} />
    </div>
  )
}

export default CMMenuOptions
