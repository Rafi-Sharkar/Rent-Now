import React, { useEffect, useState } from 'react'
import style from './find.module.css'
import FilterBar from '../../global_components/filterBar/FilterBar'
import RentCard from '../../global_components/rentCard/RentCard'
import axios from 'axios'


export default function Find() {

  const [propertise, setPropertise] = useState([])
  const name = window.localStorage.getItem('name')
  const getData= async()=>{
    const res=await axios.get(`http://localhost:3001/property/showall`)
    setPropertise(res.data.data)
  }
  useEffect(()=>{
    getData()
  },[])


  
  return (
    <>
      <FilterBar/>      
      <div className={style.productscart}>
        {propertise.map((product,i)=>{
          return(
            <RentCard key={i} img={product.img} pid={product.pid} location={product.location} renter={name} type={product.type} owner_email={product.owner_email} rate={product.rate} details={product.details} price={product.price} farea={product.farea}/>
          )
          })}
      </div>
    </>
  )
}
