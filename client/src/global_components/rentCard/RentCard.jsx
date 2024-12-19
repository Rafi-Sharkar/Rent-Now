import React from 'react'
import './rentcard.modules.css'
import { useNavigate } from 'react-router-dom'
import useCartContext from '../../useHooks/useCartContext'
export default function RentCard(props) {

const {cart,setCart}=useCartContext()
  const navigate = useNavigate()

  const goBookingCart=()=>{
    setCart(props)
    navigate('/bookingcart')
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
          <div className="rcbtn">
            <button onClick={goBookingCart} >Rent it</button>  
            <button>Like</button>
          </div>       
      </div>
    </>
  )
}
