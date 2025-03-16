import React, { useState } from 'react'
import style from './postcart.module.css'
import axios from 'axios';


export default function PostCart(props) {
  const [editp, setEditp] = useState(false)

  const updateAvailable=async()=>{

    const res = await axios.put(`http://localhost:3001/property/availabilityup/${props.id}`, {New_available: !props.availability})
    window.location.reload()
  }

  const deleteItem = async (id) => {   
    try {
        const res = await axios.delete(`http://localhost:3001/users/delproperty/${id}`)
        alert(`Prodeuct:${id} has been delete`)
        window.location.reload()
      } catch (error) {
          console.error('Error deleting item:', error.message);
      }
    };
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
        {/* {editp?
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
        } */}
        <div className={style.rcbtn}>
          {
            props.availability?
              <button onClick={updateAvailable} className='w-full bg-[#ff6e40] mb-[9px]'>Disable</button>
              :
              <button onClick={updateAvailable} className='w-full bg-[green] mb-[9px]'>Enable</button>
          }
        </div>
        <div className={style.rcbtn}>
          <button onClick={()=>{setEditp(!editp)}} className={`w-[220px] ${editp?'bg-[green] ':'bg-[#063AA4] text-[white]'}`}>{editp?'Save':'Edit'}</button>
          <button onClick={() => deleteItem(props.id)} className='w-[59px] ml-[9px]'>Delete</button>
        </div>       
      </div>
    </>
  )
}
