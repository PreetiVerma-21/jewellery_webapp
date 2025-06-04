import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NonAuthMenu from '../component/NonAuthMenu'

const NonAuthLayout = () => {
  return (
    <>
    <Header/>
    <NonAuthMenu/>
    <main style={{minHeight: "60vh"}}>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default NonAuthLayout