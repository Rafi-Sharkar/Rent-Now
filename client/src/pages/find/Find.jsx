import React from 'react'
import style from './find.module.css'
import FilterBar from '../../global_components/filterBar/FilterBar'
import { Products } from '../../assets/data/data'
import RentCard from '../../global_components/rentCard/RentCard'


export default function Find() {
  return (
    <>
      <FilterBar/>
      
      <div className={style.productscart}>
        {Products.map((product,i)=>{
          return(
            <RentCard key={i} img={product.img} title={product.title} rate={product.rate} description={product.description} price={product.price} farea={product.farea}/>
          )
          })}
      </div>
    </>
  )
}
