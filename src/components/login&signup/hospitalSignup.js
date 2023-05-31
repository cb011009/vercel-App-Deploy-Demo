/*import React, {useState} from 'react';
import '../../css/main.css';
import axios from "axios";


export default function HospitalSignup(){
    const [username, setusername]=useState('')//
  const [password, setPassword]=useState('')
  const [name,setName]=useState('')
  const [telephone,setTelephone]=useState('')
  const [district,setdistrict]=useState('')//
  const [address,setAddress]=useState('')


  function sendData(e){
    e.preventDefault();
    const newhospital={
      username,
      password,
      name,
      district,
      telephone:Number(telephone),
      address
    }
    axios.post("http://localhost:8070/hospital/add",newhospital).then(()=>{
      alert("hospital added to the database")
    }).catch((err)=>{
      alert(err)
    })
    console.log(newhospital);

  }
  function handleSelect(event) {
    setdistrict(event.target.value);
  }
    return(
        <div className='login'>
          <h1>Signup (Hospital)</h1>
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
            <div className='formField'>
            <p>Name of the blood bank</p><p id='required'>*</p>
            <input type='text' onChange={(e)=>{
              setName(e.target.value)
            }} placeholder='username' />
            </div>
            <br/>
            <div className='formField'>
            <p>District</p>
            <select value={district} onChange={handleSelect}>
              <option value={""}>Select an option</option>
              <option value={"Colombo"}>Colombo</option>
              <option value={"Kalutara"}>Kalutara</option>
              <option value={"Gampaha"}>Gampaha</option>
              <option value={"Kurunegala"}>Kurunegala</option>
              <option value={"Puttalam"}>Puttalam</option>
              <option value={"Jaffna"}>Jaffna</option>
              <option value={"Killinochchi"}>Killinochchi</option>
              <option value={"Mannar"}>Mannar</option>
              <option value={"Mullativu"}>Mullativu</option>
              <option value={"Vavuniya"}>Vavuniya</option>
              <option value={"Anuradhapura"}>Anuradhapura</option>
              <option value={"Polonnaruwa"}>Polonnaruwa</option>
              <option value={"Trincomalee"}>Trincomalee</option>
              <option value={"Batticloa"}>Batticloa</option>
              <option value={"Ampara"}>Ampara</option>
              <option value={"Matale"}>Matale</option>
              <option value={"Kandy"}>Kandy</option>
              <option value={"Nuwara Eliya"}>Nuwara Eliya</option>
              <option value={"Badulla"}>Badulla</option>
              <option value={"Monaragala"}>Monaragala</option>
              <option value={"Kegalle"}>Kegalle</option>
              <option value={"Ratnapura"}>Ratnapura</option>
              <option value={"Hambantota"}>Hambantota</option>
              <option value={"Matara"}>Matara</option>
              <option value={"Galle"}>Galle</option>
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

