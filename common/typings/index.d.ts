import { TIcons } from '../constants/icons'

declare global {
  module CM {
    type Icon = {
      title: string
      content: string
    }
  }
}

export default global
