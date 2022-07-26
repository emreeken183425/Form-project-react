import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
const Form=()=> {
const [username,setUsername]=useState("");
const [email,setEmail]=useState('');
const [pasword,setPasword]=useState('');

const handleSubmit=()=>{
  alert(`
  username:${username}
  email:${email}
  password:${pasword}
  `)
}
  
return (
    <div  style={{margin:'5rem' }}  >
      <form style={{margin:'5rem' }} onSubmit={ handleSubmit} >
      <div className="mb-3">
    <label  style={{margin:'5rem' }} htmlFor="username" className="form-label">User Name <span className='text-primary' >:{username} </span> </label><br />
    <input  style={{margin:'1rem' }} type="text" className="form-control" value={username} id="username" onChange={(e)=> setUsername(e.target.value)}  />
    
  </div>
  <div  style={{margin:'5rem' }} className="mb-3">
    <label htmlFor="email" className="form-label">Email address <span className='text-warning' >{email} </span> </label>
    <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} />
    
  </div>
  <div  style={{margin:'5rem' }} className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"  id="password" onChange={(e)=>setPasword(e.target.value) }  />
  </div>
 
  <button  style={{margin:'5rem' }} type="submit"  className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Form