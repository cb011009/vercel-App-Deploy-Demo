import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
/*import AuthContext from "./Context/AuthProvider";*/
import Navigation from "./Navigation";
import './LoginAndSignUp.js';

export default function LoginAndSignUp(props) {
 /* const { Auth, setAuth } = useContext(AuthContext);*/
  const history = useHistory();
  let NIC = "";
  let FullName = "";
  let UserName = "";
  let Gender = "";
  let BloodType = "A+";
  let District = "Ampara";
  let HospitalName = "";
  let BloodBankName = "";
  let BirthDate = "";
  let Address = "";
  let Telephone = "";
  let Password = "";

  const FORM_NAME = {
    DONOR_LOGIN: "donorLogin",
    DONOR_SIGNUP: "donorSignup",
    ADMIN_LOGIN: "adminLogin",
    ADMIN_SIGNUP: "adminSignup",
    HOSPITAL_LOGIN: "hospitalLogin",
    HOSPITAL_SIGNUP: "hospitalSignup",
    BLOODBANK_LOGIN: "bloodBankLogin",
    BLOODBANK_SIGNUP: "bloodBankSignup",
  };

  const INPUT_TYPE = {
    TEXT: "text",
    PASSWORD: "password",
    SELECT: "select",
    DATE: "date",
    RADIO: "radio",
    TEXTAREA: "textarea",
  };

  const forms = [
    {
      formName: FORM_NAME.DONOR_SIGNUP,
      requiredFields: ["nic","telephone","password","fullname","dateOfBirth",],
      fields: [
        { name: "nic", label: "NIC", type: INPUT_TYPE.TEXT,placeholder: "Enter NIC",},
        { name: "fullname", label: "Full Name", type: INPUT_TYPE.TEXT,placeholder: "Enter Full Name",},
        { name: "gender", label: "Gender", type: INPUT_TYPE.RADIO,placeholder: "Gender",options: ["Male", "Female"],},
        { name: "dateOfBirth",label: "Date Of Birth",  type: INPUT_TYPE.DATE,},
        { name: "bloodType", label: "Blood Type",type: INPUT_TYPE.SELECT,placeholder: "Blood Type",
          options: ["A+","A-","O-","O+","AB+","AB-","B-","B+","unknown",],},
        { name: "telephone",label: "Telephone Number",type: INPUT_TYPE.TEXT,placeholder: "Enter Telephone Number",},
        { name: "donorAddress", label: "Address", type: INPUT_TYPE.TEXTAREA, placeholder: "Enter Address", },
        { name: "password",label: "Password",type: INPUT_TYPE.PASSWORD,placeholder: "Enter Password",},
      ],
    },
    {
      formName: FORM_NAME.DONOR_LOGIN,
      requiredFields: ["nic", "loginPassword"],
      fields: [
        { name: "nic",label: "NIC",type: INPUT_TYPE.TEXT,placeholder: "Enter NIC",},
        { name: "loginPassword",label: "Password",type: INPUT_TYPE.PASSWORD, placeholder: "Enter Password",},
      ],
    },
    {
      formName: FORM_NAME.ADMIN_SIGNUP,
      requiredFields: ["username", "password"],
      fields: [
        { name: "username",label: "Username",type: INPUT_TYPE.TEXT,placeholder: "Enter  Username",},
        { name: "password",label: "Password",type: INPUT_TYPE.PASSWORD,placeholder: "Enter Password",},
      ],
    },
    {
      formName: FORM_NAME.ADMIN_LOGIN,
      requiredFields: ["username", "loginPassword"],
      fields: [
        { name: "username",label: "Username",type: INPUT_TYPE.TEXT,placeholder: "Enter  Username",},
        { name: "loginPassword",label: "Password",type: INPUT_TYPE.PASSWORD,placeholder: "Enter Password",},
      ],
    },
    {
      formName: FORM_NAME.HOSPITAL_SIGNUP,
      requiredFields: ["nameOfHospital","telephone","password","username", "address",],
      fields: [
        { name: "username",label: "Username",type: INPUT_TYPE.TEXT,placeholder: "Enter username",},
        { name: "nameOfHospital", label: "Name Of Hospital",type: INPUT_TYPE.TEXT,placeholder: "Enter Name Of Hospital",},
        { name: "district",label: "District Located In",type: INPUT_TYPE.SELECT,
          options: ["Ampara","Anuradhapura","Badulla","Batticaloa","Colombo","Galle","Gampaha","Hambantota","Jaffna","Kalutara",
            "Kandy","Kegalla","Kilinochchi","Kurunegala","Mannar","Matale","Matara","Moneragala","Mullaitivu","Nuwara Eliya",
            "Polonnaruwa","Puttalam","Ratnapura","Trincomalee","Vavuniya",],},
        { name: "telephone",label: "Telephone Number",type: INPUT_TYPE.TEXT, placeholder: "Enter Telephone Number",},
        { name: "address",label: "Addres",type: INPUT_TYPE.TEXTAREA,placeholder: "Enter Address",},
        { name: "password",label: "Password",type: INPUT_TYPE.PASSWORD,placeholder: "Enter Password",},
      ],
    },
    {
      formName: FORM_NAME.HOSPITAL_LOGIN,
      requiredFields: ["username", "loginPassword"],
      fields: [
        { name: "username",label: "Username",type: INPUT_TYPE.TEXT,placeholder: "Enter Username",},
        { name: "loginPassword",label: "Password",type: INPUT_TYPE.PASSWORD,placeholder: "Enter Password",},
      ],
    },
    {
      formName: FORM_NAME.BLOODBANK_SIGNUP,
      requiredFields: [ "nameOfBloodBank", "telephone", "password", "username", "address",
      ],
      fields: [
        { name: "username",label: "Username",type: INPUT_TYPE.TEXT,placeholder: "Enter username",},
        { name: "nameOfBloodBank",label: "Name Of Blood Bank",type: INPUT_TYPE.TEXT,placeholder: "Enter Name Of Blood Bank",},
        { name: "district",label: "District", type: INPUT_TYPE.SELECT,
          options: ["Ampara","Anuradhapura","Badulla","Batticaloa","Colombo","Galle","Gampaha","Hambantota",
          "Jaffna","Kalutara","Kandy","Kegalla", "Kilinochchi","Kurunegala","Mannar", "Matale","Matara",
          "Moneragala","Mullaitivu","Nuwara Eliya","Polonnaruwa","Puttalam","Ratnapura","Trincomalee","Vavuniya",],
        },
        { name: "telephone", label: "Telephone",type: INPUT_TYPE.TEXT,placeholder: "Enter Telephone Number",},
        { name: "address", label: "Address", type: INPUT_TYPE.TEXTAREA, placeholder: "Enter Address",},
        { name: "password", label: "Password", type: INPUT_TYPE.PASSWORD, placeholder: "Enter Password",},
      ],
    },
    {
      formName: FORM_NAME.BLOODBANK_LOGIN,
      requiredFields: ["username", "loginPassword"],
      fields: [
        { name: "username",label: "Username",type: INPUT_TYPE.TEXT,placeholder: "Enter Username",},
        { name: "loginPassword",label: "Password",type: INPUT_TYPE.PASSWORD, placeholder: "Enter Password",},
      ],
    },
  ];
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (fieldName, value) => {
    const newFormValues = {
      ...formValues,
      [fieldName]: value,
    };
    setFormValues(newFormValues);

    const error = validateField(fieldName, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));
  };

  const validateField = (fieldName, value) => {
    if (!value && fieldName !== "donorAddress") {
      if (fieldName === "dateOfBirth") {
        return "Date of birth is required.";
      }else if (fieldName === "nameOfBloodBank") {
        return "Name Of Blood Bank is required.";
      } else if (fieldName === "nameOfHospital") {
        return "Name Of Hospital is required.";
      } else if (fieldName === "loginPassword") {
        return "Password is required.";
      } else {
        return `${fieldName} is required.`;
      }
    }
    if (fieldName === "nic" && (value.length !== 12 || !/^\d+$/.test(value))) {
      return "NIC should be a 12-digit number.";
    }
    if (
      fieldName === "telephone" &&
      (value.length !== 10 || !/^\d+$/.test(value))
    ) {
      return "Telephone should be a 10-digit number.";
    }
    if (fieldName === "dateOfBirth") {
      const currentDate = new Date();
      const dob = new Date(value);

      if (currentDate.getFullYear() - dob.getFullYear() < 18) {
        return "You must be at least 18 years old to sign up.";
      }
    }
    if (
      fieldName === "password" &&
      (value.length < 8 ||
        !/[a-z]/.test(value) ||
        !/[A-Z]/.test(value) ||
        !/\d/.test(value)||
        !/[!@#$%^&*()]/.test(value)
        )
    ) {
      return "Password should be at least 8 characters long and contain a mix of uppercase, lowercase, digits, and symbols.";
    }
    if (
      fieldName === "password" &&
      (value.length > 16 ||
        !/[a-z]/.test(value) ||
        !/[A-Z]/.test(value) ||
        !/\d/.test(value)||
        !/[!@#$%^&*()]/.test(value)
        )
    ) {
      return "Password should have a maximum of 16 characters.";
    }

    return "";
  };

  const validateForm = () => {
    const currentForm = forms.find((form) => form.formName === props.page);
    const requiredFields = currentForm.requiredFields;
    const newErrors = {};

    requiredFields.forEach((field) => {
      const error = validateField(field, formValues[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formSubmitted = async (formValues, formName) => {
    if (formName === FORM_NAME.DONOR_SIGNUP) {
      console.log("Donor Signup form submitted");
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          if (key === "nic") {
            NIC = formValues[key];
          }if (key === "fullname") {
            FullName = formValues[key];
          }if (key === "gender") {
            Gender = formValues[key];
          }if (key === "dateOfBirth") {
            BirthDate = formValues[key];
          }if (key === "bloodType") {
            BloodType = formValues[key];
          }if (key === "telephone") {
            Telephone = formValues[key];
          }if (key === "donorAddress") {
            Address = formValues[key];
          }if (key === "password") {
            Password = formValues[key];
          }
        }
      }
      const dobString = BirthDate.toString().slice(0, 10);

      const newDonor = {
        NIC: NIC,
        password: Password,
        gender: Gender,
        dob: dobString,
        name: FullName,
        bloodtype: BloodType,
        telephone: Number(Telephone),
        address: Address,
      };
      try {
        const { data } = await axios.post(
          "http://localhost:8070/Donor/add",
          newDonor,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/testHome");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;
    } else if (formName === FORM_NAME.DONOR_LOGIN) {
      console.log("Donor Login form submitted");
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          if (key === "nic") {
            NIC = formValues[key];
          }
          if (key === "loginPassword") {
            Password = formValues[key];
          }
        }
      }
      const donor = {
        NIC: NIC,
        password: Password,
      };

      try {
        const { data } = await axios.post(
          "http://localhost:8070/Donor/login",
          donor,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/testHome");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;
    } else if (formName === FORM_NAME.ADMIN_SIGNUP) {
      console.log("Admin Signup form submitted");
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          if (key === "username") {
            UserName = formValues[key];
          }
          if (key === "password") {
            Password = formValues[key];
          }
        }
      }
      const newadmin = {
        username: UserName,
        password: Password,
      };
      console.log(newadmin)
      try {
        const { data } = await axios.post(
          "http://localhost:8070/admin/add",
          newadmin,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/testHome");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }

      return;
    } else if (formName === FORM_NAME.ADMIN_LOGIN) {
      console.log("Admin Login form submitted");
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          if (key === "username") {
            UserName = formValues[key];
          }
          if (key === "loginPassword") {
            Password = formValues[key];
          }
        }
      }
      const Admin = {
        username: UserName,
        password: Password,
      };
      try {
        const { data } = await axios.post(
          "http://localhost:8070/admin/login",
          Admin,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/testHome");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;
      // console.log(UserName);
      // console.log(Password);
    } else if (formName === FORM_NAME.HOSPITAL_SIGNUP) {
      console.log("Hospital Signup form submitted");
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          if (key === "username") {
            UserName = formValues[key];
          }if (key === "nameOfHospital") {
            HospitalName = formValues[key];
          }if (key === "district") {
            District = formValues[key];
          }if (key === "telephone") {
            Telephone = formValues[key];
          }if (key === "address") {
            Address = formValues[key];
          }if (key === "password") {
            Password = formValues[key];
          }
        }
      }
      const newhospital = {
        username: UserName,
        password: Password,
        name: HospitalName,
        district: District,
        telephone: Number(Telephone),
        address: Address,
      };
      console.log(newhospital)
      try {
        const { data } = await axios.post(
          "http://localhost:8070/hospital/add",
          newhospital,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/testHome");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;
    } else if (formName === FORM_NAME.HOSPITAL_LOGIN) {
      console.log("Hospital Login form submitted");
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          if (key === "username") {
            UserName = formValues[key];
          }if (key === "loginPassword") {
            Password = formValues[key];
          }
        }
      }
      const Hospital = {
        username: UserName,
        password: Password,
      };
      try {
        const { data } = await axios.post(
          "http://localhost:8070/hospital/login",
          Hospital,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/testHome");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;
    } else if (formName === FORM_NAME.BLOODBANK_SIGNUP) {
      console.log("Bloodbank Signup form submitted");
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          if (key === "username") {
            UserName = formValues[key];
          }if (key === "nameOfBloodBank") {
            BloodBankName = formValues[key];
          }if (key === "district") {
            District = formValues[key];
          }if (key === "telephone") {
            Telephone = formValues[key];
          }if (key === "address") {
            Address = formValues[key];
          }if (key === "password") {
            Password = formValues[key];
          }
        }
      }
      const newbloodBank = {
        username: UserName,
        password: Password,
        name: BloodBankName,
        district: District,
        telephone: Number(Telephone),
        address: Address,
      };
      console.log(newbloodBank)
      try {
        const { data } = await axios.post(
          "http://localhost:8070/bloodBank/add",
          newbloodBank,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/testHome");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;
    } else if (formName === FORM_NAME.BLOODBANK_LOGIN) {
      console.log("BLOODBANK Login form submitted");
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          if (key === "username") {
            UserName = formValues[key];
          }if (key === "loginPassword") {
            Password = formValues[key];
          }
        }
      }
      const BloodBank = {
        username: UserName,
        password: Password,
      };
      try {
        const { data } = await axios.post(
          "http://localhost:8070/bloodBank/login",
          BloodBank,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/testHome");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      formSubmitted(formValues, props.page);
      console.log(formValues);
    }
  };

  const currentForm = forms.find((form) => form.formName === props.page);
  let page=props.page;
  const heading = page.replace(/([A-Z])/g, ' $1').toUpperCase();
  let typeOfForm = "";

  if (page.includes("Signup")) {
    if (page.includes("admin")) {
      typeOfForm = "login";
    } else {
      typeOfForm = "signup";
    }
  } else if (page.includes("Login")) {
    typeOfForm = "login";
  }

  
  return (
    <div className="loginAndSingupContainer">
      <div className="loginAndSignupSide"><Navigation user="home"/></div>
      <div className={`${typeOfForm}Container`}>
        <h2>{heading}</h2>
        <form onSubmit={handleSubmit} className={`${typeOfForm}Form`}>
          
          {currentForm.fields.map((field) => (
            <div key={field.name} className="formRows">
              <div className="formLabel"><label htmlFor={field.name}>{field.label}</label></div>
              {errors[field.name] && (
                <span className="error">{errors[field.name]}<br/></span>
              )}
              {(field.type === INPUT_TYPE.TEXT||field.type === INPUT_TYPE.PASSWORD||field.type === INPUT_TYPE.DATE) && (
                <input className="formInputBox"
                  placeholder={field.placeholder}
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formValues[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                />
              )}
              {/* {field.type === INPUT_TYPE.TEXT && (
                <input 
                  placeholder={field.placeholder}
                  type="text"
                  id={field.name}
                  name={field.name}
                  value={formValues[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                />
              )} */}
              {/*{field.type === INPUT_TYPE.PASSWORD && (
                <input
                  placeholder={field.placeholder}
                  type="password"
                  id={field.name}
                  name={field.name}
                  value={formValues[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                />
                )}*/}
              {field.type === INPUT_TYPE.SELECT && (
                <select className="formInputBox"
                  id={field.name}
                  name={field.name}
                  value={formValues[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {/*{field.type === INPUT_TYPE.DATE && (
                <input
                  type="date"
                  id={field.name}
                  name={field.name}
                  value={formValues[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                />
                )}*/}
              {field.type === INPUT_TYPE.RADIO && (
                <div className="genderContainer">
                  {field.options.map((option) => (
                    
                    <div key={option}>
                      <input 
                        type="radio"
                        id={option}
                        name={field.name}
                        value={option}
                        checked={formValues[field.name] === option}
                        onChange={(e) =>
                          handleInputChange(field.name, e.target.value)
                        }
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                   
                  ))}
                </div>
              )}
              {field.type === INPUT_TYPE.TEXTAREA && (
                <textarea className="formInputBox"
                  placeholder={field.placeholder}
                  id={field.name}
                  name={field.name}
                  value={formValues[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                />
              )}
             
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
