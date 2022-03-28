import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues : {
            fname:'',
            mname:'',
            lname:'',
            email:'',
            add1:'',
            add2:'',
        },
        validate: (values)=>{
            let errors ={}
            if(!values.fname){
                errors.fname= 'Enter a name'
            }
            if(!values.lname){
                errors.lname= 'Enter a name'
            }
            if(!values.email){
                errors.email= 'Enter an email'
            }
            if(!values.add1){
                errors.add1= 'Enter an address'
            }
            return errors
        }
    })
    console.log(formik.touched)

  return (
    <>
    <div className='card container'>
        <form>
        <h1>Billing Details</h1>
    <div className="mb-3">
        <div className='row'>
            <div className='col-auto'>
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="fname" name='fname' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fname}/>
           {formik.touched.fname && formik.errors.fname? <div className='errors'>{formik.errors.fname}</div>:null}
            </div>
            <div className='col-auto'>
                <label htmlFor="mname" className="form-label">Middle Name (Optional)</label>
                <input type="text" className="form-control" id="mname" name='mname' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.mname}/>
            </div>
            <div className='col-auto'>
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lname" name='lname' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lname}/>
           {formik.touched.lname && formik.errors.lname? <div className='errors'>{formik.errors.lname}</div>:null}
            </div>
        </div>
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
        {formik.touched.email && formik.errors.email? <div className='errors'>{formik.errors.email}</div>:null}
        <label htmlFor="add1" className="form-label">Address</label>
        <input type="text" className="form-control" id="add1" name='add1' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.add1}/>
           {formik.touched.add1 && formik.errors.add1? <div className='errors'>{formik.errors.add1}</div>:null}
        <label htmlFor="add2" className="form-label">Address 2 (Optional)</label>
        <input type="text" className="form-control" id="add2" name='add2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.add2}/>
    </div> 
    <div className='row'>
        <div className='col-auto'>
    <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
    <select className="form-select" aria-label="Default select example">
        <option defaultValue='selected' >Choose</option>
        <option value="1">Lalitpur</option>
        <option value="2">Bhaktapur</option>
        <option value="3">Kathmandu</option>
    </select>
        </div>
        <div className='col-auto'>
    <label htmlFor="exampleFormControlInput1" className="form-label">State</label>
    <select className="form-select" aria-label="Default select example">
        <option defaultValue='selected'>Choose</option>
        <option value="1">Province 1</option>
        <option value="2">Province 2</option>
        <option value="3">Province 3</option>
        <option value="3">Gandaki Pradesh</option>
        <option value="3">Province 5</option>
        <option value="3">Karnali Pradesh</option>
        <option value="3">Sudurpashchim Pradesh</option>
    </select>
        </div>
    </div>

    <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            Shipping address is the same as my billing address
        </label>
    </div>

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Save this information for next time
  </label>
</div>
<div className='row'>
<div className="col-auto">
    <button type="submit" onClick={()=> {
        navigate('/')
    }} className="btn btn-primary mb-3">SUBMIT</button>
  </div>
  <div className="col-auto">
    <button type="reset" className="btn btn-primary mb-3">RESET</button>
  </div>
</div>
    </form>
</div>
</>
  )
}

export default Checkout