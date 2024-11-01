import React from 'react'
import './filtercard.modules.css'

export default function FilterCard() {
  return (
    <>
        <div className="fccontainer">
            <h2>Find a safe places to stay</h2>
            <p>Whether you're looking for a room, a flat, or a Community Centre—find at Rent On.</p>
            <form>
                <select className='fcselect' name="cars">
                  <option value="location" selected>Location</option>
                  <option value="rampura">Rampura</option>
                  <option value="badda">Badda</option>
                  <option value="bashundhara R/A">Bashundhara R/A</option>
                  <option value="natunbazaar">Natun Bazaar</option>
                </select>

                <select className='fcselect' name="cars">
                  <option value="rentalitem" selected>Rental item</option>
                  <option value="room">Room</option>
                  <option value="flat">Flat</option>
                  <option value="communitycenter">Community Center</option>
                  <option value="parking">Parking</option>
                </select>
                <div className="date">
                    <div className="in">
                        <label htmlFor="in">Check In</label><br/>
                        <input id='in' type='date'/>
                    </div>
                    <div className="out">
                        <label htmlFor="out">Check Out</label><br/>
                        <input id='out' type='date'/>
                    </div>
                </div>
                <input className='fcsearch' type="submit" value="Search" />
                

            </form>
        </div>
    </>
  )
}
