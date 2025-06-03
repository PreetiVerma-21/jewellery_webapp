import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NonAuthLayout from '../layout/NonAuthLayout'
import Home from './Home'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NonAuthLayout/>}>
          <Route path="" element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes