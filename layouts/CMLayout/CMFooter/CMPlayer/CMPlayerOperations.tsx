import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/IconBox'

interface CMPlayerOperationsProps {}

const CMPlayerOperations: React.FC<CMPlayerOperationsProps> = () => {
  return (
    <div id={'player-middle'} className={'flex-1'}>
      <div id={'player-operator'} className={'full flex jc ic gap-3 text-2xl'}>
        <div id={'play-operator-mode'}>
          {['order', 'random', 'repeat', 'repeatOne'].map((item, idx) => {
            if (idx === 0) {
              return <IconBox key={item} icon={ICONS['player'][item]} />
            }
          })}
        </div>
        <div id={'play-operator-operations'} className={'flex gap-2'}>
          {['skipBack', 'play', 'skipForward'].map((item, idx) => {
            return <IconBox key={item} icon={ICONS['player'][item]} />
          })}
        </div>
      </div>
    </div>
  )
}

export default CMPlayerOperations
