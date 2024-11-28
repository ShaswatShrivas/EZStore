import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (<>
    <Header/>
    <Outlet/>
    </>
  )
}
