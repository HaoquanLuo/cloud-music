import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/IconBox'

interface CMMenuFollowsProps {}

const CMMenuFollows: React.FC<CMMenuFollowsProps> = () => {
  return (
    <div
      id={'container-menu-bottom'}
      className={'flex-1 pt-4 flex flex-col ic gap-3 text-2xl'}
    >
      <div
        id={'menu-bottom-follow-avatar'}
        className={'flex flex-col ic gap-3'}
      >
        {Array.from({ length: 3 }).map((item, idx) => {
          return (
            <i key={idx} className={'w-7.5 h-7.5 ring-1 ring-light rd'}></i>
          )
        })}
      </div>
      <div
        id={'menu-bottom-follow-add'}
        className={'text-[rgba(255,_255,_255,_0.7)]'}
      >
        <IconBox icon={ICONS['navlink']['add']} />
      </div>
    </div>
  )
}

export default CMMenuFollows
