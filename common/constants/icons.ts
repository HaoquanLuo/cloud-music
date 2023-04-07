type TIconSetTitle = 'menubar' | 'navlink' | 'player'

export const ICONS: Record<TIconSetTitle, Record<string, CM.Icon>> = {
  menubar: {
    menu: {
      title: 'menu',
      content: 'i-ri-menu-fill',
    },
    anchorLeft: {
      title: 'anchorLeft',
      content: 'i-ri-arrow-left-s-line',
    },
    anchorRight: {
      title: 'anchorRight',
      content: 'i-ri-arrow-right-s-line',
    },
    search: {
      title: 'search',
      content: 'i-ri-search-line',
    },
    microphone: {
      title: 'microphone',
      content: 'i-ri-mic-line',
    },
    settings: {
      title: 'settings',
      content: 'i-ri-settings-line',
    },
    minimize: {
      title: 'minimize',
      content: 'i-ri-subtract-line',
    },
    maximize: {
      title: 'maximize',
      content: 'i-ri-fullscreen-line',
    },
    close: {
      title: 'close',
      content: 'i-ri-close-line',
    },
  },
  navlink: {
    home: {
      title: 'home',
      content: 'i-ri-home-8-line',
    },
    recommend: {
      title: 'recommend',
      content: 'i-ri-star-smile-line',
    },
    broadcast: {
      title: 'broadcast',
      content: 'i-ri-broadcast-line',
    },
    collection: {
      title: 'collection',
      content: 'i-ri-heart-line',
    },
    cloud: {
      title: 'cloud',
      content: 'i-ri-cloudy-line',
    },
    download: {
      title: 'download',
      content: 'i-ri-download-2-line',
    },
    add: {
      title: 'add',
      content: 'i-ri-add-circle-line',
    },
  },
  player: {
    heart: {
      title: 'heart',
      content: 'i-ri-heart-line',
    },
    heartFill: {
      title: 'heartFill',
      content: 'i-ri-heart-fill',
    },
    order: {
      title: 'order',
      content: 'i-ri-order-play-line',
    },
    random: {
      title: 'random',
      content: 'i-ri-shuffle-line',
    },
    repeat: {
      title: 'repeat',
      content: 'i-ri-repeat-line',
    },
    repeatOne: {
      title: 'repeatOne',
      content: 'i-ri-repeat-one-line',
    },
    skipBack: {
      title: 'skipBack',
      content: 'i-ri-skip-back-fill',
    },
    skipForward: {
      title: 'skipForward',
      content: 'i-ri-skip-forward-fill',
    },
    play: {
      title: 'play',
      content: 'i-ri-play-fill',
    },
    device: {
      title: 'device',
      content: 'i-ri-speaker-line',
    },
    playlist: {
      title: 'playlist',
      content: 'i-ri-play-list-line',
    },
    equalizer: {
      title: 'equalizer',
      content: 'i-ri-equalizer-line',
    },
    volume: {
      title: 'volume',
      content: 'i-ri-volume-up-line',
    },
  },
}
