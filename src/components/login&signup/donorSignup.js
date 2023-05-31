/*import React, {useState} from 'react';
import '../../css/main.css';
import axios from "axios";


export default function DonorSignup(){
    const [NIC, setNIC]=useState('')
  const [password, setPassword]=useState('')
  const [gender,setGender]=useState('')
  const [dob,setDob]=useState('')
  const [name,setName]=useState('')
  const [telephone,setTelephone]=useState('')
  const [bloodtype,setBloodtype]=useState('')
  const [address,setAddress]=useState('')


  function sendData(e){
    e.preventDefault();
    const dobString = dob.toString().slice(0, 10);
    const newDonor={
      NIC,
      password,
      gender,
      dob:dobString,
      name,
      bloodtype,
      telephone:Number(telephone),
      address
    }
    axios.post("http://localhost:8070/Donor/add",newDonor).then(()=>{
      alert("Donor added to the database")
    }).catch((err)=>{
      alert(err)
    })
    console.log(newDonor);

  }
  function handleSelect(event) {
    setBloodtype(event.target.value);
  }
    return(
        <div className='login'>
          <h1>Signup (Donor)</h1>
          <br/>
          <form onSubmit={sendData}>
            <div className='formField'>
            <p>NIC</p><p id='required'>*</p>
            <input type='text' onChange={(e)=>{
              setNIC(e.target.value)
            }} placeholder='NIC' />
            </div>
            <br/>
            <div className='formField'>
            <p>Password</p><p id='required'>*</p>
            <input type='password' onChange={(e)=>{
              setPassword(e.target.value)
            }} placeholder='Password' />
            </div>
            <br/>
            <div className='formField'>
            <p>Full Name</p><p id='required'>*</p>
            <input type='text' onChange={(e)=>{
              setName(e.target.value)
            }} placeholder='NIC' />
            </div>
            <br/>
            <div className='formField'>
            <p>Gender</p>
            <div className='formField2'>
            <div id='radio'>
            <input type='radio' value={"Male"} onChange={(e)=>{
              setGender(e.target.value)
            }}  /></div><p>Male</p>
            <div id='radio'>
            <input type='radio' value={"Female"} onChange={(e)=>{
              setGender(e.target.value)
            }}  /></div><p>Female</p>
            </div>
            </div>
            <br/>
            <div className='formField'>
            <p>Date of Birth</p><p id='required'>*</p>
            <input type='date' selected={dob} onChange={(e)=>{
              setDob(e.target.value)
            }} />
            </div>
            <br/>
            <div className='formField'>
            <p>Blood Type</p>
            <select value={bloodtype} onChange={handleSelect}>
              <option value={""}>Select an option</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
            </select>
            </div>
            <br/>
            <div className='formField'>
            <p>Telephone</p><p id='required'>*</p>
            <input type='number' onChange={(e)=>{
              setTelephone(parseInt
                (e.target.value))
            }}  />
            </div>
            <br/>
            <div className='formField'>
            <p>Address</p>
            <input type='text' onChange={(e)=>{
              setAddress(e.target.value)
            }}  />
            </div>
            <br/>
            <button className='btn' type='submit'>Submit</button>
            
          </form>
    
    
        </div>
        
      )

}*/

