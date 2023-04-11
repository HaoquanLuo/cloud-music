import Link from 'next/link'

import IconBox from '@/components/common/IconBox'
import LinkBox from '@/components/common/LinkBox'
import getIconByPath from '@/utils/getIconByPath'

interface CMMenuLinksProps {
  menuLinks: CM.RouteLink[]
}

const CMMenuLinks: React.FC<CMMenuLinksProps> = (props) => {
  const { menuLinks } = props
  return (
    <>
      {menuLinks.map((item, idx) => {
        return (
          <Link key={item.routeTitle} href={item.routePath}>
            <LinkBox active={{ value: idx === 0, type: 'activeLeft' }}>
              <IconBox
                icon={getIconByPath(item.routeIconPath!)}
                iconSize={'2xl'}
                iconWidth={12}
                iconHeight={10}
              />
            </LinkBox>
          </Link>
        )
      })}
    </>
  )
}

export default CMMenuLinks
