import React, { useState } from 'react'
import style from './setrange.module.css'

export default function SetRange(props) {

  const [newmin, setMin] = useState()
  const [newmax, setMax] = useState()

  const storeMin=(event)=>{
    let newmin = event.target.value;
    setMin(newmin)
  }
  const storeMax=(event)=>{
    let newmax = event.target.value;
    setMax(newmax)
  }
  const handleUpdate=()=>{
    props.sMin(newmin)
    props.sMax(newmax)
    props.sAD(false)
  }

  return (
    <>
      <div className={`${props.ad? 'visiable': 'invisible'}`}>
      <div className={style.srcontainer} >
        <form>
            <div className={style.srvalue}>
              <input onChange={storeMin} type="text" placeholder='Minimum' />
              <input onChange={storeMax} type="text" placeholder='Maximum' />
            </div>
            <div className={style.srsubmit}>
              <input onClick={handleUpdate} type="submit" value={'Set'} />
            </div>
        </form>
      </div>
      </div>
    </>
  )
}
