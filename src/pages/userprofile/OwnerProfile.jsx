import React, { useState } from 'react'
import style from './ownerprofile.module.css'
import rs1 from '../../assets/photos/Rafi_Sharkar.jpg'
import { useFormik } from 'formik'
import { Customers } from '../../assets/data/data'
import upload from '../../assets/photos/upload.png'
import { MdCloudUpload } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import RentCard from '../../global_components/rentCard/RentCard'
import { Products } from '../../assets/data/data'
import PostCart from './PostCart'


export default function OwnerProfile() {

  const [edit, setEdit] = useState(false)
  const [image, setImage] = useState(null)
  const [files, setFilename] = useState("No  file selected")

  const formik = useFormik({
    initialValues:{
      occupation: Customers[0].occupation,
      institution: Customers[0].institution,
      curlocation: Customers[0].curlocation,
    },onSubmit:async (values)=>{
      setEdit(false)
    }
  })

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
                      <span className='text-[3rem]'>{Customers[0].name}</span><span>({Customers[0].usertype})</span>
                    </div>
                </div>
                <div className={style.infop}>
                    <div>
                      <span>Email: </span><span>{Customers[0].email}</span>
                    </div>
                </div>
                <div>
                    <div className={style.infop}>
                      <span>Phone: </span><span>{Customers[0].phone}</span>
                    </div>
                </div>
                <div >
                {edit?
                    <div >
                    <span>Occupation: </span><input type='text' placeholder='Current occupation' value={formik.values.occupation} onChange={formik.handleChange}/>
                    </div>
                    :
                    <div className={style.infop}>
                      <span>Occupation: </span><span className='m-[4px]'>{Customers[0].occupation}</span>
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
                      <span>Institution: </span><span className='m-[4px]'>{Customers[0].institution}</span>
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
                      <span>Current Address: </span><span className='m-[4px]' >{Customers[0].curlocation}</span>
                    </div>
                  }
                </div>
                <div className={style.infop}>
                  <span>Permanent Address: </span><span>{Customers[0].perlocation}</span>
                </div>
              </form>
              
              <div className={style.editsave}>
                <button onClick={()=>{setEdit(!edit)}} className={`w-[75px] ${edit?'bg-[blue] text-[white]':'bg-[green] text-[white]'}`}>{edit?'Save':'Edit'}</button>
              </div>              
              
            </div>

        </div>
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

     </div>   

    </>
  )
}
