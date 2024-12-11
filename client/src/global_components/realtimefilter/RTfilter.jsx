import React, { useState } from 'react'
import { Products } from '../../assets/data/data'

export default function RTfilter() {

  const [store, setStore] = useState(Products)
  const [data, setData] = useState("")
  const getData=(e)=>{
    console.log(e.target.value);
    setData(e.target.value)
  }

  const filterout = store.filter((curValue)=>{
    return curValue.title.toLowerCase().includes(data)
  })

  return (
    <>
     <div className="mx-2 cont w-[220px]">
      <form>
      <label htmlFor="name">Name: </label>
      <input className='border-2 border-[#333]' type="text" id='name' name='name'/><br/>
      <label htmlFor="email">Email: </label>
      <input className='border-2 border-[#333]' type="email" id='email' name='email'/><br/>
      <label htmlFor="pass">Password: </label>
      <input className='border-2 border-[#333]' type="password" id='pass' name='pass'/><br/>

      <input type="submit"  className='border-2 mx-8 my-3  px-7 py-1 rounded-[9px] border-[#333]'/>
      </form>

      <input onChange={getData} placeholder='Search by email' type='text' className='ml-[5px] border-2 border-[#333] p-1 px-3 rounded'/>

      {
        filterout.map((dt, i)=>{
          return(
            <div key={i} className='border-black border-2 mt-2'>
              <p>{dt.title}</p>
              <p>Price: {dt.price}tk</p>
              <p>FArea: {dt.farea}sqft</p>
            </div>
          );
        })
      }

     </div>

    </>
  )
}
