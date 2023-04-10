import { NextPage } from 'next'
import { layouts } from '.'

export type LayoutKeys = keyof typeof layouts
export type Layouts = typeof layouts

export type CMPage<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (page: React.ReactElement) => React.ReactNode
}
