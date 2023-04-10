import { layouts } from '@/components/layouts'
import { CMPage } from '@/components/layouts/types'

interface SingersProps {}

const Singers: CMPage = (props: SingersProps) => {
  return <h1>singers</h1>
}

export default Singers

Singers.Layout = layouts['Home']
