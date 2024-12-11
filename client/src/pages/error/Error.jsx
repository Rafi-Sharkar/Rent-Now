import React from 'react'
import style from './error.module.css'

export default function Error() {
  return (
    <>
      <div className={style.cont}>
        <i className="fa-solid fa-question text-[10rem] text-red-600"></i>
        <h1 className='text-[4rem] font-[600] text-[#444]'>404</h1>
        <h3 className='text-[2rem]'>Page not found</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse perspiciatis asperiores voluptas?</p>
      </div>
    </>
  )
}
