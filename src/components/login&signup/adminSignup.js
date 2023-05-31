/*import React, {useState} from 'react';
import '../../css/main.css';
import axios from "axios";


export default function AdminSignup(){
    const [username, setusername]=useState('')//
  const [password, setPassword]=useState('')


  function sendData(e){
    e.preventDefault();
    const newadmin={
      username,
      password
    }
    axios.post("http://localhost:8070/admin/add",newadmin).then(()=>{
      alert("admin added to the database")
    }).catch((err)=>{
      alert(err)
    })
    console.log(newadmin);

  }
  function handleSelect(event) {
    setdistrict(event.target.value);
  }
    return(
        <div className='login'>
          <h1>Signup (Admin)</h1>
          <br/>
          <form onSubmit={sendData}>
            <div className='formField'>
            <p>Username</p><p id='required'>*</p>
            <input type='text' onChange={(e)=>{
              setusername(e.target.value)
            }} placeholder='username' />
            </div>
            <br/>
            <div className='formField'>
            <p>Password</p><p id='required'>*</p>
            <input type='password' onChange={(e)=>{
              setPassword(e.target.value)
            }} placeholder='Password' />
            </div>
            <br/>
            <button className='btn' type='submit'>Submit</button>
            
          </form>
    
    
        </div>
        
      )

}*/

