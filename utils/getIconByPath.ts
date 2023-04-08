import { ICONS, type TIconSetTitle } from '@/common/constants/icons'

export default function getIconByPath(path: string) {
  const [first, second] = path.split('/') as [TIconSetTitle, string]
  return ICONS[first][second]
}
