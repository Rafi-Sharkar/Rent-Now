import React, { useContext } from 'react'
import style from './bookingcart.module.css'
import RentCard, { CartContext } from '../../global_components/rentCard/RentCard'
import house1 from '../../assets/photos/house1.jpg'
import rs1 from '../../assets/photos/Rafi_Sharkar.jpg'


export default function BookingCart() {

  return (
    <>
      <div className={style.cont}>
        {/* sec1 */}
        <div className={style.cartimg}>
          <div className={style.leftimg}>
            <img src={house1} alt="image not found" />
          </div>
          <div className={style.rightimg}>
            <div><img src={house1} alt="image not found" /></div>
            <div><img src={house1} alt="image not found" /></div>
            <div><img src={house1} alt="image not found" /></div>
            <div><img src={house1} alt="image not found" /></div>
          </div>
        </div>
        {/* Sec2 */}
        <div className={style.detail}>
          <div className='flex justify-between items-center mr-8 mt-2 '>
          <h2 className='text-[1.7rem] font-[600]'>India's #1 Dome Glamping GlampEco Manali with SPA</h2>
          <p><i className="fa-solid fa-star "> </i> 4.91 <br /> <span className='underline cursor-pointer'>69 reviews</span></p>
          </div>
            <p>2 guests . 1 bedroom . 1 bed . 1 private bath</p>
        </div>
        {/* Sec3 */}
        <div className={style.sec_3}>
          <div>


          <div className={style.owner}>
          <div className='flex gap-5 text-[1.5rem]'>
            <div><img className='w-[40px] h-[40px] rounded-[50%] border-2 border-white outline outline-[#E41D53]' src={rs1} alt="image not found" /></div>
            <h2 className='font-[600]'>Owned by Abbullah Ali</h2>
          </div>
        </div>
        <div className={style.facility}>
          <h1>What this place offers</h1>
          <div className={style.offers_div}>
            <div className='w-2/5  flex gap-2 items-center text-[1.4rem]'>
              <i class="fa-solid fa-wifi"></i>
              <p>wifi</p>
            </div>
            <div className='w-2/5  flex gap-2 items-center text-[1.4rem]'>
              <i class="fa-solid fa-bolt"></i>
              <p>electricity</p>
            </div>
            <div className='w-2/5  flex gap-2 items-center text-[1.4rem]'>
              <i class="fa-solid fa-shield-halved"></i>
              <p>security</p>
            </div>
            <div className='w-2/5  flex gap-2 items-center text-[1.4rem]'>
              <i class="fa-solid fa-user-group"></i>
              <p>neighbour</p>
            </div>
            <div className='w-2/5  flex gap-2 items-center text-[1.4rem]'>
              <i class="fa-solid fa-square-parking"></i>
              <p>parking</p>
            </div>
          </div>
        </div>
        </div>
      {/* reserved card */}

      <div className={style.resrve_card}>
          <h3 className='text-[2.3rem] ml-[-165px]'><b>7000</b><span className='text-[1rem] ml-2'>tk per month</span></h3>

          <div className='border-[#777] border-2 rounded-[15px] w-full h-[100px] flex justify-between items-center px-4'>
            <div  className='w-[150px] border-[2px] border-[#666] rounded-[9px] border-[#333]'>
              <label className='text-[1.5rem] font-[600]' htmlFor="in">Check in</label> <br />
              <input className='w-[146px] px-2 rounded-[9px]' id='in' type="date" />
            </div>
            <div className='w-[150px] border-[2px] border-[#666] rounded-[9px] border-[#333]'>
              <label className='text-[1.5rem] font-[600]' htmlFor="out">Check out</label> <br />
              <input className='w-[146px] px-2 rounded-[9px]' id='out' type="date" />
            </div>
          </div>

          <div className='flex flex-col items-center my-2'>
            <div className='flex gap-3 text-[1.2rem] ml-[-110px]'>
              <div><img className='w-[30px] h-[30px] rounded-[50%] border-2 border-white outline outline-[#E41D53]' src={rs1} alt="image not found" /></div>
              <h2>Owned by Abbullah Ali</h2>
            </div>
             <h1 className='text-[1.7rem] font-[800] text-center'>to</h1>
            <div className='flex gap-3 text-[1.2rem] ml-[110px]'>
              <div><img className='w-[30px] h-[30px] rounded-[50%] border-2 border-white outline outline-[#E41D53]' src={rs1} alt="image not found" /></div>
              <h2>Renter by Rafi Sharkar</h2>
            </div>
          </div>

          <div className='flex flex-col gap-2 border-[#333] border-2 w-full h-[120px] rounded-[15px] px-5 py-2'>
            <div className='flex justify-between px-4'>
              <p className='underline font-[500]'>Rate X number of month</p>
              <p className=' font-[500] '> = Total</p>
            </div>
            <div className='flex justify-between bg-[#F7B900] px-4 py-1 rounded-[8px]'>
              <p className='underline font-[500]'>7000tk X 3 month</p>
              <p className=' font-[500]'> = 21000tk</p>
            </div>
          </div>

          <div className='flex justify-center'>
            <button className='border px-14 py-2 bg-[#E41D55] text-[1.5rem] text-white font-[800] rounded-[9px] '>Reserve</button>
          </div>

      </div>
    </div>
    </div>
    </>
  )
}
