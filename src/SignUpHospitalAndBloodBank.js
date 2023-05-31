import React,{useState} from 'react'
import { Validation } from './Validation'

export default function SignUpHospitalAndBloodBank(props) {
    const [values, setValues] = useState({
        username : "",
        name: "",
        district: "",
        telephoneNumber: "",
        address: "",
        password: "",

      });

      const [errors, setErrors] = useState({
        username : "",
        name: "",
        district: "",
        telephoneNumber: "",
        address: "",
        password: "",
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });

        setErrors({
            ...errors,
            [name]: "",
          });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = { ...errors };
    
        Object.keys(values).forEach((key) => {
          const errorMessage = Validation(key, values[key]);
          if (errorMessage !== "") {
            newErrors[key] = errorMessage;
            isValid = false;
          } else {
            newErrors[key] = "";
          }
        });

        if (isValid) {
            // Submit form
            window.location.href = '/adminDashboard' 
          } else {
            setErrors(newErrors);
          }
        };
  return (
    <div>
       <h2>{props.user} SignUp</h2>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          name="username"
          id="username"
          value={values.username}
          onChange={handleInputChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div>
        <label htmlFor="name">Name of {props.user}:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={handleInputChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

     <div>
        <label htmlFor="district">District Located In:</label>
        <input
          type="text"
          name="district"
          id="district"
          value={values.district}
          onChange={handleInputChange}
        />
        {errors.district && <p>{errors.district}</p>}
      </div>

      <div>
        <label htmlFor="telephoneNumber">Telephone Number:</label>
        <input
          type="text"
          name="telephoneNumber"
          id="telephoneNumber"
          value={values.telephoneNumber}
          onChange={handleInputChange}
        />
        {errors.telephoneNumber && <p>{errors.telephoneNumber}</p>}
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          id="address"
          value={values.address}
          onChange={handleInputChange}
        />
        {errors.address && <p>{errors.address}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleInputChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
