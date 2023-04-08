import LinkBox from '@/components/LinkBox'

interface CMContentMenuLinkProps {
  navLinks: string[]
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
          <LinkBox
            key={item}
            active={{ value: idx === 0, type: 'activeBottom' }}
          >
            <a>{item}</a>
          </LinkBox>
        )
      })}
    </div>
  )
}

export default CMContentNavLink
