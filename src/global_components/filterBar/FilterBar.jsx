import React from 'react'
import style from './filterbar.module.css'

export default function FilterBar() {
  return (
    <>
      <div className={style.fbcontainer}>
        <form className={style.fbfrom}>
            <div>
              <label htmlFor="location">Location</label><br/>
              <select className={style.fbfd1}>
                <option value="choose">Choose Any</option>
                <option value="rampura">Rampura</option>
                <option value="rampura">Badda</option>
                <option value="rampura">Natun Bazaar</option>
                <option value="rampura">Bashundhara R/A</option>
              </select>
            </div>
            <div>
              <label htmlFor="propertytype">Property Type</label><br/>
              <select className={style.fbfd2}>
                <option value="choose" selected>Choose Any</option>
                <option value="rampura">Badda</option>
                <option value="rampura">Natun Bazaar</option>
                <option value="rampura">Bashundhara R/A</option>
              </select>
            </div>
            <div className={style.fbfd3}>
              <label htmlFor="price">Price</label><br/>
              <input type="text" placeholder='Price'/>
            </div>
            <div className={style.fbfd4}>
              <label htmlFor="floorarea">Floor Area</label><br/>
              <input type="text" placeholder='Floor Area'/>
            </div>
            <div className={style.fbfd5}>
                <input type='submit' value={'Search'} />
            </div>
        </form>
      </div>
    </>
  )
}
