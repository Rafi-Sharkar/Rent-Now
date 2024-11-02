import React from 'react'
import style from './setrange.module.css'

export default function SetRange() {
  return (
    <>
      <div className={style.srcontainer}>
        <form>
            <div className={style.srvalue}>
              <input type="text" placeholder='Maximum' />
              <input type="text" placeholder='Minimum' />
            </div>
            <div className={style.srsubmit}>
              <input type="submit" value={'Set'} />
            </div>
        </form>
      </div>
    </>
  )
}
