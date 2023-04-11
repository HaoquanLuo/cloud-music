import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/common/IconBox'

interface CMMenuOptionsProps {}

const CMMenuOptions: React.FC<CMMenuOptionsProps> = () => {
  return <IconBox icon={ICONS['menuBar']['menu']} iconSize={'3xl'} />
}

export default CMMenuOptions
