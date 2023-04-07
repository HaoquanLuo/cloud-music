import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/IconBox'
import LinkBox from '@/components/LinkBox'

interface CMMenuLinksProps {}

const CMMenuLinks: React.FC<CMMenuLinksProps> = () => {
  return (
    <div
      id={'container-menu-middle'}
      className={
        'text-[rgba(255,_255,_255,_0.7)] flex-1 flex flex-col gap-1 jc ic'
      }
    >
      {[
        'home',
        'recommend',
        'broadcast',
        'collection',
        'cloud',
        'download',
      ].map((item, idx) => {
        return (
          <LinkBox key={item} active={{ value: idx === 0, type: 'activeleft' }}>
            <IconBox
              icon={ICONS['navlink'][item]}
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
