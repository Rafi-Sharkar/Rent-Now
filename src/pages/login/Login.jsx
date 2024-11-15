import React from 'react'
import style from './login.module.css'
import { useFormik } from 'formik'
import { logInSchema } from '../../schemas/loginSchema'

export default function Login() {

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: '',
            usertype: '',
            email: '',
            phone: '',
            perloc: '',
            pass: '',
            cpass: ''
        },
        validationSchema: logInSchema        
    })



  return (
    <>
      <div className={style.cont}>
        <div className={style.form}>
            <h2 className='text-center mb-7 text-[2.4rem] font-[700]'>Registation</h2>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='flex'>
                <div className={style.flain}>
                    <label htmlFor="name">Name</label><br />
                    <input value={values.name} onChange={handleChange} id='name' type="text" placeholder='Enter your name' className={`${errors.name && touched.name ? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                    {errors.name && touched.name && <p className='text-[.8rem] mb-[-1.2rem] text-red-700'>{errors.email}</p>}
                </div>
                <div className={style.flain}>
                    <label htmlFor="usertype">User Type</label><br />
                    <input value={values.usertype} onChange={handleChange} id='usertype' type="text" placeholder='Enter user type' className={`${errors.usertype && touched.usertype ? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                    {errors.usertype && touched.usertype && <p className='text-[.8rem] mb-[-1.2rem] text-red-700'>{errors.usertype}</p>}
                </div>
                </div>
                <div className='flex'>
                <div className={style.flain}>
                    <label htmlFor="email">Email</label><br />
                    <input value={values.email} onChange={handleChange} id='email' type="email" placeholder='Enter your email' className={`${errors.email && touched.email ? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                    {errors.email && touched.email && <p className='text-[.8rem] mb-[-1.2rem] text-red-700'>{errors.email}</p>}
                </div>
                <div className={style.flain}>
                    <label htmlFor="phone">Phone</label><br />
                    <input value={values.phone} onChange={handleChange} id='phone' type="text" placeholder='Enter your phone number' className={`${errors.phone && touched.phone ? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                    {errors.phone && touched.phone && <p className='text-[.8rem] mb-[-1.2rem] text-red-700'>{errors.phone}</p>}
                </div>
                </div>
                <div className={style.flain}>
                    <label htmlFor="perloc">Permanent Address</label><br />
                    <input value={values.perloc} onChange={handleChange} id='perloc' type="text" placeholder='Enter your permanent address' className={`w-[98.7%] ${errors.perloc && touched.perloc? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                    {errors.perloc && touched.perloc && <p className='text-[.8rem] mb-[-1.2rem] text-red-700'>{errors.perloc}</p>}
                </div>
                <div className='flex'>
                <div className={style.flain}>
                    <label htmlFor="pass">Password</label> <br />
                    <input value={values.pass} onChange={handleChange} id='pass' type="password" placeholder='Enter password' className={`${errors.pass && touched.pass? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                    {errors.pass && touched.pass && <p className='text-[.8rem] mb-[-1.2rem] text-red-700'>{errors.pass}</p>}
                </div>
                <div className={style.flain}>
                    <label htmlFor="cpass">Confirm password</label> <br />
                    <input value={values.cpass} onChange={handleChange} id='cpass' type="password" placeholder='Type again same password' className={`${errors.cpass && touched.cpass? 'border-2 border-red-600':'border-2 border-[#333]'}`}/>
                    {errors.cpass && touched.cpass && <p className='text-[.8rem] mb-[-1.2rem] text-red-700'>{errors.cpass}</p>}
                </div>
                </div>
                <div className={style.submit}>
                    <input className='bg-blue-600 px-[4rem] py-[.3rem] text-white font-[600] text-[1.3rem] rounded-[.5rem]' type="submit" value={'Register'} />
                </div>
            </form>
        </div>
      </div>
    </>
  )
}
