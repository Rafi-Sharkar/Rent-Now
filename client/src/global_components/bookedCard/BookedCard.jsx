import React from 'react'
import './bookedcard.modules.css'
import { useNavigate } from 'react-router-dom'
import useCartContext from '../../useHooks/useCartContext'
import axios from 'axios'

export default function BookedCard(props) {

  const day = 1000 * 60 * 60 * 24
  const likeUpdate=async()=>{
    const res = await axios.put(`http://localhost:3001/property/likeup/${props.id}`, {new_Rate: props.rate+1})
  }

  const goBookingCart=async()=>{
    console.log(props.bid)
    const res = await axios.delete(`http://localhost:3001/users/delbooking/${props.bid}`)
    window.location.reload()
  }
  // console.log(cart)
  return (
    <>
      <div className="rccontainer">
        <a href="##">
          <img src={`http://localhost:3001/getallimg?name=${props.img.filename}`} alt="Image not found" />
        </a>
        <div className="rcdetails">
          <div className="rcheader">
            <h3>{props.location}</h3>
            <div className="rate">
            <i className="fa-solid fa-star"></i><span>{props.rate}</span>
            </div>
          </div>
          <p>{props.details}</p>
          <div className="rcpa">
              <h2>{props.price}<span>per month</span></h2>  
              <div className="rcfloorarea">
                <h3>{props.farea}sqf</h3>
                <p>Floor Area</p>
              </div>
          </div> 
        </div>
          <div className="rcbtn1">
            <button className='mb-2 border-[1px] border-[solid] text-red-600'>Expired in {(props.b_expired-props.b_date)/day}days</button>  
            <button onClick={goBookingCart} className='bg-[#25D366] border-[#25D366] text-white'>Cancel Booking</button>  
          </div>       
      </div>
    </>
  )
}
