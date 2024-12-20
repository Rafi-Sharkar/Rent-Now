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

import RenterProfile from './pages/userprofile/UserProfile'
import Error from './pages/error/Error'
import Login from './pages/login/Login'
import Registation from './pages/login/Registation'
import OwnerReqBook from './pages/userprofile/OwnerReqBook'
import BookingCart from './pages/bookingcart/BookingCart'
import CartProviders from './Context/CartContext'


export default function Layout() {
  return (
    <div>
      
        <Navbar/>
      
        <CartProviders>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/find' element={<Find/>}/>
          <Route exact path='/bookingcart' element={<BookingCart/>}/>
        {/* </Routes>
        <Routes> */}
          <Route exact path='/service' element={<Service/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/privacy' element={<Privacy/>}/>
          <Route exact path='/registation'element={<Registation/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/users' element={<RenterProfile />}/>
          <Route exact path='/users/reqbooking' element={<OwnerReqBook/>}/>

          <Route path='*' element={<Error/>}/>
          </Routes>
        </CartProviders>
        <Footer/>
    </div>
  )
}
