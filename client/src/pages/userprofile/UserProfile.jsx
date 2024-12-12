import React, { useEffect, useState } from 'react'
import style from './userprofile.module.css'
import rs1 from '../../assets/photos/Rafi_Sharkar.jpg'
import { MdCloudUpload } from 'react-icons/md'
import PostCart from './PostCart'
import AdminPostCart from './AdminPostCart'
import AdminUserCart from './AdminUserCart'
import { useFormik } from 'formik'
import { Products, Customers } from '../../assets/data/data'
import RentCard from '../../global_components/rentCard/RentCard'
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

  const [image, setImage] = useState(null)
  const [choose, setChoose] = useState(true)

  const goReqBook=()=>{
    navigate('/users/owner/reqbook')
  }

  useEffect(()=>{
  getdata()
  },[])


  return (
    <>
     <div className={style.maincont}>
        <div className={style.pfdetail}>
            {usertype==='owner'? <div onClick={goReqBook} className={style.pfreqbook}><p>Request for booking</p></div>:null}
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

        {/* form here we have to enable and disable function for speacific user */}
      {usertype==='renter'?  
      
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

      :usertype==='owner'?
      <>
      <div className={style.pftask}>
                  <h1 className={style.sech1}>Rent out your flat</h1>
                  <form className={style.pfform}>
                    <div className={style.fileinput} onClick={()=>document.querySelector(".input-field").click()}>
                        <input className='input-field' type="file" accept='image/*' hidden />
                        {image?
                          <img src={upload} width={140} height={140} alt="image not found" />
                          :
                          <>
                            <MdCloudUpload color='#1475cf' size={140}/>
                            <p>Brawse your files to upload</p>
                          </>
                        }
                    </div>
                    <div className={style.postinfo}>
                      <div>
                        <label htmlFor="location">Location <span className='text-[red] font-[800]'>*</span></label><br />
                        <input id='location' type="text" placeholder="room/flat/plot/shop's location" />
                      </div>
                      <div className={style.areaprice}>
                        <div>
                          <label htmlFor="area">Area <span className='text-[red] font-[800]'>*</span></label><br />
                          <input id='area' type="text" placeholder="per sqft" />
                        </div>
                        <div>
                          <label htmlFor="price">Price <span className='text-[red] font-[800]'>*</span></label><br />
                          <input id='price' type="text" placeholder="Per month" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="details">Details</label><br />
                        <textarea className='w-[350px] border-2 border-[#333] rounded-[6px] py-[.2rem] px-[.3rem]' id='details' type="text" placeholder="Details of room/flat/plot/shop" />
                      </div>
                    </div>
                    <div className={style.postbtn}>
                        <button>Post</button>
                    </div>
                  </form>
              </div>
              <div className={style.views}>
                <h1 className={style.sech1}>View your post</h1>
                <div className={style.productscart}>
                  {Products.map((product,i)=>{
                  return(
                    <PostCart key={i} img={product.img} title={product.title} rate={product.rate} description={product.description} price={product.price} farea={product.farea}/>
                  )
                  })}
                </div>  
                  
              </div>
      </>
      :usertype==='admin'?
      <>
      <div className={style.views}>
        <h1 className={style.sech1}>View All</h1>
        <div className={style.choose}>
          <div onClick={()=>{setChoose(true)}} className={`w-[150px] h-full  ${choose? 'bg-[green] text-[white]':null} `}><h2>Post</h2></div>
          <div onClick={()=>{setChoose(false)}} className={`w-[150px] h-full border-l-[2px] border-black ${choose? null:'bg-[green] text-[white]'} `}><h2>User</h2></div>
        </div>
          <div className={style.productscart}>
            {choose?
            <>       
            {Products.map((product,i)=>{
            return(
              <AdminPostCart key={i} img={product.img} title={product.title} rate={product.rate} description={product.description} price={product.price} farea={product.farea}/>
            )
            })}
            </>
            :
            <>
            {Customers.map((user,i)=>{
              return(
            <AdminUserCart key={i} img={user.img} name={user.name} usertype={user.usertype} email={user.email} phone={user.phone} occupation={user.occupation} institution={user.institution} curlocation={user.curlocation} perlocation={user.perlocation}/>
              )
            })}
            </>
          }

        
        </div>  
      </div>
      </>
      :null
      }

        

  

      </div>
    </>
  )
}
