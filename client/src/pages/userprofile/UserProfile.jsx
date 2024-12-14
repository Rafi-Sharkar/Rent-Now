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
import { propertySchema } from '../../schemas/propertySchema'
import { setLocale } from 'yup'


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

  const [propertise, setPropertise] = useState([])

  const getdata=async()=>{
    const email=window.localStorage.getItem("email")
    const res=await axios.get(`http://localhost:3001/users/profile/${email}`)
    const res1=await axios.get(`http://localhost:3001/property/find/${email}`)
    setPropertise(res1.data.result) 
    
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

  // Owner user's post data form
  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
        location: '',
        owner_email: '',
        type: '',
        farea: 0,
        price: 0,
        details: ''

    },
    validationSchema: propertySchema,
    onSubmit:async(values, {resetForm})=>{
        values.owner_email = email
        const res=await axios.post("http://localhost:3001/property/add", values,{
          "Content-Type":"application/json"
        })
        resetForm()
        
      }
})

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
                  <form className={style.pfform} onSubmit={handleSubmit} autoComplete='off'>
                    <div className={style.fileinput} onClick={()=>document.querySelector(".input-field").click()}>
                        <input className='input-field' type="file" name='image' accept='image/*' hidden />
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
                        <label htmlFor="type" className='text-[.9rem]'>
                          User Type <br />
                          <select name="type" value={values.type} onChange={handleChange} onBlur={handleBlur} id='type' type="text" className={`w-[270px] ${errors.usertype && touched.usertype ? 'border-2 border-red-600':'border-2 border-[#333] px-[.5rem] py-[.2rem] text-[1.1rem] w-[220px] h-[35px] text-black rounded'}`}>
                            <option defaultValue={""}>Property Type</option>
                            <option value="room">Room</option>
                            <option value="flat">Flat</option>
                            <option value="shop">Shop</option>
                            <option value="plot">Plot</option>
                          </select>
                        </label>
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="location" className='text-[.9rem]'>Location <span className='text-[red] font-[800]'>*</span></label><br />
                        <input value={values.location} onChange={handleChange} onBlur={handleBlur} id='location' type="text" placeholder="Property location" className={`w-[350px]${errors.location && touched.location ? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                        {errors.location && touched.location && <p className='text-[.8rem] mb-[-1.2rem] text-red-400'>{errors.location}</p>}
                      </div>
                      <div className={`w-[270px] flex justify-between items-cneter ${style.areaprice}`}>
                        <div className='w-[130px]'>
                          <label htmlFor="area" className='text-[.9rem]'>Area <span className='text-[red] font-[800]'>*</span></label><br />
                          <input value={values.farea} onChange={handleChange} onBlur={handleBlur} id='farea' type="number" placeholder="per sqft" className={`w-full ${errors.farea && touched.farea ? 'border-2 border-red-600':'border-2 border-[#333]'}`} />
                          
                        </div>
                        <div className='w-[130px] '>
                          <label htmlFor="price" className='text-[.9rem]'>Price <span className='text-[red] font-[800]'>*</span></label><br />
                          <input value={values.price} onChange={handleChange} onBlur={handleBlur} id='price' type="number" placeholder="per month" className={`w-full ${errors.price && touched.price ? 'border-2 border-red-600':'border-2 border-[#333]'}`} />
                          
                        </div>
                      </div>
                      <div>
                        <label htmlFor="details" className='text-[.9rem]'>Details</label><br />
                        <textarea value={values.details} onChange={handleChange} onBlur={handleBlur} id='details' type="text" placeholder="Describe your property" className={`w-[270px] border-2 border-[#333] rounded-[6px] py-[.2rem] px-[.3rem] ${errors.details && touched.details ? 'border-2 border-red-600':'border-2 border-[#333]'}`} />
                        {errors.details && touched.details && <p className='text-[.8rem] mb-[-1.2rem] text-red-400'>{errors.details}</p>}
                      </div>
                    </div>
                    <div>
                        <input className='mx-6 bg-blue-600 hover:bg-green-500 cursor-pointer px-[2rem] py-[3rem] rounded-[30px] text-white font-[700] text-[2.6rem] rounded-[.5rem]' type="submit" value={'Post'} />
                    </div>
                  </form>
              </div>
              <div className={style.views}>
                <h1 className={style.sech1}>View your post</h1>
                <div className={style.productscart}>
                  {propertise.map((product,i)=>{
                  return(
                    <PostCart key={i} img={product.img} title={product.location} rate={product.rate} description={product.details} price={product.price} farea={product.farea}/>
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
