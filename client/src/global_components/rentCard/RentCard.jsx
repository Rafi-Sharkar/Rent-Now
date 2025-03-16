import React from 'react'
import './rentcard.modules.css'
import { useNavigate } from 'react-router-dom'
import useCartContext from '../../useHooks/useCartContext'
import axios from 'axios'

export default function RentCard(props) {

const {cart,setCart}=useCartContext()
  const navigate = useNavigate()
  const likeUpdate=async()=>{
    const res = await axios.put(`http://localhost:3001/property/likeup/${props.id}`, {new_Rate: props.rate+1})
    window.location.reload()
  }

  const goBookingCart=()=>{
    setCart(props)
    navigate('/bookingcart')
  }

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
          <div className="rcbtn">
            {
              props.availability?
              <button onClick={goBookingCart} className='bg-[#25D366] border-[#25D366]'>Rent it</button>  
              :
              <button className='bg-[#ff6e40] border-[#ff6e40]'>Not Available</button>  
            }
            <button onClick={likeUpdate}>Like</button>
          </div>       
      </div>
    </>
  )
}
