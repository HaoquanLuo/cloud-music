import CMLayout from './CMLayout'
import HomeLayout from './HomeLayout'
import React from 'react'

export const layouts = {
  Main: CMLayout,
  Home: HomeLayout,
}

type NestLayoutFn = (
  parent: React.FC,
  children: React.FC
) => (page: React.ReactNode) => JSX.Element

const nestLayoutFn: NestLayoutFn = (parent, children) => {
  return (page) => parent(children(page!)!)!
}

export const NestedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <CMLayout>{children}</CMLayout>
}

const getLayout = (page: React.ReactNode) => {
  return <NestedLayout>{page}</NestedLayout>
}

// export const HomePageLayout = nestLayoutFn(HomeLayout, getLayout)
