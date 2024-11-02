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


export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/find' element={<Find/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}
