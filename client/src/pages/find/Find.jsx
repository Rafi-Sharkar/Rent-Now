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


  const handleChange=async(value)=>{
    const res=await axios.get(`http://localhost:3001/property/search/?type=${value}`)
    setPropertise(res.data)
  }

  useEffect(()=>{
    getData()
  },[])
  
  return (
    <>
      {/* <FilterBar/>   */}

      <div className={style.fbcontainer}>
        <form className={style.fbfrom}>
            <div>
              <label htmlFor="propertytype" className='ml-[3.9rem]'>Property Type</label><br/>
              <select onChange={(e)=>handleChange(e.target.value)} name='type' className={style.fbfd2}>
                <option defaultValue={""}></option>
                <option value="room">Room</option>
                <option value="flat">Flat</option>
                <option value="shop">Shop</option>
                <option value="plot">Plot</option>
              </select>
            </div>
            {/* <div className={style.fbfd5}>
                <input type='submit' value={'Search'} />
            </div> */}
        </form>
      </div>   

      <div className={`${style.productscart} `}>
        {propertise.map((product,i)=>{
          return(
            <RentCard key={i} availability={product.available} img={product.file} id={product._id} pid={product.pid} location={product.location} renter={name} type={product.type} owner_id={product.owner_id} rate={product.rate} details={product.details} price={product.price} farea={product.farea}/>
          )
          })}
      </div>
    </>
  )
}
