import React, { useState } from 'react'
import style from './filterbar.module.css'
import SetRange from '../setrange/SetRange'
import { useNavigate } from 'react-router-dom'


export default function FilterBar() {

  const navigate = useNavigate

  const [arrowdown, setDownArrow] = useState(false)
  const [arrowdown1, setDownArrow1] = useState(false)

  const [pmin, setPMin] = useState()
  const [pmax, setPMax] = useState()

  const [famin, setFAMin] = useState()
  const [famax, setFAMax] = useState()

  const goFind=()=>{
    navigate('/find')
  }

  const getValue=(e)=>{
    console.log(e.target.value)

  }

  return (
    <>
      <div className={style.fbcontainer}>
        <form className={style.fbfrom}>
            <div>
              <label htmlFor="location">Location</label><br/>
              <select onChange={getValue} className={style.fbfd1}>
                <option defaultValue={""}>Choose Any</option>
                <option value="badda">Badda</option>
                <option value="rampura">Rampura</option>
                <option value="natun bazaar">Natun Bazaar</option>
                <option value="basundhara r/">Basundhara R/A</option>
              </select>
            </div>
            <div>
              <label htmlFor="propertytype">Property Type</label><br/>
              <select className={style.fbfd2}>
                <option defaultValue={""}>Property Type</option>
                <option value="room">Room</option>
                <option value="flat">Flat</option>
                <option value="shop">Shop</option>
                <option value="plot">Plot</option>
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
                <input onClick={goFind} type='submit' value={'Search'} />
            </div>
        </form>
      </div>
    </>
  )
}
