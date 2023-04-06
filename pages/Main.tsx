interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={'w-full h-full grid pic'}>
      <div className={'w-80% h-90%'}>
        <div
          id={'view-box'}
          className={
            'flex flex-col bg-#101010 text-light w-full h-full rd-lg overflow-hidden'
          }
        >
          <div id={'view-container'} className={'w-full flex-1 flex'}>
            <div
              id={'container-menu'}
              className={'w-16 h-full flex flex-col py-3 ja'}
            >
              <div id={'container-menu-top'} className={'grid pic pb-11'}>
                <div className={'text-3xl i-ri-menu-fill'}></div>
              </div>
              <div
                id={'container-menu-middle'}
                className={
                  'text-[rgba(255,_255,_255,_0.7)] flex-1 flex flex-col gap-1.5 jc ic'
                }
              >
                {[
                  'i-ri-home-8-line',
                  'i-ri-star-smile-line',
                  'i-ri-broadcast-line',
                  'i-ri-heart-line',
                  'i-ri-cloudy-line',
                  'i-ri-download-2-line',
                ].map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`relative w-12 h-10 grid pic text-2xl rd hover:bg-light hover:bg-op-20 ${
                        idx === 0 && 'activeleft'
                      }`}
                    >
                      <div className={item}></div>
                    </div>
                  )
                })}
              </div>
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
                      <div
                        key={idx}
                        className={'w-7.5 h-7.5 ring-1 ring-light rd'}
                      ></div>
                    )
                  })}
                </div>
                <div
                  id={'menu-bottom-follow-add'}
                  className={'text-[rgba(255,_255,_255,_0.7)]'}
                >
                  <div className={'i-ri-add-circle-line'}></div>
                </div>
              </div>
            </div>
            <div
              id={'container-main'}
              className={'flex-1 flex flex-col h-full '}
            >
              <div
                id={'main-topnav'}
                className={'w-full h-14 flex ic pt-2 px-4'}
              >
                <div id="top-nav-left">
                  <div id={'topnav-anchors'} className={'px-8 flex gap-1.5 ic'}>
                    {['i-ri-arrow-left-s-line', 'i-ri-arrow-right-s-line'].map(
                      (item, idx) => {
                        return (
                          <div
                            key={idx}
                            className={`w-10 h-10 grid pic text-3xl rd hover:bg-light hover:bg-op-20`}
                          >
                            <div className={item}></div>
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
                <div id="top-nav-middle" className={'px-16 full flex gap-6'}>
                  <div id={'topnav-search'} className={'flex-1 flex ic'}>
                    <div
                      id={'search-bar'}
                      className={
                        'w-full  h-80% px-2 text-xl bg-light bg-op-15 rd-2 flex ic gap-2'
                      }
                    >
                      <div id={'search-bar-left'}>
                        <div className={'i-ri-search-line'}></div>
                      </div>
                      <div
                        id={'search-bar-middle'}
                        className={'flex-1 text-sm'}
                      >
                        最伟大的作品
                      </div>
                      <div id={'search-bar-right'}>
                        <div className={'i-ri-mic-line'}></div>
                      </div>
                    </div>
                  </div>
                  <div id={'topnav-user'} className={'flex ic gap-3'}>
                    <div id={'topnav-user-avatar'} className={'flex ic'}>
                      <div className={'w-8 h-8 rd-36 ring-1 ring-light'}></div>
                    </div>
                    <div id={'topnav-user-nickname'}>Jay Chou</div>
                  </div>
                </div>
                <div id="top-nav-right">
                  <div id={'topnav-options'} className={'px-2 flex text-2xl'}>
                    {[
                      'i-ri-settings-line',
                      'i-ri-subtract-line',
                      'i-ri-fullscreen-line',
                      'i-ri-close-line',
                    ].map((item, idx) => {
                      return (
                        <div
                          key={idx}
                          className={
                            'w-10 h-10 grid pic text-2xl rd hover:bg-light hover:bg-op-20'
                          }
                        >
                          <div className={item}></div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div
                id={'main-content'}
                className={'w-full flex-1 flex flex-col'}
              >
                <div
                  id={'content-navbar'}
                  className={'w-full h-11 py-2 flex jc gap-6 text-base'}
                >
                  {['个性推荐', '歌手', '歌单', '排行榜'].map((item, idx) => {
                    return (
                      <div key={idx} className={'relative'}>
                        <div className={`${idx === 0 && 'activebottom'}`}>
                          {item}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div
                  id={'content-body'}
                  className={'w-full flex-1 flex jc px-20'}
                >
                  <div
                    id={'body-article-container'}
                    className={'w-full h-full '}
                  >
                    <div
                      id={'body-article'}
                      className={'w-full h-fit flex flex-col'}
                    >
                      <div id={'article-title'} className={'text-4xl font-500'}>
                        board title
                      </div>
                      <div id={'article-content'} className={'flex gap-3'}>
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className={
                              'list-big w-28 h-44 p-2 flex flex-col gap-y-1 jc ic rd '
                            }
                          >
                            <div
                              className={
                                'list-cover w-24 h-24 rd ring-1 ring-light'
                              }
                            ></div>
                            <div
                              className={
                                'list-title w-full font-bold text-sm text-left'
                              }
                            >
                              playlist-title
                            </div>
                            <div
                              className={'list-info w-full text-xs text-left'}
                            >
                              playlist-info playlist-info
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id={'view-player'} className={'w-full h-23 px-14'}>
            <div id={'player-container'} className={'w-full h-full flex'}>
              <div id={'player-left'} className={'flex-1 text-sm'}>
                <div id={'player-song'} className={'full flex gap-3 ic'}>
                  <div
                    id="song-cover"
                    className={'w-16 h-16 ring-1 ring-light rd'}
                  ></div>
                  <div id={'song-info'} className={'flex flex-col '}>
                    <div id={'song-info-title'} className={''}>
                      song-title
                    </div>
                    <div id={'song-info-singer'} className={''}>
                      singer
                    </div>
                  </div>
                  <div id={'song-detail'} className={'flex flex-col'}>
                    <div id={'song-detail-addition'} className={'flex ja ic'}>
                      <div
                        id={'song-like'}
                        className={` ${
                          true ? 'i-ri-heart-fill' : 'i-ri-heart-line'
                        }`}
                      ></div>
                      <div id={'song-format'} className={''}>
                        FLAC
                      </div>
                    </div>
                    <div id={'song-detail-length'} className={'flex'}>
                      <div id={'song-current-length'} className={''}>
                        01:25/05:10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id={'player-middle'} className={'flex-1'}>
                <div
                  id={'player-operator'}
                  className={'full flex jc ic gap-3 text-2xl'}
                >
                  <div id={'play-operator-mode'}>
                    <div
                      className={
                        [
                          'i-ri-order-play-line',
                          'i-ri-shuffle-line',
                          'i-ri-repeat-line',
                          'i-ri-repeat-one-line',
                        ][0]
                      }
                    ></div>
                  </div>
                  <div id={'play-operator-operations'} className={'flex gap-2'}>
                    {[
                      'i-ri-skip-back-fill',
                      'i-ri-play-fill',
                      'i-ri-skip-forward-fill',
                    ].map((item, idx) => {
                      return <div key={idx} className={item}></div>
                    })}
                  </div>
                </div>
              </div>
              <div id={'player-right'} className={'flex-1'}>
                <div
                  id={'player-adjustment'}
                  className={'full flex jc ic gap-2 text-2xl'}
                >
                  <div
                    id={'player-adjustment-devices'}
                    className={'i-ri-speaker-line'}
                  ></div>
                  <div
                    id={'player-adjustment-playlist'}
                    className={'i-ri-play-list-line'}
                  ></div>
                  <div
                    id={'player-adjustment-equalizer'}
                    className={'i-ri-equalizer-line'}
                  ></div>
                  <div
                    id={'player-adjustment-volume'}
                    className={'i-ri-volume-up-line flex'}
                  >
                    <div id={'player-volume'} className={'bg-light'}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
