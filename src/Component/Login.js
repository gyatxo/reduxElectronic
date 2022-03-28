import { useFormik } from 'formik'
import React from 'react'

function Login() {
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate:values=>{
            let errors = {}
            if(!values.email){
                errors.email = 'Enter a valid email'
            }
            if(!values.password){
                errors.password = 'Enter a password'
            }
            return errors
        },
    })
  return (
    <>
    <div className="card container" style={{ width: "50rem" }}>
        <h2>Login Details</h2>
    <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email"  className="form-control" id="staticEmail" name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder="email@example.com"/>
    </div>
        {formik.touched.email && formik.errors.email? <div className='errors'>{formik.errors.email}</div>:null}
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} id="inputPassword"/>
    </div>
    {formik.touched.password && formik.errors.password? <div className='errors'>{formik.errors.password}</div>:null}
  </div>
  <div className='row mb-3 mx-5 px-5'>
        <div className='col-auto '>
            <button className='btn btn-primary'>LOGIN</button>
        </div>
        <div className='col-auto' >
            <button className='btn btn-primary'>FORGOT PASSWORD</button>
        </div>
  </div>
    </div>
    </>
  )
}

export default Login