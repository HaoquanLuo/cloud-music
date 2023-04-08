import { TIconSetTitle } from '../constants/icons'

declare global {
  module CM {
    type Icon = {
      iconTitle: string
      iconContent: string
    }

    type MenuLink = {
      menuTitle: string
      menuIconPath: `${keyof TIconSetTitle}/${string}`
    }

    type MenuLinks = Record<string, MenuLink>

    type Playlist = {
      playlistCover: string
      playlistTitle: string
      playlistInfo: string
    }
  }
}

export default global
