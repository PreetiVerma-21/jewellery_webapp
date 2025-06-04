import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NonAuthLayout from '../layout/NonAuthLayout'
import Home from './Home'
import AboutUs from './AboutUs'
import Collections from './Collections'
import Blog from './Blog'
import ContactUs from './ContactUs'
import PageNotFound from './PageNotFound'
import Login from './login/Login'
import SignUp from './login/SignUp'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NonAuthLayout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="about" element={<AboutUs/>}/>
          <Route path="collections" element={<Collections/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="contactUs" element={<ContactUs/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>}/>
        </Route>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes