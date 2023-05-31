import React,{useState} from 'react'


export default function SignUpAdmin(props) {
  const user = props.value;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [fullName, setFullName] = useState('');
  const [nameOfHospitalOrBloodBank,setNameOfHospitalOrBloodBank]=useState('');
  const [gender, setGender] = useState('male');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [telephone, setTelephone] = useState('');
  const [errors, setErrors] = useState({});

  const validateDonorForm = () => {
    const newErrors = { ...errors };
    
    if (!nationalId) {
      newErrors.nationalId = 'National ID is required';
    } else {
      delete newErrors.nationalId;
    }
    if (!fullName) {
      newErrors.fullName= 'Full name is required';
    }else{
      delete newErrors.fullName;
    }
    if (!dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else{
      delete newErrors.dateOfBirth;
    }
    if (!telephone) {
      newErrors.telephone = 'Telephone number is required';
    } 
    else {
      delete newErrors.telephone;
    }
    if (!address) {
      newErrors.address = 'Address is required';
    }else {
      delete newErrors.address;
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }else {
      delete newErrors.password;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateAdminForm = () => {
    const newErrors = { ...errors };
    if (!userName) {
      newErrors.userName= 'Username is required';
    }else{
      delete newErrors.userName;
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }else {
      delete newErrors.password;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateHospitalandBloodBankForm = () => {
    const newErrors = { ...errors };

    if (!userName) {
      newErrors.userName= 'Username is required';
    }else{
      delete newErrors.userName;
    }
    if(!nameOfHospitalOrBloodBank){
      newErrors.nameOfHospitalOrBloodBank= `Name of ${user} is required `;
    }else{
      delete newErrors.nameOfHospitalOrBloodBank;
    }
    if (!telephone) {
      newErrors.telephone = 'Telephone number is required';
    } else {
      delete newErrors.telephone;
    }
    if (!address) {
      newErrors.address = 'Address is required';
    }else {
      delete newErrors.address;
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }else {
      delete newErrors.password;
    }/*
    if (!district) {
      newErrors.district= 'District is required';
    }else {
      delete newErrors.district;
    }*/
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    
  };

  const handleUserNameChange = (e) => {

    setUserName(e.target.value);
    if (errors.userName) {
      setErrors({ ...errors, userName: '' });
    }
  };

  const handleNationalIdChange = (e) => {

    setNationalId(e.target.value);
    if (errors.nationalId) {
      setErrors({ ...errors, nationalId: '' });
    }
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    if (errors.fullName) {
      setErrors({ ...errors, fullName: '' });
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    if (errors.gender) {
      setErrors({ ...errors, gender: '' });
    }
  };

  const handleDateOfBirthChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    const newErrors = { ...errors };
  
    if (!e.target.value) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else if (selectedDate > today) {
      newErrors.dateOfBirth = 'Date of birth cannot be set in the future';
    } else {
      const age = today.getFullYear() - selectedDate.getFullYear();
      const monthDiff = today.getMonth() - selectedDate.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
        age--;
      }
  
      if (age < 18) {
        newErrors.dateOfBirth = 'You must be 18 years or older to sign up';
      } else {
        delete newErrors.dateOfBirth;
      }
    }
  
    setErrors(newErrors);
    setDateOfBirth(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    const newTelephone = e.target.value;
    const newErrors = { ...errors };
  
    const telephoneRegex = /^\d{10}$/;
  
    if (!telephoneRegex.test(newTelephone)) {
      newErrors.telephone = 'Please enter a valid 10-digit telephone number';
    } else {
      delete newErrors.telephone;
    }
  
    setErrors(newErrors);
    setTelephone(newTelephone);
  };

  const handlePasswordChange = (e) => {
    
      const newPassword = e.target.value;
      const newErrors = { ...errors };
    
      if (newPassword.length <= 7) {
        newErrors.password = 'Password should be at least 8 characters';
      } else {
        delete newErrors.password;
      }
      setErrors(newErrors);
      setPassword(newPassword);
   
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    if (errors.address) {
      setErrors({ ...errors, address: '' });
    }
  };

  const handleNameOfHospitalOrBloodBankChange = (e) => {
    setNameOfHospitalOrBloodBank(e.target.value);
    if (errors.nameOfHospitalOrBloodBank) {
      setErrors({ ...errors, nameOfHospitalOrBloodBank: '' });
    }
  };
  
  const handleDonorSubmit = (e) => {
    e.preventDefault();
    if (validateDonorForm()) {
      
      window.location.href = '/donorDashboard';
      console.log('Donor signup successful');
    }
  };

  const handleHospitalBloodBankSubmit = (e) => {
    e.preventDefault();
    if (validateHospitalandBloodBankForm()) {
      if(user === 'hospital'){
        window.location.href = '/hospitalDashboard';
        console.log('Blood bank signup successful');
      }
      else if (user === 'bloodBank'){
        window.location.href = '/bloodBankDashboard';
        console.log('Blood bank signup successful');
      }
    
      
    }
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    if ( validateAdminForm()) {
    
      window.location.href = '/adminDashboard';
      console.log('admin signup successful');
    }
  };
    
  return (
    <div>
      <form onSubmit={user === 'admin' ? handleAdminSubmit : user === 'hospital' || user === 'bloodBank' ? handleHospitalBloodBankSubmit : handleDonorSubmit}>
  {(user === 'admin' || user === 'hospital' || user === 'bloodBank') && (
    <>
      {errors.userName && <p>{errors.userName}</p>}
      <label>
        Username:
        <input type="text" value={userName} onChange={handleUserNameChange} />
      </label>
    </>
  )}

  {user === 'donor' && (
    <>
      {errors.nationalId && <p>{errors.nationalId}</p>}
      <label>
        National Identity Card (NIC):
        <input type="text" value={nationalId} onChange={handleNationalIdChange} />
      </label>

      {errors.fullName && <p>{errors.fullName}</p>}
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={handleFullNameChange} />
      </label>

      <label>
        Gender:
        <label>
          Male
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
        </label>
        <label>
          Female
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
        </label>
      </label>

      {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
      <label>
        Date of Birth:
        <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
      </label>
    </>
  )}

{(user === 'bloodBank' || user === 'hospital' ) && (
    <>
    {errors.nameOfHospitalOrBloodBank && <p>{errors.nameOfHospitalOrBloodBank}</p>}
        <label>
          Name Of {user}:
          <input type="text" value={nameOfHospitalOrBloodBank} onChange={handleNameOfHospitalOrBloodBankChange} />
        </label>
        
    </>
  )}


  {(user === 'donor' || user === 'hospital' || user === 'bloodBank') && (
    <>
      {errors.telephone && <p>{errors.telephone}</p>}
      <label>
        Telephone Number:
        <input type="text" value={telephone} onChange={handleTelephoneChange} />
      </label>

      {errors.address && <p>{errors.address}</p>}
      <label>
        Address:
        <input type="text" value={address} onChange={handleAddressChange} />
      </label>
    </>
  )}

  {errors.password && <p>{errors.password}</p>}
  <label>
    Password:
    <input type="password" value={password} onChange={handlePasswordChange} />
  </label>

  <button type="submit">Sign up</button>
</form>
   
  </div>
  

    
      )
  
}

