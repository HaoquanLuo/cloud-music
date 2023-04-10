import { layouts } from '@/components/layouts'
import { CMPage } from '@/components/layouts/types'

interface RankingProps {}

const Ranking: CMPage = (props: RankingProps) => {
  return <h1>ranking</h1>
}

export default Ranking

Ranking.Layout = layouts['Home']
