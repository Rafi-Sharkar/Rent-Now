import React, { useEffect, useState } from 'react'
import style from './adminpostcart.module.css'
import axios from 'axios'


export default function AdminPostCart(props) {
  const [editp, setEditp] = useState(false)

  const disablePost=async()=>{
    const res = await axios.put(`http://localhost:3001/property/availabilityup/${props.pid}`, {New_available: false})
    window.location.reload()
  }

useEffect(()=>{

  },[])

  return (
    <>
      <div className={style.rccontainer}>
        <a href="##">
          <img src={`http://localhost:3001/getallimg?name=${props.img.filename}`} alt="Image not found" />
        </a>
        <div className={style.rcdetails}>
          <div className={style.rcheader}>
            <h3>{props.title}</h3>
            <div className={style.rate}>
            <i className="fa-solid fa-star"></i><span>{props.rate}</span>
            </div>
          </div>
          <div>
            {editp?
              <textarea className='w-[230px] max-h-[115px] border-2 border-[#333] rounded-[5px] px-3' type='text' placeholder='Change Location' value={props.description}/>
            :<p>{props.description}</p>
            }
          </div>
          <div className={style.rcpa}>
              {editp?
              <input className='border-2 border-[#333] rounded-[5px] px-3 py-2' placeholder='Set price per month' type='text' />
              :
              <h2 className='text-[2rem] font-[700]'>{props.price}<span>per month</span></h2>  
              }
              <div className={style.rcfloorarea}>
                <h3>{props.farea}sqf</h3>
                <p>Floor Area</p>
              </div>
          </div> 
        </div>
        
        {
          props.availability?
        <div className={style.rcbtn}>
          <button className='bg-[#31304E] border-[#31304E]' onClick={disablePost}>Disable</button>
        </div> 
        :
        <div className={style.rcbtn}>
          <button className='bg-[#ff6e40] border-[#ff6e40]'>Not Available</button>
        </div>   

        }
      </div>
    </>
  )
}
