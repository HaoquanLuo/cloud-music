import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/IconBox'
import { ChangeEvent, useState } from 'react'

interface CMTopbarSearchProps {}

const CMTopbarSearch: React.FC<CMTopbarSearchProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('最伟大的作品')

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div id="top-bar-middle" className={'px-16 full flex gap-6'}>
      <div id={'topbar-search'} className={'flex-1 flex ic'}>
        <div
          id={'search-bar'}
          className={
            'w-full  h-80% px-2 text-xl bg-light bg-op-10 rd-2 flex ic gap-2'
          }
        >
          <div id={'search-bar-left'}>
            <IconBox
              icon={ICONS['menubar']['search']}
              iconSize={'xl'}
              clickable={false}
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
              icon={ICONS['menubar']['microphone']}
              iconSize={'xl'}
              iconShape={'rounded'}
              iconWidth={8}
              iconHeight={8}
            />
          </div>
        </div>
      </div>
      <div id={'topbar-user'} className={'flex ic gap-3'}>
        <div id={'topbar-user-avatar'} className={'flex ic'}>
          <i className={'w-8 h-8 rd-36 ring-1 ring-light'}></i>
        </div>
        <div id={'topbar-user-nickname'}>Jay Chou</div>
      </div>
    </div>
  )
}

export default CMTopbarSearch
