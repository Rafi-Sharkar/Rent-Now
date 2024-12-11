import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.modules.css'
import logo1 from '../../assets/photos/rentLogo.png'

export default function Navbar() {

  const navigate = useNavigate()

  const goLogin=()=>{
    navigate('/login')
  }
  const logOut=()=>{
    window.localStorage.clear()
    navigate('/')
  }

  const goRegistation=()=>{
    navigate('/registation')
  }

  const goUser=()=>{
    navigate('/users')
  }
  const [login,setlogin]=useState("")
  const [name,setname]=useState("")
useEffect(()=>{
   const login=window.localStorage.getItem("login")
   const name=window.localStorage.getItem("name")
   setlogin(login)
   setname(name)
})
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
          {
            login?
            <div className='flex items-center gap-4'>
              <div className='cursor-pointer' onClick={goUser}>
                <i className="fa-solid fa-user"></i><span> {name}</span>
              </div>
              <div>
                <button className='border rounded bg-[#333]' onClick={logOut}><h1 className='text-white px-[.4rem] py-[.3rem]'>LogOut</h1></button>
              </div>
            </div>:
            <div>
               <button onClick={goLogin}>Login</button>
               <button onClick={goRegistation}>Register</button>
            </div>
          }
          
          
        </div>
    </div>
    </>
  )
}
