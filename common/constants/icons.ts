export type TIconSetTitle = "menuBar" | "menuLink" | "player";

export const ICONS: Record<TIconSetTitle, Record<string, CM.Icon>> = {
  menuBar: {
    menu: {
      iconTitle: "menu",
      iconContent: "i-ri-menu-fill",
    },
    anchorLeft: {
      iconTitle: "anchorLeft",
      iconContent: "i-ri-arrow-left-s-line",
    },
    anchorRight: {
      iconTitle: "anchorRight",
      iconContent: "i-ri-arrow-right-s-line",
    },
    search: {
      iconTitle: "search",
      iconContent: "i-ri-search-line",
    },
    microphone: {
      iconTitle: "microphone",
      iconContent: "i-ri-mic-line",
    },
    settings: {
      iconTitle: "settings",
      iconContent: "i-ri-settings-line",
    },
    minimize: {
      iconTitle: "minimize",
      iconContent: "i-ri-subtract-line",
    },
    maximize: {
      iconTitle: "maximize",
      iconContent: "i-ri-fullscreen-line",
    },
    close: {
      iconTitle: "close",
      iconContent: "i-ri-close-line",
    },
  },
  menuLink: {
    home: {
      iconTitle: "home",
      iconContent: "i-ri-home-8-line",
    },
    radio: {
      iconTitle: "radio",
      iconContent: "i-ri-star-smile-line",
    },
    broadcast: {
      iconTitle: "broadcast",
      iconContent: "i-ri-broadcast-line",
    },
    collection: {
      iconTitle: "collection",
      iconContent: "i-ri-heart-line",
    },
    cloud: {
      iconTitle: "cloud",
      iconContent: "i-ri-cloudy-line",
    },
    download: {
      iconTitle: "download",
      iconContent: "i-ri-download-2-line",
    },
    add: {
      iconTitle: "add",
      iconContent: "i-ri-add-circle-line",
    },
  },
  player: {
    heart: {
      iconTitle: "heart",
      iconContent: "i-ri-heart-line",
    },
    heartFill: {
      iconTitle: "heartFill",
      iconContent: "i-ri-heart-fill",
    },
    order: {
      iconTitle: "order",
      iconContent: "i-ri-order-play-line",
    },
    random: {
      iconTitle: "random",
      iconContent: "i-ri-shuffle-line",
    },
    repeat: {
      iconTitle: "repeat",
      iconContent: "i-ri-repeat-line",
    },
    repeatOne: {
      iconTitle: "repeatOne",
      iconContent: "i-ri-repeat-one-line",
    },
    skipBack: {
      iconTitle: "skipBack",
      iconContent: "i-ri-skip-back-fill",
    },
    skipForward: {
      iconTitle: "skipForward",
      iconContent: "i-ri-skip-forward-fill",
    },
    play: {
      iconTitle: "play",
      iconContent: "i-ri-play-fill",
    },
    pause: {
      iconTitle: "pause",
      iconContent: "i-ri-pause-line",
    },
    device: {
      iconTitle: "device",
      iconContent: "i-ri-speaker-line",
    },
    playlist: {
      iconTitle: "playlist",
      iconContent: "i-ri-play-list-line",
    },
    equalizer: {
      iconTitle: "equalizer",
      iconContent: "i-ri-equalizer-line",
    },
    volume: {
      iconTitle: "volume",
      iconContent: "i-ri-volume-up-line",
    },
  },
};
