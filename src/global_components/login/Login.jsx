import React from 'react'
import style from './login.module.css'
import { Formik, useFormik } from 'formik'
import { logInSchema } from '../../schemas/loginSchema'

export default function Login() {

  const initialValues={
    name: '',
    email: '',
    pass: '',
    cpass: '',
  }


    const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
      initialValues: initialValues,
      validationSchema: logInSchema,
      onSubmit: (values, action)=>{
        console.log(values);
        action.resetForm();
      }
    })

    

  

  return (
    <>
      <div className={style.cont}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.inputblock}>
            <label htmlFor='name'>Name</label>
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} id='name' type='name' autoComplete='off' name='name' placeholder='Name' />
            { errors.name && touched.name? (<p className='ml-[3rem] text-red-600 font-bold'>{errors.name}</p>): null}
          </div>
          <div className={style.inputblock}>
            <label htmlFor='email'>Email</label>
            <input value={values.email} onChange={handleChange} onBlur={handleBlur} id='email' type='email' autoComplete='off' name='email' placeholder='Email'/>
            { errors.email && touched.email ? (<p className='ml-[3rem] text-red-600 font-bold'>{errors.name}</p>): null}
          </div>
          <div className={style.inputblock}>
            <label htmlFor='pass'>Password</label>
            <input value={values.pass} onChange={handleChange} onBlur={handleBlur} id='pass' type='password' autoComplete='off' name='pass' placeholder='Password'/>
            { errors.pass && touched.pass? (<p className='ml-[3rem] text-red-600 font-bold'>{errors.name}</p>): null}
          </div>
          <div className={style.inputblock}>
            <label htmlFor='cpass'>Confirm Password</label>
            <input value={values.cpass} onChange={handleChange} onBlur={handleBlur} id='cpass' type='password' autoComplete='off' name='cpass' placeholder='Confirm Password'/>
            { errors.cpass && touched.cpass? (<p className='ml-[3rem] text-red-600 font-bold'>{errors.name}</p>): null}
          </div>
          <div className={style.modalbtn}>
            <a href="##">Want to register using Gmail</a>
            <button type='submit'>Registration</button>
          </div>
        </form>
      </div>
    </>
  )
}
