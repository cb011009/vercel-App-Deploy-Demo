import React,{useState} from 'react';
import './Forms.css';
import donorProfile from './images/donorProfile.png';

export default function Login(props) {
    
    const { value: user } = props;
    const [values, setValues] = useState({
      nationalId: '',
      userName: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
    /*const [validPassword, setValidPassword] = useState(false);*/
    const [validNationalId, setValidNationalId] = useState(false);

    const validateForm = (values, user) => {
      const newErrors = {};
  
      if (user === 'donor') {
      

        if (!values.nationalId) {
          newErrors.nationalId = 'NIC is required';
        } else if (!/^\d{12}$/.test(values.nationalId)) {
          newErrors.nationalId = 'NIC should be 12 digits';
        }  
        

      } 
      else {
        if (!values.userName) {
          newErrors.userName = 'Username is required';
        }
      }
  
      if (!values.password) {
        newErrors.password = 'Password is required';
      } /*else if (values.password.length <= 7) {
        newErrors.password = 'Password should be at least 8 characters';
      }*/
  
      return newErrors;
    };
  
  

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: '' });
  
     /* if (name === 'password' && value.length <= 7) {
        setErrors({ ...errors, password: 'Password should be at least 8 characters' });
      }*/

      if (name === 'password' && !value) {
        setErrors({ ...errors, password: 'Password is required' });
      }
      
     if (name === 'nationalId' && !/^\d{12}$/.test(value)) {
      setValidNationalId(false);
      setErrors({ ...errors, nationalId: 'NIC should be 12 digits ' });
    }

      


      switch(name){
        /*case 'password':
          
          if (!value) {
            setValidPassword(false);
          }
          else{
            setValidPassword(true);
          }
        
            break;*/
          case 'nationalId':
           if (!/^\d{12}$/.test(value)) {
            setValidNationalId(false);
          }
          else {
            setValidNationalId(true);
          }
            break;
         
      }

    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validateForm(values, user);
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        
        switch (user) {
          case 'donor':
            window.location.href = '/donorDashboard';
            console.log('admin login successful');
            break;
          case 'admin':
            window.location.href='/HospitalPendingRequests';
            /*window.location.href = '/adminDashboard';
            console.log('admin login successful');*/
            break;
          case 'hospital':
            window.location.href = '/hospitalDashboard';
            console.log('hospital login successful');
            break;
          case 'bloodBank':
            window.location.href = '/bloodBankDashboard';
            console.log('Blood bank login successful');
            break;
          default:
            window.location.href = '/donorDashboard';
            console.log('Donor login successful');
            break;
        }
      }
   
    }

  
 return(
  <>
  
  <form className="Form" onSubmit={handleSubmit}>
         <div >
           {user==='donor' && (<div className='formHeadingContent'><div className='formHeading'><h2>Donor Login</h2></div><div className='formImg'><img src={donorProfile}  className='donorIcon' /></div> </div>)}
           {user==='admin' && (<div className='formHeadingContent'><div className='formHeading'><h2>Admin Login</h2></div><div className='formImg'><img src={donorProfile}  className='adminIcon' /></div> </div>)}
           {user==='hospital' && (<div className='formHeadingContent'><div className='formHeading'><h2>Hospital Login</h2></div><div className='formImg'><img src={donorProfile}  className='hospitalIcon' /></div> </div>)}
           {user==='bloodBank' && (<div className='formHeadingContent'><div className='formHeading'><h2>Blood Bank Login</h2></div><div className='formImg'><img src={donorProfile}  className='bloodBankIcon' /></div> </div>)}
           </div>
          {user === 'donor' && (
            <>
            <div className='row'>
            
              <div  className='rowContent'><label className='formlabel'>National Identity Card (NIC):</label></div>
              <span className='feedBack'>{errors.nationalId && <span className='error'>{errors.nationalId}</span>}{validNationalId && <span className='valid'>NIC is valid</span>}</span>
              <div  className='rowContent'><input className='forminput' placeholder="Enter your NIC"  type="text" name="nationalId" value={values.nationalId} onChange={handleChange}/></div>
            </div>
            {/*<div className='row'>
              {errors.nationalId && <p>{errors.nationalId}</p>}
              {validNationalId && <p>NIC is valid</p>}
              <label className='formlabel'>
                National Identity Card (NIC):
                <input className='forminput'
                  type="text"
                  name="nationalId"
                  value={values.nationalId}
                  onChange={handleChange}
                />
              </label>
          </div>*/}
            </>
          )}
  
          {user !== 'donor' && (
            <>
            <div className='row'>
              <div className='rowContent'><label className='formlabel'> Username: </label></div>
              <span className='feedBack'>{errors.userName && <span className='error'>{errors.userName}</span>}</span>
              <div className='rowContent'> <input className='forminput' placeholder="Enter your Username" type="text" name="userName" value={values.userName} onChange={handleChange}/></div>
            </div>
               {/*<div className='row'>
              {errors.userName && <p>{errors.userName}</p>}
              <label className='formlabel'>
                Username:
                <input className='forminput'
                  type="text"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                />
              </label>
          </div>*/}
            </>
          )}

      
         <div className='row'>
             <div className='rowContent'><label className='formlabel' >Password </label></div>
             <span className='feedBack'>{errors.password && <span className='error'>{errors.password}</span>}{/*{validPassword && <span className='valid'>Password is valid</span>}*/}</span>
             <div className='rowContent' ><input placeholder="Enter your Password" className='forminput' type="password" name="password" value={values.password} onChange={handleChange}/></div>
         
          {/*<label className='formlabel' >Password: 
          <span>{errors.password && <p>{errors.password}</p>}</span>  
          <span>  {validPassword && <p>Password is valid</p>}</span>  
            <input className='forminput'
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>*/}
          </div>
        

          <div className='row'>
          <button className='LoginandSignupBtn' type="submit">Login</button>
          </div>
          </form>
  
  

  
  
   
  </>
    
  )
}
