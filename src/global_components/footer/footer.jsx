import React from 'react'
import { Form, Link } from 'react-router-dom'
import './footer.modules.css'

export default function Footer() {
  return (
    <>
      <div className="fsec1">
        <div className="fleft">
          <h3 className='sut'>Support</h3>
            <li><Link className='fmenuLink' to={'/contact'}>Help Center</Link></li>
            <li><Link className='fmenuLink' to={'/about'}>Area Caver</Link></li>
            <li><Link className='fmenuLink' to={'/privacy'}>Anti-discrimination</Link></li>
            <li><Link className='fmenuLink' to={'/contact'}>Disability support</Link></li>
            <li><Link className='fmenuLink' to={'/service'}>Cancellation Option</Link></li>
            <li><Link className='fmenuLink' to={'/contact'}>Report & Complaint</Link></li>
            
        </div>
        <div className="fleft">
          <h3 className='sut'>Links</h3>
            <li><Link className='fmenuLink' to={'/'}>Home</Link></li>
            <li><Link className='fmenuLink' to={'/find'}>Find</Link></li>
            <li><Link className='fmenuLink' to={'/service'}>Service</Link></li>
            <li><Link className='fmenuLink' to={'/about'}>About</Link></li>
            <li><Link className='fmenuLink' to={'/contact'}>Contact</Link></li>
        </div>
        <div className="fright">
          <h3 className='sut'>Contact Us</h3>
          <form>
            <input className='w-[240px]' type='text' placeholder='Enter Your Email'/><br />
            <input className='w-[240px]' type='text' placeholder='Write Your message...'/> <br/>
            <input className='w-[80px] bg-[#333] text-white font-[700]' type='submit' value='Send' />
          </form>
        </div>
      </div>
      <div className="fsec2">
        <div className="fleft1">
          <span> &#169; 2024 RentOn,Inc.</span>
          <li><Link className='fmenuLink1' to={'/privacy'}>Terms</Link></li>
          <li><Link className='fmenuLink1' to={'/privacy'}>Privacy</Link></li>
          <li><Link className='fmenuLink1' to={'/privacy'}>Your Privacy Choices</Link></li>
        </div>
        <div className="fright1">
          <a href="##"><i className="fa-brands fa-square-facebook"></i></a>
          <a href="##"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="##"><i className="fa-brands fa-square-x-twitter"></i></a>
          <a href="##"><i className="fa-brands fa-square-youtube"></i></a>            
        </div>
      </div>
    </>
  )
}
