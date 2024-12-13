import React, { useEffect, useState } from 'react'
import style from './find.module.css'
import FilterBar from '../../global_components/filterBar/FilterBar'
import { Products } from '../../assets/data/data'
import RentCard from '../../global_components/rentCard/RentCard'
import axios from 'axios'


export default function Find() {

  const [propertise, setPropertise] = useState([])

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
            <RentCard key={i} img={product.img} title={product.location} rate={product.rate} description={product.details} price={product.price} farea={product.farea}/>
          )
          })}
      </div>
    </>
  )
}
