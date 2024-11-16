import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.modules.css'
import logo1 from '../../assets/photos/rentLogo.png'

export default function Navbar() {

  const navigate = useNavigate()

  const goLogin=()=>{
    navigate('/login')
  }

  const goRegistation=()=>{
    navigate('/registation')
  }

  const goUser=()=>{
    navigate('/users')
  }

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
          <div>
          <button onClick={goLogin}>Login</button>
          <button onClick={goRegistation}>Register</button>
          </div>
          <div className='cursor-pointer' onClick={goUser}>
          <i className="fa-solid fa-user"></i><span> User name</span>
          </div>
        </div>
    </div>
    </>
  )
}
