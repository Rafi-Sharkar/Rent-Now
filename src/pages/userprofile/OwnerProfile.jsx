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
import { useNavigate } from 'react-router-dom'


export default function OwnerProfile() {

  const navigate = useNavigate()

  const goReqBook=()=>{
    navigate('/users/owner/reqbook')
  }

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
            <div onClick={goReqBook} className={style.pfreqbook}><p>Request for booking</p></div>
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
                <button onClick={()=>{setEdit(!edit)}} className={`w-[75px] ${edit?'bg-[green] text-[white]':'bg-[blue] text-[white]'}`}>{edit?'Save':'Edit'}</button>
              </div>              
              
            </div>

        </div>
     </div>   

    </>
  )
}
