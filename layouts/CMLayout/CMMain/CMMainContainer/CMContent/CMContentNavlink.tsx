import LinkBox from '@/components/LinkBox'
import Link from 'next/link'

interface CMContentMenuLinkProps {
  navLinks: CM.RouteLink[]
}

const CMContentNavLink: React.FC<CMContentMenuLinkProps> = (props) => {
  const { navLinks } = props
  return (
    <div
      id={'content-menuLink'}
      className={'w-full h-8 my-3 flex jc gap-6 text-base'}
    >
      {navLinks.map((item, idx) => {
        return (
          <Link key={item.routeTitle} href={item.routePath}>
            <LinkBox active={{ value: idx === 0, type: 'activeBottom' }}>
              {item.routeContent}
            </LinkBox>
          </Link>
        )
      })}
    </div>
  )
}

export default CMContentNavLink
