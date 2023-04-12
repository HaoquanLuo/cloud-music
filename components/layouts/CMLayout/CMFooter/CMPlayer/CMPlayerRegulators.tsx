import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/common/IconBox'

interface CMPlayerRegulatorsProps {}

const CMPlayerRegulators: React.FC<CMPlayerRegulatorsProps> = () => {
  return (
    <div id={'player-regulator'} className={'full flex jc ic gap-2 text-2xl'}>
      {['device', 'playlist', 'equalizer', 'volume'].map((item, idx) => {
        return (
          <IconBox
            key={item}
            icon={ICONS['player'][item]}
            iconShape={idx === 3 ? 'rounded' : 'square'}
          />
        )
      })}
      <input
        type={'range'}
        min={0}
        max={100}
        step={2}
        id={'player-volume'}
        className={'h-3 bg-red-600 appearance-none overflow-hidden rd-3'}
      />
    </div>
  )
}

export default CMPlayerRegulators
