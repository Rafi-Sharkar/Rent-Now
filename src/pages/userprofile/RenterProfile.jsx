import React, { useEffect, useState } from 'react'
import style from './renterprofile.module.css'
import rs1 from '../../assets/photos/Rafi_Sharkar.jpg'
import { useFormik } from 'formik'
import { Customers } from '../../assets/data/data'
import RentCard from '../../global_components/rentCard/RentCard'
import { Products } from '../../assets/data/data'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function UserProfile() {
  const navigate=useNavigate()
  const [edit, setEdit] = useState(false)

  const formik = useFormik({
    initialValues:{
      occupation: Customers[0].occupation,
      institution: Customers[0].institution,
      curlocation: Customers[0].curlocation,
    },onSubmit:async (values)=>{
      setEdit(false)
    }
  })
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [usertype,settype]=useState("")
  const [phone,setphone]=useState("")
  const [permanent_Address,setpermanent_Address]=useState("")
  const [current_Address,setcurrent_Address]=useState("")
  const [Occupation,setOccupation]=useState("")
  const [ins,setins]=useState("")
  const [rate,setrate]=useState("")
  const getdata=async()=>{
    const email=window.localStorage.getItem("email")
    const res=await axios.get(`http://localhost:3001/users/profile/${email}`)
    if(res.data.requset==="Accepted"){
      setname(res.data.data.name)
      setemail(res.data.data.email)
      setphone(res.data.data.phone)
      settype(res.data.data.usertype)
      setOccupation(res.data.data.profession)
      setcurrent_Address(res.data.data.current_address)
      setpermanent_Address(res.data.data.permanent_address)
      setins(res.data.data.institution)
      setrate(res.data.data.rate)
  }else{
    window.localStorage.clear()
    navigate("/")
  }
  
  }
  useEffect(()=>{
  getdata()
  },[])


  return (
    <>
     <div className={style.maincont}>
        <div className={style.pfdetail}>
            <div className={style.img}>
              <img src={rs1} alt="image not found" />
            </div>
            <div className={style.info}>
              <form className={style.infoform} onSubmit={formik.handleSubmit}>
                <div>
                    <div className={style.infop}>
                      <span className='text-[3rem]'>{name}</span><span>({usertype})</span>
                    </div>
                </div>
                <div className={style.infop}>
                    <div>
                      <span>Email: </span><span>{email}</span>
                    </div>
                </div>
                <div>
                    <div className={style.infop}>
                      <span>Phone: </span><span>{phone}</span>
                    </div>
                </div>
                <div >
                {edit?
                    <div >
                    <span>Occupation: </span><input type='text' placeholder='Current occupation' value={formik.values.occupation} onChange={formik.handleChange}/>
                    </div>
                    :
                    <div className={style.infop}>
                      <span>Occupation: </span><span className='m-[4px]'>{Occupation}</span>
                    </div>
                  }
                </div>
                <div >
                {edit?
                    <div >
                    <span>Institution: </span><input type='text' placeholder='Current Institution' value={formik.values.institution} onChange={formik.handleChange}/>
                    </div>
                    :
                    <div className={style.infop}>
                      <span>Institution: </span><span className='m-[4px]'>{ins}</span>
                    </div>
                  }
                </div>
                <div>
                {edit?
                    <div >
                    <span>Current Address: </span><input type='text' placeholder='Enter your current occupation' value={formik.values.curlocation} onChange={formik.handleChange}/>
                    </div>
                    :
                    <div className={style.infop}>
                      <span>Current Address: </span><span className='m-[4px]' >{current_Address}</span>
                    </div>
                  }
                </div>
                <div className={style.infop}>
                  <span>Permanent Address: </span><span>{permanent_Address}</span>
                </div>
              </form>
              
              <div className={style.editsave}>
                <button onClick={()=>{setEdit(!edit)}} className={`w-[75px] ${edit?'bg-[green] text-[white]':'bg-[blue] text-[white]'}`}>{edit?'Save':'Edit'}</button>
              </div>              
            </div>
        </div>

        <div className={style.views}>
          <h1 className={style.sech1}>You Liked</h1>
          <div className={style.productscart}>
            {Products.map((product,i)=>{
            return(
              <RentCard key={i} img={product.img} title={product.title} rate={product.rate} description={product.description} price={product.price} farea={product.farea}/>
            )
            })}
          </div>    
          </div>
        </div>

  

    </>
  )
}
