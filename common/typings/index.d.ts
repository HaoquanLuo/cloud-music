import { TIconSetTitle } from '../constants/icons'

declare global {
  module CM {
    type Icon = {
      iconTitle: string
      iconContent: string
    }

    type RouteLink = {
      routeTitle: string
      routePath: string
      routeContent?: string
      routeIconPath?: string
    }

    type Playlist = {
      playlistCover: string
      playlistTitle: string
      playlistInfo: string
    }
  }
}

export default global
