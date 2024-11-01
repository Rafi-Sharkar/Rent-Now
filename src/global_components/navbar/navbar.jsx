import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.modules.css'
import logo1 from '../../assets/photos/rentLogo.png'

export default function Navbar() {
  return (
    <>
    <div className='container'>
        <div className="left">
          <img src={logo1} alt="logo not found" />
        </div>
        <div className="mid">
          <ul className="menu">
            <li><Link className='menuLink' to={'/'}>Home</Link></li>
            <li><Link className='menuLink' to={'/find'}>Find</Link></li>
            <li><Link className='menuLink' to={'/service'}>Service</Link></li>
            <li><Link className='menuLink' to={'/about'}>About</Link></li>
            <li><Link className='menuLink' to={'/contact'}>Contact</Link></li>
          </ul>
        </div>
        <div className="right">
          <a href="##">Login</a>
          <a href="##">Register</a>
        </div>
    </div>
    </>
  )
}
