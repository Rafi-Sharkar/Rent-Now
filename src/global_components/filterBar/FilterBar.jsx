import React, { useState } from 'react'
import style from './filterbar.module.css'
import SetRange from '../setrange/SetRange'

export default function FilterBar() {

  const [arrowdown, setDownArrow] = useState(false)
  const [arrowdown1, setDownArrow1] = useState(false)

  const [pmin, setPMin] = useState()
  const [pmax, setPMax] = useState()

  const [famin, setFAMin] = useState()
  const [famax, setFAMax] = useState()

  return (
    <>
      <div className={style.fbcontainer}>
        <form className={style.fbfrom}>
            <div>
              <label htmlFor="location">Location</label><br/>
              <select className={style.fbfd1}>
                <option value="choose">Choose Any</option>
                <option value="rampura">Rampura</option>
                <option value="rampura">Badda</option>
                <option value="rampura">Natun Bazaar</option>
                <option value="rampura">Bashundhara R/A</option>
              </select>
            </div>
            <div>
              <label htmlFor="propertytype">Property Type</label><br/>
              <select className={style.fbfd2}>
                <option value="choose" selected>Choose Any</option>
                <option value="rampura">Badda</option>
                <option value="rampura">Natun Bazaar</option>
                <option value="rampura">Bashundhara R/A</option>
              </select>
            </div>
            <div className={style.fbfd3}>
              <label htmlFor="price">Price</label><br/>
              <div className={style.fbfd4div} onClick={()=>setDownArrow(!arrowdown)}>
                <p>{pmin}-{pmax}</p>
                <i className={`${arrowdown?'fa-solid fa-angle-up':'fa-solid fa-angle-down'}`}></i>
              </div>
              <SetRange ad={arrowdown} sAD={setDownArrow} sMin={setPMin} sMax={setPMax}/>
            </div>
            <div className={style.fbfd4}>
              <label htmlFor="floorarea">Floor Area</label><br/>
              <div className={style.fbfd4div} onClick={()=>setDownArrow1(!arrowdown1)}>
                <p>{famin}-{famax}</p>
                <i className={`${arrowdown1?'fa-solid fa-angle-up':'fa-solid fa-angle-down'}`}></i>
              </div>
              <SetRange ad={arrowdown1} sAD={setDownArrow1}sMin={setFAMin} sMax={setFAMax}/>
            </div>
            <div className={style.fbfd5}>
                <input type='submit' value={'Search'} />
            </div>
        </form>
      </div>
    </>
  )
}
