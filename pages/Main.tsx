interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={'w-full h-screen grid place-items-center'}>
      <div className={'w-80% h-90%'}>
        <div
          id={'view-box'}
          className={
            'flex flex-col bg-#101010 text-light w-full h-full rd-lg overflow-hidden'
          }
        >
          <div id={'view-container'} className={'w-full flex-1 flex'}>
            <div id={'container-menu'} className={'w-16 h-full '}></div>
            <div
              id={'container-main'}
              className={'flex-1 flex flex-col h-full '}
            >
              <div id={'main-search'} className={'w-full h-14 '}></div>
              <div
                id={'main-content'}
                className={'w-full flex-1 flex flex-col'}
              >
                <div
                  id={'content-navbar'}
                  className={'w-full h-11 flex jc '}
                ></div>
                <div className={'w-full flex-1 flex jc px-20'}>
                  <div id={'content-body'} className={'w-full h-full '}>
                    <div
                      id={'body-article'}
                      className={'w-full h-fit flex flex-col'}
                    >
                      <div
                        id={'article-title'}
                        className={'text-4xl font-500 text-yellow'}
                      >
                        title
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
                              list-title
                            </div>
                            <div
                              className={'list-info w-full text-xs text-left'}
                            >
                              list-info list-info list-info
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
          <div id={'view-player'} className={'w-full h-24 px-8 '}>
            <div id={'player-container'} className={'w-full h-full flex px-6'}>
              <div id={'player-left'} className={'flex-1'}>
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
                        className={`text-xl  ${
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
                      'i-ri-skip-back-line',
                      'i-ri-play-line',
                      'i-ri-skip-forward-line',
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
