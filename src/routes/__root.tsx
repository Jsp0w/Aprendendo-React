import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: ()=>{return(
    <>
      <div className='flex flex-col items-center justify-center h-dvh'>
        <h1 className='text-6xl text-emerald-700 font-semibold'>404 Not Found</h1>
        <img className='h-1/2' src="Ryan.png" alt="" />
      </div>
    </>
  )}
})

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}
