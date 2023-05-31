import React,{useState} from 'react'

export default function SignUpAdmin(props) {
    
    const { value: user } = props;
    const [values, setValues] = useState({
      nationalId: '',
      fullName:'',
      userName: '',
      nameOfHospitalOrBloodBank:'',
      gender:'',
      dateOfBirth:'',
      bloodType:'',
      district:'',
      telephone:'',
      address:'',
      password: '',

    });
    const [errors, setErrors] = useState({});
    const [validPassword, setValidPassword] = useState(false);
    const [validNationalId, setValidNationalId] = useState(false);
    const [validDateOfBirth, setvalidDateOfBirth] = useState(false);
    const [validtelephone, setValidTelephone]=useState(false);

    const validateForm = (values, user) => {
      const newErrors = {};
      if(user === 'donor'){
        if (!values.nationalId) {
          newErrors.nationalId = 'NIC is required';
        }
        if(!values.fullName){
          newErrors.fullName = 'Full name is required';
        }
        if (!values.dateOfBirth) {
          newErrors.dateOfBirth = 'Date of Birth is required';
        } else {
          const currentDate = new Date();
          const selectedDate = new Date(values.dateOfBirth);
    
          if (selectedDate > currentDate) {
             newErrors.dateOfBirth = 'Invalid Date Of Birth';
          } else {
            const diffInYears = (currentDate - selectedDate) / (1000 * 60 * 60 * 24 * 365);
            if (diffInYears < 18) {
              newErrors.dateOfBirth = 'You must be at least 18 years old to sign up';
            }
          }
        }
        
        if (!values.telephone) {
          newErrors.telephone = 'Telephone Number is required';
        } else if (!/^\d{10}$/.test(values.telephone)) {
          newErrors.telephone = 'Telephone Number should be 10 digits';
        }  

        if(!values.password) {
          newErrors.password = 'Password is required';
        } else if(values.password.length <= 7) {
          newErrors.password = 'Password should be at least 8 characters';
        }
       }
       else {
        if (!values.userName) {
          newErrors.userName = 'Username is required';
        }
        if(!values.password) {
          newErrors.password = 'Password is required';
        } else if(values.password.length <= 7) {
          newErrors.password = 'Password should be at least 8 characters';
        }
       }

      if(user === 'bloodBank'|| user ==='hospital'){
       
        if(!values.address){
          newErrors.address = 'Address is required';
        }
        if (!values.telephone) {
          newErrors.telephone = 'Telephone Number is required';
        } else if (!/^\d{10}$/.test(values.telephone)) {
          newErrors.telephone = 'Telephone Number should be 10 digits';
        }  

        
      }
      
      if(user === 'bloodBank'|| user ==='hospital'){
       
        if(!values.nameOfHospitalOrBloodBank){
          newErrors.nameOfHospitalOrBloodBank = `Name Of ${user} is required`;
        }
        if(!values.address){
          newErrors.address = 'Address is required';
        }
        
      }
    
     
  
  
      return newErrors;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: '' });
     
      switch(name){
        case 'password':
          if (value.length <= 7) {
            setValidPassword(false);
            setErrors({ ...errors, password: 'Password should be at least 8 characters' });
          }
          else if(!value){
            setValidPassword(false);
          }
          else{
            setValidPassword(true);
          }
        break;

        case 'dateOfBirth':
          if (name === 'dateOfBirth') {
            const currentDate = new Date();
            const selectedDate = new Date(value);
        
            if (selectedDate > currentDate) {
              setvalidDateOfBirth(false);
              setErrors({ ...errors, dateOfBirth: 'Invalid Date Of Birth' });
            } else {
              const diffInYears = (currentDate - selectedDate) / (1000 * 60 * 60 * 24 * 365);
              if (diffInYears < 18) {
                setvalidDateOfBirth(false);
                setErrors({ ...errors, dateOfBirth: 'You must be at least 18 years old to sign up' });
    
              } else {
                setvalidDateOfBirth(true);
                setErrors({ ...errors, dateOfBirth: '' }); 
              }
            }
          }

          break;

          case 'telephone':
            if (name === 'telephone') {
             
              if (!value) {
                setValidTelephone(false);
                setErrors({ ...errors, telephone: 'Telephone Number is required' });
              } else if (!/^\d{10}$/.test(value)) {
                setValidTelephone(false);
                setErrors({ ...errors, telephone: 'Telephone Number should be 10 digits' });
              } else {
                setValidTelephone(true);
                setErrors({ ...errors, telephone: '' }); 
              }
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
            window.location.href = '/adminDashboard';
            console.log('admin login successful');
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
  <form onSubmit={handleSubmit}>
          {user === 'donor' && (
            <>
              {errors.nationalId && <p>{errors.nationalId}</p>}
              {validNationalId && <p>NIC is valid</p>}
              <label>
                National Identity Card (NIC):
                <input
                  type="text"
                  name="nationalId"
                  value={values.nationalId}
                  onChange={handleChange}
                />
              </label>

              {errors.fullName && <p>{errors.fullName}</p>}
              {validNationalId && <p>NIC is valid</p>}
              <label>
                Full Name :
                <input
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                />
              </label>

              <label>
             Gender:
                  <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={values.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>

        <label>
        Blood Type:
  <select name="bloodType" value={values.bloodType} onChange={handleChange}>
    <option value="">Select Blood Type</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </select>
        </label>

      </label>
      {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
      {validDateOfBirth && <p>Date Of Birth is Valid</p>}
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
        />
      </label>

      
            </>

            
          )}

          {(user !== 'donor'|| user == 'admin' || user == 'hospital' || user == 'bloodBank' ) && (
            <>
              {errors.userName && <p>{errors.userName}</p>}
              <label>
                Username:
                <input
                  type="text"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                />
              </label>

             
            </>
          )} 

          {(user !== 'admin' && user !== 'donor' || user == 'hospital' || user == 'bloodBank' ) && (
            <>

            {errors.nameOfHospitalOrBloodBank && <p>{errors.nameOfHospitalOrBloodBank}</p>}
              <label>
                Name of {user} :
                <input
                  type="text"
                  name="nameOfHospitalOrBloodBank"
                  value={values.nameOfHospitalOrBloodBank}
                  onChange={handleChange}
                />
              </label>
              {errors.district && <p>{errors.district}</p>}
              <label>
                District  {user} is Located In:
                <input
                  type="text"
                  name="district"
                  value={values.district}
                  onChange={handleChange}
                />
              </label>

            
            </>
             )}
  
          {(user !== 'admin'|| user == 'donor' || user == 'hospital' || user == 'bloodBank' ) && (
            <>
              {errors.telephone && <p>{errors.telephone}</p>}
              {validtelephone && <p>Telephone Number is Valid</p>}
              <label>
                Telephone Number:
                <input
                  type="text"
                  name="telephone"
                  value={values.telephone}
                  onChange={handleChange}
                />
              </label>

              {errors.address && <p>{errors.address}</p>}
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                />
              </label>
            </>
          )}
         {errors.password && <p>{errors.password}</p>}
          {validPassword && <p>Password is valid</p>}
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
  
          <button type="submit">SignUp</button>
          </form>
  </>
    
  )
}

    