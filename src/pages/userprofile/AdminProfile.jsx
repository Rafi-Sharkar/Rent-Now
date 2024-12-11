import React, { useState } from 'react'
import style from './adminprofile.module.css'
import rs1 from '../../assets/photos/Rafi_Sharkar.jpg'
import { useFormik } from 'formik'
import { Products, Customers } from '../../assets/data/data'
import AdminPostCart from './AdminPostCart'
import AdminUserCart from './AdminUserCart'

export default function AdminProfile() {

  const [edit, setEdit] = useState(false)
  const [choose, setChoose] = useState(true)

  const formik = useFormik({
    initialValues:{
      occupation: Customers[2].occupation,
      institution: Customers[2].institution,
      curlocation: Customers[2].curlocation,
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
                      <span className='text-[3rem]'>{Customers[2].name}</span><span>({Customers[2].usertype})</span>
                    </div>
                </div>
                <div className={style.infop}>
                    <div>
                      <span>Email: </span><span>{Customers[2].email}</span>
                    </div>
                </div>
                <div>
                    <div className={style.infop}>
                      <span>Phone: </span><span>{Customers[2].phone}</span>
                    </div>
                </div>
                <div >
                {edit?
                    <div >
                    <span>Occupation: </span><input type='text' placeholder='Current occupation' value={formik.values.occupation} onChange={formik.handleChange}/>
                    </div>
                    :
                    <div className={style.infop}>
                      <span>Occupation: </span><span className='m-[4px]'>{Customers[2].occupation}</span>
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
                      <span>Institution: </span><span className='m-[4px]'>{Customers[2].institution}</span>
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
                      <span>Current Address: </span><span className='m-[4px]' >{Customers[2].curlocation}</span>
                    </div>
                  }
                </div>
                <div className={style.infop}>
                  <span>Permanent Address: </span><span>{Customers[2].perlocation}</span>
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
