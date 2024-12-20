import React from 'react'
import './filtercard.modules.css'
import { useNavigate } from 'react-router-dom'

export default function FilterCard() {

  const navigate = useNavigate()

  const goFind=()=>{
    navigate('/find')
  }

  return (
    <>
        <div className="fccontainer">
            <h2>Find a safe places to stay</h2>
            <p>Whether you're looking for a room, a flat, or a Community Centre—find at Rent On.</p>
            <form>
                <select  className='fcselect' name="cars">
                  <option  defaultValue={""} >Location</option>
                  <option value="rampura">Rampura</option>
                  <option value="badda">Badda</option>
                  <option value="bashundhara R/A">Bashundhara R/A</option>
                  <option value="natunbazaar">Natun Bazaar</option>
                </select>

                <select className='fcselect' name="cars">
                  <option defaultValue={""} >Rental item</option>
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
                <input onClick={goFind} className='fcsearch bg-[#FB335D] border-0' type="submit" value="Search" />
                

            </form>
        </div>
    </>
  )
}
