import { layouts } from '@/components/layouts'
import { CMPage } from '@/components/layouts/types'

interface DownloadProps {}

const Download: CMPage = (props: DownloadProps) => {
  return <h1>Download</h1>
}

export default Download

Download.Layout = layouts['Main']
