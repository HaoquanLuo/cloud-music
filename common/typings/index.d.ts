import { TIconSetTitle } from "../constants/icons";

declare global {
  module CM {
    type State = {
      navLinkActive: {
        navLinkMenu: string;
        navLinkHome: string;
      };
    };

    type SongInfo = {
      songId: string;
      songTitle: string;
      songCoverId: string;
      songSinger: string;
      songDuration: number;
    };

    type PlayerMode = "order" | "random" | "repeat" | "repeatOne";

    type PlayerOperations = "skipBack" | "skipForward" | "play" | "pause";

    type PlayerStatus = "playing" | "paused";

    type Action<T = keyof State["navLinkActive"]> = {
      type: T;
      payload: string;
    };

    type RouteLink = {
      routeTitle: string;
      routePath: string;
      routeContent?: string;
      routeIconPath?: string;
    };

    type Icon = {
      iconTitle: string;
      iconContent: string;
    };

    type Playlist = {
      playlistCover: string;
      playlistTitle: string;
      playlistInfo: string;
    };
  }
}

export default global;
