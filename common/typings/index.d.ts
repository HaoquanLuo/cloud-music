import { TIconSetTitle } from "../constants/icons";

declare global {
  module CM {
    type State = {
      activeNavLink: {
        menuNavLink: string;
        homeNavLink: string;
      };
    };

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
