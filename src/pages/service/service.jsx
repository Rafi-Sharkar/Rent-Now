import React from 'react'
import style from './service.module.css'


export default function Service() {
  return (
    <>
      <div className={style.header}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit fuga rerum ad ea eveniet necessitatibus incidunt autem iure, aut praesentium?</p>
        <button>GET START</button>
      </div>
      <div className={style.user}>
        <h2>Our Network</h2>
          <div className={style.users}>
            <div className={style.usersub}>
            <i className="fa-solid fa-users"></i>
            <p>200+</p>
            </div>
            <div className={style.usersub}>
            <i className="fa-solid fa-house"></i>
            <p>200+</p>
            </div>
            <div className={style.usersub}>
            <i className="fa-solid fa-map"></i>
            <p>8+</p>
            </div>
          </div>
      </div>
      <div className={style.servicearea}>
      <h2>Service Area</h2>
        <div className={style.areas}>
        <div className={style.area}>
          <i className="fa-solid fa-location-crosshairs"></i>
            <p>Rampura</p>
        </div>
        <div className={style.area}>
          <i className="fa-solid fa-location-crosshairs"></i>
            <p>Badda</p>
        </div>
        <div className={style.area}>
          <i className="fa-solid fa-location-crosshairs"></i>
            <p>Basundhara R/A</p>
        </div>
        </div>
      </div>
      <div className={style.service}>

      </div>
    </>
  )
}
