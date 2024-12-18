import React, { useState } from 'react'
import style from './postcart.module.css'


export default function PostCart(props) {
  const [editp, setEditp] = useState(false)
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
        {editp?
        <div className={style.available}>
          <div className='flex gap-[1rem] bg-green-200 px-2 rounded-[5px]'>
            <label htmlFor="available">Available</label>
            <input type="radio" id='available' name='available' value="yes" /> 
          </div>
          <div className='flex gap-[1rem] bg-red-200 px-2 rounded-[5px]'>
            <label htmlFor="available">Not available</label>
            <input type="radio" id='available' name='available' value="yes" /> 
          </div>
        </div>
        : null
        }
        <div className={style.rcbtn}>
          {/* <button onClick={()=>{setEditp()}}>Edit</button> */}
          <button onClick={()=>{setEditp(!editp)}} className={`${editp?'bg-[green] ':'bg-[#063AA4] text-[white]'}`}>{editp?'Save':'Edit'}</button>
          <button>Delete</button>
        </div>       
      </div>
    </>
  )
}
