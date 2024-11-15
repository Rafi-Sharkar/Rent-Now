import React from 'react'
import Navbar from './global_components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Find from './pages/find/Find'
import Service from './pages/service/Service'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Footer from './global_components/footer/Footer'
import Privacy from './pages/privacy/Privacy'
import './layout.css'
import Login from './global_components/login/Login'
import RenterProfile from './pages/userprofile/RenterProfile'
import OwnerProfile from './pages/userprofile/OwnerProfile'
import AdminProfile from './pages/userprofile/AdminProfile'
import Error from './pages/error/Error'


export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/find' element={<Find/>}/>
          <Route exact path='/service' element={<Service/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/privacy' element={<Privacy/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/users' element={<RenterProfile />}/>
          <Route exact path='/users/owner' element={<OwnerProfile/>}/>
          <Route exact path='/users/admin' element={<AdminProfile/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}
