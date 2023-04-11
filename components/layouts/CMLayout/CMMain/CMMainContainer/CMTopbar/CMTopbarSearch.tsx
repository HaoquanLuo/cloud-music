import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/common/IconBox'
import { ChangeEvent, useState } from 'react'

interface CMTopbarSearchProps {}

const CMTopbarSearch: React.FC<CMTopbarSearchProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('最伟大的作品')

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <div
        id={'search-bar'}
        className={'full px-2 text-xl bg-light bg-op-10 rd-2 flex ic gap-2'}
      >
        <div id={'search-bar-left'}>
          <IconBox
            icon={ICONS['menuBar']['search']}
            iconSize={'xl'}
            clickable={false}
            bgHighlight={false}
          />
        </div>
        <input
          value={searchValue}
          onChange={handleSearchValueChange}
          id={'search-bar-middle'}
          className={
            'flex-1 text-base h-full bg-transparent outline-none border-none focus:outline-none focus:border-none '
          }
        />
        <div id={'search-bar-right'}>
          <IconBox
            icon={ICONS['menuBar']['microphone']}
            iconSize={'xl'}
            iconShape={'rounded'}
            iconWidth={8}
            iconHeight={8}
          />
        </div>
      </div>
    </>
  )
}

export default CMTopbarSearch
