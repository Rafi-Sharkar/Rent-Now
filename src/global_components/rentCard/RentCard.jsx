import React from 'react'
import './rentcard.modules.css'
import house1 from '../../assets/photos/house1.jpg'

export default function RentCard() {
  return (
    <>
      <div className="rccontainer">
        <a href="##">
          <img src={house1} alt="Image not found" />
        </a>
        <div className="rcdetails">
          <div className="rcheader">
            <h3>Bashundhora R/A, Dhaka</h3>
            <div className="rate">
            <i class="fa-solid fa-star"></i><span>4.8</span>
            </div>
          </div>
          <p>A Shop Is Up For Rent In Bashundhara R-A Near Eastern Bank Limited</p>
          <div className="rcpa">
              <h2>30000tk<span>per month</span></h2>  
              <div className="rcfloorarea">
                <h3>1400sqf</h3>
                <p>Floor Area</p>
              </div>
          </div> 
          <div className="rcbtn">
            <button>Rent it</button>  
            <button>Like</button>
          </div> 
                      
        </div>
      </div>
    </>
  )
}
