import { TIconSetTitle } from "../constants/icons";

declare global {
  module CM {
    type State = {
      activeNavLink: {
        menuNavLink: string;
        homeNavLink: string;
      };
    };

    type SongInfo = {
      songId: string;
      songTitle: string;
      songCoverId: string;
      singer: string;
      duration: number;
    };

    type PlayerMode = "order" | "random" | "repeat" | "repeatOne";

    type PlayerOperations = "skipBack" | "skipForward" | "play" | "pause";

    type PlayerStatus = "playing" | "paused";

    type Action<T = keyof State["activeNavLink"]> = {
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
