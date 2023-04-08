import IconBox from '@/components/IconBox'
import LinkBox from '@/components/LinkBox'
import getIconByPath from '@/utils/getIconByPath'

interface CMMenuLinksProps {
  menuLinks: CM.MenuLink[]
}

const CMMenuLinks: React.FC<CMMenuLinksProps> = (props) => {
  const { menuLinks } = props
  return (
    <div
      id={'container-menu-middle'}
      className={'text-fade flex-1 flex flex-col gap-1 jc ic'}
    >
      {menuLinks.map((item, idx) => {
        return (
          <LinkBox
            key={item.menuTitle}
            active={{ value: idx === 0, type: 'activeLeft' }}
          >
            <IconBox
              icon={getIconByPath(item.menuIconPath)}
              iconSize={'2xl'}
              iconWidth={12}
              iconHeight={10}
            />
          </LinkBox>
        )
      })}
    </div>
  )
}

export default CMMenuLinks
