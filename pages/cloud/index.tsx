import { layouts } from '@/components/layouts'
import { CMPage } from '@/components/layouts/types'

interface CloudProps {}

const Cloud: CMPage = (props: CloudProps) => {
  return <h1>Cloud</h1>
}

export default Cloud

Cloud.Layout = layouts['Main']
