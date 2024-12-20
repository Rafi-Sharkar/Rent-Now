import React, { useEffect, useState } from 'react'
import FilterCard from '../../global_components/filterCard/FilterCard'
import RentCard from '../../global_components/rentCard/RentCard'
import style from './home.module.css'
import { Products } from '../../assets/data/data'
import headerbg from '../../assets/photos/homebg.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const rooms = Products.slice(0,3)

export default function Home() {

  const uid=window.localStorage.getItem("uid")

  
  const [room, setRoom] = useState([])
  const [flat, setFlat] = useState([])
  const [shop, setShop] = useState([])
  
  const getProperty=async()=>{
    const res=await axios.get(`http://localhost:3001/property/search/?type=room`)
    const res1=await axios.get(`http://localhost:3001/property/search/?type=flat`)
    const res2=await axios.get(`http://localhost:3001/property/search/?type=shop`)

    setRoom(res.data)
    setFlat(res1.data)
    setShop(res2.data)    

  }


  const [propertise, setPropertise] = useState([])
  const [arrowdown, setArrowDown] = useState(false)
  const [arrowdown1, setArrowDown1] = useState(false)
  const [arrowdown2, setArrowDown2] = useState(false)
  const [arrowdown3, setArrowDown3] = useState(false)
  const navigate = useNavigate()

  const getData=async()=>{
    const resproperty=await axios.get(`http://localhost:3001/property/getproperty/${uid}`)
    if(resproperty.data.request==="Accepted"){
      setPropertise(resproperty.data.data)
    }
    else{
      console.log(resproperty.data)
    }
  }

  const goExplor=()=>{
    navigate('/find')
  }

  useEffect(()=>{
  getData()
  getProperty()
  },[])

  return (
    <>
      <div className={style.cont}>
        {/* Header sec1 */}
        <div className={style.header}>
          <div className={style.headerimg}>
            <img src={headerbg} alt="image not found" />
          <FilterCard />
          </div>
        </div>
        {/* sec2 */}
        <div className={style.sec2}>
          <div className={style.sec2sub}>
            <i className="fa-regular fa-note-sticky"></i>
            <h2>Keep it flexible</h2>
            <p>Homes with flexible cancellation make it easy to rethink your booking if your plans change.</p>
          </div>
          <div className={style.sec2sub}>
            <i className="fa-solid fa-water-ladder"></i>
            <h2>Get the amenities you want</h2>
            <p>Hot tubs, pools, BBQs—discover dozens of great extras that fit your needs.</p>
          </div>
          <div className={style.sec2sub}>
            <i className="fa-regular fa-star"></i>
            <h2>Read real reviews</h2>
            <p>Find homes you'll love based on the great experiences of people who've stayed there.</p>
          </div>
        </div>
        {/* sec3 */}
        <div className={style.sec3}>
          <h2 className='ml-[58px] text-[2.3rem] font-[600] text-[#222]'>Best room for Bachelor</h2>
          <p className='ml-[58px] text-[1.2rem] text-[#333]'>These homes have great reviews and get lots of attention on Rent On.</p>
          <div className={style.productscart}>
            {room.slice(0,3).map((product,i)=>{
            return(
              <RentCard key={i} availability={product.available} img={product.file} pid={product.pid} location={product.location} renter={name} type={product.type} owner_email={product.owner_email} rate={product.rate} details={product.details} price={product.price} farea={product.farea}/>
            )
            })}
          </div>
          <button onClick={goExplor} className='border-[1.5px] border-black ml-[58px] px-[1.3rem] py-[.7rem] rounded-[10px] font-[600] text-[1.2rem] hover:bg-[#FB335D] hover:text-[white] hover:border-[#FB335D]'>Explore More</button>
        </div>
        {/* sec4 */}
        <div className={style.sec3}>
          <h2 className='ml-[58px] text-[2.3rem] font-[600] text-[#222]'>Best flat for Family</h2>
          <p className='ml-[58px] text-[1.2rem] text-[#333]'>These homes have great reviews and get lots of attention on Rent On.</p>
          <div className={style.productscart}>
            {flat.slice(0,3).map((product,i)=>{
            return(
              <RentCard key={i} availability={product.available} img={product.file} pid={product.pid} location={product.location} renter={name} type={product.type} owner_email={product.owner_email} rate={product.rate} details={product.details} price={product.price} farea={product.farea}/>
            )
            })}
          </div>
          <button onClick={goExplor} className='border-[1.5px] border-black ml-[58px] px-[1.3rem] py-[.7rem] rounded-[10px] font-[600] text-[1.2rem] hover:bg-[#FB335D] hover:text-[white] hover:border-[#FB335D]'>Explore More</button>
        </div>
        {/* sec5 */}
        <div className={style.sec3}>
          <h2 className='ml-[58px] text-[2.3rem] font-[600] text-[#222]'>Best shop for business</h2>
          <p className='ml-[58px] text-[1.2rem] text-[#333]'>These homes have great reviews and get lots of attention on Rent On.</p>
          <div className={style.productscart}>
            {shop.slice(0,3).map((product,i)=>{
            return(
              <RentCard key={i} availability={product.available} img={product.file} pid={product.pid} location={product.location} renter={name} type={product.type} owner_email={product.owner_email} rate={product.rate} details={product.details} price={product.price} farea={product.farea}/>
            )
            })}
          </div>
          <button onClick={goExplor} className='border-[1.5px] border-black ml-[58px] px-[1.3rem] py-[.7rem] rounded-[10px] font-[600] text-[1.2rem] hover:bg-[#FB335D] hover:text-[white] hover:border-[#FB335D]'>Explore More</button>
        </div>
        {/* sec6 */}
        <div className={style.sec6}>
            <div className={style.title}>
              <h1>Your questions,<br />answered</h1>
            </div>
            <div className={style.QA}>
              {/* QA1 */}
              <div className={style.answer}>
              <div className={style.question} onClick={()=>setArrowDown(!arrowdown)}>
                <p className='cursor-pointer'>What is Rent On and how does it work?</p>
                <i className={` ${arrowdown?'fa-solid fa-angle-up':'fa-solid fa-angle-down'}`}></i>
              </div>
                {arrowdown?
                <p className='text-[#555] font-[600]'>We verify personal profiles and listings to make sharing easy, enjoyable, and safe for millions of Hosts and travelers worldwide. </p>
                :null
                }
              </div>
              {/* QA2 */}
              <div className={style.answer}>
              <div className={style.question} onClick={()=>setArrowDown1(!arrowdown1)}>
                <p className='cursor-pointer'>How do I use search filters?</p>
                <i className={` ${arrowdown1?'fa-solid fa-angle-up':'fa-solid fa-angle-down'}`}></i>
              </div>
                {arrowdown1?
                <p className='text-[#555] font-[600]'>It's easy to use our search filters to only show the listings that have the features you need. Learn more about using search filters and discover more flexible ways to search. </p>
                :null
                }
              </div>
              {/* QA3 */}
              <div className={style.answer}>
              <div className={style.question} onClick={()=>setArrowDown2(!arrowdown2)}>
                <p className='cursor-pointer'>Do I need to meet my Host?</p>
                <i className={` ${arrowdown2?'fa-solid fa-angle-up':'fa-solid fa-angle-down'}`}></i>
              </div>
                {arrowdown2?
                <p className='text-[#555] font-[600]'>Options like self check-in or booking an entire home allow you to interact with your Host mainly through in-app messaging—you can message them anytime if something comes up.</p>
                :null
                }
              </div>
              {/* QA4 */}
              <div className={style.answer}>
              <div className={style.question} onClick={()=>setArrowDown3(!arrowdown3)}>
                <p className='cursor-pointer'>What if I need to cancel due to a problem with the listing or Host?</p>
                <i className={` ${arrowdown3?'fa-solid fa-angle-up':'fa-solid fa-angle-down'}`}></i>
              </div>
                {arrowdown3?
                <p className='text-[#555] font-[600]'>In most cases, you can resolve any issues directly by messaging your host. If they can't help, simply contact Airbnb within 24 hours of discovering the issue. Learn more.</p>
                :null
                }
              </div>

            </div>
        </div>
      </div>      
    </>
  )
}
