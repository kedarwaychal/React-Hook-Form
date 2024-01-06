import React, { useState } from 'react'

function BasicForm() {
    const [formdata,setFormData]=useState({
        username:'',
        email:'',
        password:'',

    });

    const [data,setData]=useState([])

    const handleChange = (e) =>{
        console.log(e.target.value);
        console.log(e.target.name)
        setFormData((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }))

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setData([...data,formdata])
    }


  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h1 className='text-center'>Form</h1> 
                   <div className='card mb-4 mt-4'>
                   <form className='form p-4' onSubmit={handleSubmit}>
                   <lable>
                       username:
                       <input type='text' className='form-control' name='username' value={formdata.username} onChange={handleChange}/>
                   </lable>
                   <br/>
                   <lable>
                       Email:
                       <input type='email' name='email' className='form-control'  value={formdata.email} onChange={handleChange}/>
                   </lable>
                   <br/>
                   <lable>
                       Password:
                       <input type='password' name='password' className='form-control'  value={formdata.password} onChange={handleChange}/>
                   </lable>
                   <button className='btn btn-primary mx-auto d-block mt-4' type='submit'>Submit</button>
                   <br/>
                   <div>
                       {/* {JSON.stringify(formdata)}
                       {Object.keys(formdata).map((item)=>{
                           return <ul>
                               <li>{formdata[item]}</li>
                           </ul>
                       })} */}

                       {data.map((item)=>{
                           return <ul>
                               <li>{item.username}</li>
                               <li>{item.email}</li>
                               <li>{item.password }</li>
                           </ul>
                       })}
                   </div>
               </form>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BasicForm