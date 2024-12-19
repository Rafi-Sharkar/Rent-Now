import React, { useEffect, useState } from 'react'
import style from './find.module.css'
import FilterBar from '../../global_components/filterBar/FilterBar'
import RentCard from '../../global_components/rentCard/RentCard'

import axios from 'axios'
import { useFormik } from 'formik'


export default function Find() {

  const [propertise, setPropertise] = useState([])

  const name = window.localStorage.getItem('name')
  const getData= async()=>{
    const res=await axios.get(`http://localhost:3001/property/showall`)
    setPropertise(res.data.data)
  }

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit}=useFormik({
    initialValues:{
      location: "",
      type: ""
    },
    onSubmit:async(values)=>{
      console.log(values)
      const res = await axios.get(`http://localhost:3001/property/search?location=${values.location}&type=${values.type}`)
      console.log(res.data)
    }
  })

  useEffect(()=>{
    getData()
  },[])
  
  return (
    <>
      {/* <FilterBar/>   */}

      <div className={style.fbcontainer}>
        <form className={style.fbfrom} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="location">Location</label><br/>
              <select onChange={handleChange} name='location' value={values.location} className={style.fbfd1}>
                <option defaultValue={""}></option>
                <option value="badda">Badda</option>
                <option value="rampura">Rampura</option>
                <option value="natun bazaar">Natun Bazaar</option>
                <option value="basundhara r/">Basundhara R/A</option>
              </select>
            </div>
            <div>
              <label htmlFor="propertytype">Property Type</label><br/>
              <select onChange={handleChange} name='type' value={values.type}  className={style.fbfd2}>
                <option defaultValue={""}></option>
                <option value="room">Room</option>
                <option value="flat">Flat</option>
                <option value="shop">Shop</option>
                <option value="plot">Plot</option>
              </select>
            </div>
            {/* <div className={style.fbfd3}>
              <label htmlFor="price">Price</label><br/>
              <div className={style.fbfd4div} onClick={()=>setDownArrow(!arrowdown)}>
                <p>{pmin}-{pmax}</p>
                <i className={`${arrowdown?'fa-solid fa-angle-up':'fa-solid fa-angle-down'}`}></i>
              </div>
              <SetRange ad={arrowdown} sAD={setDownArrow} sMin={setPMin} sMax={setPMax}/>
            </div> */}
            {/* <div className={style.fbfd4}>
              <label htmlFor="floorarea">Floor Area</label><br/>
              <div className={style.fbfd4div} onClick={()=>setDownArrow1(!arrowdown1)}>
                <p>{famin}-{famax}</p>
                <i className={`${arrowdown1?'fa-solid fa-angle-up':'fa-solid fa-angle-down'}`}></i>
              </div>
              <SetRange ad={arrowdown1} sAD={setDownArrow1}sMin={setFAMin} sMax={setFAMax}/>
            </div> */}
            <div className={style.fbfd5}>
                <input type='submit' value={'Search'} />
            </div>
        </form>
      </div>   

      <div className={style.productscart}>
        {propertise.map((product,i)=>{
          return(
            <RentCard key={i} img={product.file} pid={product.pid} location={product.location} renter={name} type={product.type} owner_email={product.owner_email} rate={product.rate} details={product.details} price={product.price} farea={product.farea}/>
          )
          })}
      </div>
    </>
  )
}
