import React, { createContext, useState } from 'react'
import './rentcard.modules.css'
import { useNavigate } from 'react-router-dom'
import BookingCart from '../../pages/bookingcart/BookingCart'

export const CartContext = createContext()

export default function RentCard(props) {


  const navigate = useNavigate()

  const goBookingCart=()=>{
    navigate('/bookingcart')
  }

  return (
    <>
      <div className="rccontainer">
        <a href="##">
          <img src={props.img} alt="Image not found" />
        </a>
        <div className="rcdetails">
          <div className="rcheader">
            <h3>{props.title}</h3>
            <div className="rate">
            <i className="fa-solid fa-star"></i><span>{props.rate}</span>
            </div>
          </div>
          <p>{props.description}</p>
          <div className="rcpa">
              <h2>{props.price}<span>per month</span></h2>  
              <div className="rcfloorarea">
                <h3>{props.farea}sqf</h3>
                <p>Floor Area</p>
              </div>
          </div> 
        </div>
          <div className="rcbtn">
            <button onClick={goBookingCart} >Rent it</button>  
            <button>Like</button>
          </div>       
      </div>
    </>
  )
}
