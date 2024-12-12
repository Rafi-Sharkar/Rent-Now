import React from 'react'
import style from './login.module.css'
import { useFormik } from 'formik'
import { userSchema } from '../../schemas/userSchema'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {


    const navigate = useNavigate()

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            pass: ''
        },
        // validationSchema: logInSchema,
        onSubmit:async(values)=>{
          const res=await axios.post("http://localhost:3001/users/login", values,{
            "Content-Type":"application/json"
          })
          if(res.data.request==="Accepted"){
              window.localStorage.setItem("login",true)
              window.localStorage.setItem("email",res.data.data.email)
              window.localStorage.setItem("name",res.data.data.name)
              window.localStorage.setItem("type",res.data.data.usertype)
              navigate("/")
          }
          else if(res.data.request==="not valid user"){
               alert("Sign up first")
               navigate("/registation")
          }
          else if(res.data.request==="Not athurizrd"){
              alert("Not athurizrd")
          }
          else{
              alert("somting wrong")
          }
        }   
      })
      



  return (
    <>
      <div className={style.cont}>
        <div className={style.form}>
            <h2 className='text-center mb-7 text-[2.4rem] font-[700]'>Login</h2>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='gap-5 flex flex-col items-center justify-center'>
                <div className={style.flain}>
                    <label htmlFor="email">Email</label><br />
                    <input value={values.email} onChange={handleChange} onBlur={handleBlur} id='email' type="email" placeholder='Enter your email' className={`w-[310px] ${errors.email && touched.email ? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                    {errors.email && touched.email && <p className='text-[.8rem] mb-[-1.2rem] text-red-400'>{errors.email}</p>}
                </div>
                <div className={style.flain}>
                    <label htmlFor="pass">Password</label> <br />
                    <input value={values.pass} onChange={handleChange} onBlur={handleBlur} id='pass' type="password" placeholder='Enter password' className={`w-[310px] ${errors.pass && touched.pass? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                    {errors.pass && touched.pass && <p className='text-[.8rem] mb-[-1.2rem] text-red-400'>{errors.pass}</p>}
                </div>
                </div>
                <div className={style.submit}>
                    <input className='bg-blue-600 hover:bg-green-500 cursor-pointer px-[4rem] py-[.4rem] text-white font-[700] text-[1.3rem] rounded-[.5rem] border hover:border-[#666]' type="submit"  value={'Login'} />
                </div>
            </form>
        </div>
      </div>
    </>
  )
}
