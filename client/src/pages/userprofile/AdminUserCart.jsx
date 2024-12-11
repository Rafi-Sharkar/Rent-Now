import React, { useState } from 'react'
import style from './adminusercart.module.css'



export default function AdminUserCart(props) {
   
  return (
    <>
      <div className={style.rccontainer}>
        <a href="##">
          <img src={props.img} alt="Image not found" />
        </a>
        <div className={style.rcdetails}>
          <p>Name: {props.name}({props.usertype}) </p>
          <p>Email: {props.email}</p>
          <p>Phone: {props.phone}</p>
          <p>Occupation: {props.occupation}</p>
          <p>Institution: {props.institution}</p>
          <p>Current Address: {props.curlocation}</p>
          <p>Permanent Address: {props.perlocation}</p>
        </div>
        <div className={style.rcbtn}>
          <button>Delete</button>
        </div>       
      </div>
    </>
  )
}
