import { HOMELINKS } from '@/common/constants/links/homeLinks'
import CMContentBody from '../CMLayout/CMMain/CMMainContainer/CMContent/CMContentBody'
import CMContentNavLink from '../CMLayout/CMMain/CMMainContainer/CMContent/CMContentNavlink'
import CMMainLayout from '../CMLayout'

const CMHomeLayout = (page: React.ReactElement) => {
  const navLinks = HOMELINKS
  return CMMainLayout(
    <>
      <CMContentNavLink navLinks={navLinks} />
      <CMContentBody>{page}</CMContentBody>
    </>
  )
}

export default CMHomeLayout
