import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className={'text-green-500 text-center'} >Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  )
}
