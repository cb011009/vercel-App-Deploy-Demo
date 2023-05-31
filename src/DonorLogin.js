/*import React,{useState} from 'react'
import { Validation } from './Validation';

export default function DonorLogin(props) {
    const [values, setValues] = useState({
        NIC: "",
        password: "",
        
       });
    
      const [errors, setErrors] = useState({
        NIC : "",
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
      
        console.log("Admin Form submitted successfully");
      } else {
        setErrors(newErrors);
      }
    };
   return (
   <>
   <div>
      <h2> {props.user} Login </h2>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="NIC">NIC (National Identity Card):</label>
    <input
      type="text"
      name="NIC"
      id="NIC"
      value={values.NIC}
      onChange={handleInputChange}
    />
    {errors.NIC && <p>{errors.NIC}</p>}
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
   </>
    
  )
}*/
