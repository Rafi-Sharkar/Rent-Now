import React from 'react'
import './rentcard.modules.css'
import house1 from '../../assets/photos/house1.jpg'

export default function RentCard(props) {
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
            <i class="fa-solid fa-star"></i><span>{props.rate}</span>
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
            <button>Rent it</button>  
            <button>Like</button>
          </div>       
      </div>
    </>
  )
}
