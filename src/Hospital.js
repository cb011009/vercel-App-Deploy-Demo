import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";


const Page = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  DASHBOARD: "dashboard",
  NAVIGATION: "navigation",
  BLOODBANKSEARCH: "bloodbanksearch",
  HOSPITALBLOODCHART: "hospitalbloodchart",

};

const InputType = {
  TEXT: 'text',
  PASSWORD: 'password',
  SELECT: 'select',
  DATE: 'date',
  TEXTAREA: 'textarea',
};

const TableNames = {
  BLOODBANKSEARCH: "bloodbanksearch",
};

const DropDown = {
  DISTRICTDROPDOWN: "districtdropdown",
  BLOODTYPEDROPDOWN: "bloodtypedropdown",
};

function Hospital(props) {

  let UserName = '';
  let District='Ampara';
  let HospitalName='';
  let Address='';
  let Telephone='';
  let Password='';

  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  if (props.page === Page.LOGIN || props.page === Page.SIGNUP ) {
    const forms = [
      {
        formName: Page.SIGNUP,
        requiredFields: ['nameOfHospital', 'telephone', 'password', 'username', 'address'],
        fields: [
          { name: 'username',label:'Username', type:  InputType.TEXT, placeholder: 'Enter username' },
          { name: 'nameOfHospital',label:'Name Of Hospital', type:  InputType.TEXT, placeholder: 'Enter Name Of Hospital' },
          {
            name: 'district',
            label:'District Located In',
            type:  InputType.SELECT,
            options: ['Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota','Jaffna',
            'Kalutara', 'Kandy', 'Kegalla', 'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara','Moneragala','Mullaitivu', 
            'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'
          ],
          },
          { name: 'telephone', label:'Telephone Number',type: InputType .TEXT, placeholder: 'Enter Telephone Number' },
          { name: 'address',label:'Addres', type: InputType .TEXTAREA, placeholder: 'Enter Address' },
          { name: 'password',label:'Password', type:  InputType.PASSWORD, placeholder: 'Enter Password' },
        ],
      },
      {
        formName: Page.LOGIN,
        requiredFields: ['username', 'loginPassword'],
        fields: [
          { name: 'username',label:'Username', type:  InputType.TEXT, placeholder: 'Enter Username' },
          { name: 'loginPassword',label:'Password', type:  InputType.PASSWORD, placeholder: 'Enter Password' },
        ],
      },
    ];
    
    
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
        if (!value && fieldName != 'donorAddress') {
          if (fieldName === 'nameOfHospital') {
            return 'Name Of Hospital is required.';
          }else if (fieldName === 'loginPassword') {
              return 'Password is required.';
          } else {
            return `${fieldName} is required.`;
          }
        }
        if (fieldName === 'telephone' && (value.length !== 10 || !/^\d+$/.test(value))) {
          return 'Telephone should be a 10-digit number.';
        }
        if (
          fieldName === 'password' &&
          (value.length < 8 || !/[a-z]/.test(value) || !/[A-Z]/.test(value) || !/\d/.test(value))
        ) {
          return 'Password should be at least 8 characters long and contain a mix of uppercase, lowercase, digits, and symbols.';
        } 
        if (
          fieldName === 'password' &&
          (value.length > 17 || !/[a-z]/.test(value) || !/[A-Z]/.test(value) || !/\d/.test(value))
        ) {
          return 'Maximum Password length of 17 Characters exceeded';
        }

    return '';
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

      const formSubmitted = (formValues, formName) => {
     
        if (formName === Page.LOGIN) {
          console.log('Hospital Login form submitted');
          for (const key in formValues) {
            if (formValues.hasOwnProperty(key)) {
              if (key === 'username') {UserName = formValues[key];}
              if (key === 'loginPassword') {Password= formValues[key];}}}
          console.log(UserName);
          console.log(Password);
        }
        else if (formName === Page.SIGNUP) {
          console.log('Hospital Signup form submitted');
          for (const key in formValues) {
            if (formValues.hasOwnProperty(key)) {
              if (key === 'username') {UserName = formValues[key];}
              if (key === 'nameOfHospital') {HospitalName = formValues[key];}
              if (key === 'district') {District= formValues[key];}
              if (key === 'telephone') {Telephone = formValues[key];}
              if (key === 'address') {Address= formValues[key];}
              if (key === 'password') {Password= formValues[key];}}}
          console.log(UserName);
          console.log(HospitalName);
          console.log(District);
          console.log(Telephone);
          console.log(Address); 
          console.log(Password);
          
        } 
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const isFormValid = validateForm();
      
        if (isFormValid) {
        
          formSubmitted(formValues, props.page);
        }
      };
    const currentForm = forms.find((form) => form.formName === props.page);

    return (
      <div>
      <li className="lists">
      <a href="/donorLoginPage" className="link">DONOR</a>
    </li>
    <li className="lists">
      <a href="/adminLoginPage" className="link">ADMIN</a>
    </li>
    <li className="lists">
      <a href="/hospitalLoginPage" className="link">HOSPITAL</a>
    </li>
    <li className="lists">
      <a href="/bloodBankLoginPage" className="link">BLOOD BANK</a>
    </li>
 
 
    <li className="lists">
      <a href="/donorSignUpPage" className="link">DONOR</a>
    </li>
    <li className="lists">
      <a href="/adminSignUpPage" className="link">ADMIN</a>
    </li>
    <li className="lists">
      <a href="/hospitalSignUpPage" className="link">HOSPITAL</a>
    </li>
    <li className="lists">
      <a href="/bloodBankSignUpPage" className="link">BLOOD BANK</a>
    </li>
    <form onSubmit={handleSubmit}>
              <h2>{props.page}</h2>
              {currentForm.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === InputType .TEXT && (
                <input placeholder={field.placeholder} type="text" id={field.name} name={field.name} value={formValues[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                />)}
              {field.type === InputType.PASSWORD && (
                <input placeholder={field.placeholder} type="password" id={field.name} name={field.name} value={formValues[field.name] || ''}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />)}
              {field.type ===  InputType.SELECT && (
                <select id={field.name} name={field.name} value={formValues[field.name] || ''} onChange={(e) => handleInputChange(field.name, e.target.value)}>
                {field.options.map((option) => (<option key={option} value={option}>{option}</option>))}</select>)}
              {field.type ===  InputType.DATE && (
                <input type="date" id={field.name} name={field.name} value={formValues[field.name] || ''} onChange={(e) => handleInputChange(field.name, e.target.value)}/>)}
              {field.type ===  InputType.TEXTAREA && (
                <textarea placeholder={field.placeholder} id={field.name} name={field.name} value={formValues[field.name] || ''}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}/>)}
              {errors[field.name] && <p className="error">{errors[field.name]}</p>}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
    </div>)}

  if (props.page === Page.DASHBOARD) {
    return (
      <div>
       <div className="maincontainer">
<button className="Logouthospital"><a href="/donorSignUpPage" className="link">Logout</a></button>
<div className="dashboardinfo">
<h3 className="finalheading">PERSONAL INFORMATION</h3>
  <ul>
  <div className="leftcolumn1">
<li className="list">
  NAME OF HOSPITAL <i className="fa fa-hospital icon-left8"></i><span className="innertext">hi</span>
  </li>
  </div>
  <div className="leftcolumn2">
  <li className="list">
 ADDRESS <i className="fas fa-map-marker-alt icon-left9"></i><span className="innertext">hi</span>
  </li>
  </div>
  <div className="rightcolumn1">
  <li className="list">
  TELEPHONE NUMBER <i className="fas fa-phone icon-left10"></i> <span className="innertext">hi</span>
  </li>
  </div>
  <div className="rightcolumn2">
  <li className="list">
  DISTRICT OF THE HOSPITAL <i className="fa fa-location-arrow icon-left11"></i> <span className="innertext">hi</span>
  </li>
  </div>
  </ul>
  </div>
  </div>
      </div>
    );
  }

  if (props.page === Page.NAVIGATION) {
    return (
      <ul className="sidebarnav">
      <h2 className="myac"> MY ACCOUNT </h2>
      <li className="lists">
        <a href="/hospitaldashboard" className="link"><i className="fas fa-info-circle"></i> HOSPITAL DASHBOARD</a>
      </li>
      <li className="lists">
        <a href="/hospitalbloodchart" className="link"><i className="fas fa-chart-bar"></i>BLOOD COUNT</a>
      </li>
      <li className="lists">
        <a href="/bloodbanksearch" className="link"><i className="fa fa-search"></i>BLOOD BANK SEARCH</a>
      </li>
      <li className="lists">
        <a href="/donorSignUpPage" className="link"><i className="fas fa-sign-out-alt"></i>LOGOUT</a>
      </li>
    </ul>
    );
  }

  if (props.page === Page.BLOODBANKSEARCH) {
    const tables = {
      [TableNames.BLOODBANKSEARCH]: {
        columns: ["DATE", "BLOOD BANK NAME", "BLOOD TYPE", "AMOUNT OF BLOOD"],
      },
    };
    const { columns } = tables[TableNames.BLOODBANKSEARCH];
    const rows = generateRows(TableNames.BLOODBANKSEARCH);

    function generateRows(tableName) {
      const rows = [];
      if (tableName === TableNames.BLOODBANKSEARCH) {
        const date_b = ["8th", "8", "9", "9"];
        const name_b = ["monaragala", "moratuwa"];
        const bloodtype_b = ["a"];
        const quantity_b = [1, 2, 3, 3];
        const numberofrows = 9;
        for (let i = 0; i < numberofrows; i++) {
          const row = {
            "DATE": date_b[i],
            "BLOOD BANK NAME": name_b[i],
            "BLOOD TYPE": bloodtype_b[i],
            "AMOUNT OF BLOOD": quantity_b[i],
          };
          rows.push(row);
        }
      }
    
      return rows;
    }
    return (
      <div>
     <div className="tablecover">
       
          
          <div>
            <Dropdown dropdown='districtdropdown' />
            <Dropdown dropdown='bloodtypedropdown' />
          </div>
        

        <table className="tablemain">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowindex) => (
              <tr key={rowindex}>
                {Object.values(row).map((cell, cellindex) => (
                  <td key={cellindex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
  }

  if (props.page === Page.HOSPITALBLOODCHART) {
    return (<div>{BloodCountChart()}</div>)
  }


}
function BloodCountChart() {
  const [bloodCounts, setBloodCounts] = useState([
    { name: "A+", count: 0 },
    { name: "A-", count: 0 },
    { name: "B+", count: 0 },
    { name: "B-", count: 0 },
    { name: "AB+", count: 0 },
    { name: "AB-", count: 0 },
    { name: "O+", count: 0 },
    { name: "O-", count: 0 },
  ]);

  function handleCountUpdate(index, value) {
    if (isNaN(value)) {
      value = 0;
    }
    const newValue = value < 0 ? 0 : value;

    setBloodCounts((prevState) =>
      prevState.map(
        (count, i) => (i === index ? { ...count, count: newValue } : count),
        console.log(bloodCounts),
        console.log(index),
        console.log(prevState),
        console.log(value)

      )
    );
  }
  
  return (
    <div className="borderbox">
      <p className="frequencytext">Frequency of blood group (In Pints) </p>
      <div className="Barchart">
        <BarChart       width={600}
      height={400}
      data={bloodCounts}
      barCategoryGap={18}
      barGap={9}
      border-radius={80}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
          <CartesianGrid stroke="white" strokeDasharray="1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" className="bar">
            {bloodCounts.map((bloodCount, index) => {
              const barColor = bloodCount.count > 2 ? "green" : "red";
              return <Cell key={index} fill={barColor}  />;
            })}
          </Bar>
        </BarChart>
        <p className="Bloodtypetext">Blood Type</p>
      </div>
      <div className="key">
        <div>
          <div className="circle green"></div>
          <p className="infoone">High</p>
        </div>
        <div>
          <div className="circle red"></div>
          <p className="infotwo">
            Low
          </p>
        </div>
      </div>
      
      <div className="IncrementDecrementButtons">

    <p className="bloodcount">Blood Count</p>
    
  {bloodCounts.map((bloodCountno, index) => (
    console.log(bloodCountno),
    <div key={index} >
      <span className="bloodtypes">{bloodCountno.name}</span>
      <input className="bloodlabels"
        type="number"
        step="0.01"
        value={bloodCountno.count}
        onChange={(e) =>
          handleCountUpdate(index, parseFloat(e.target.value))
        }
        onWheel={(e) => e.target.blur()}
      />
      </div>
   
  ))}
  <button className="submit" >Submit Changes</button>
</div>

</div>);}

function Dropdown(props) {
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  if (props.dropdown === DropDown.DISTRICTDROPDOWN) {
    const options = [
      "Colombo",
      "Gampaha",
      "Kalutara",
      "Kandy",
      "Matale",
      "Nuwara Eliya",
      "Galle",
      "Matara",
      "Hambantota",
      "Jaffna",
      "Kilinochchi",
      "Mannar",
      "Mullaitivu",
      "Vavuniya",
      "Puttalam",
      "Kurunegala",
      "Anuradhapura",
      "Polonnaruwa",
      "Badulla",
      "Monaragala",
      "Ratnapura",
      "Kegalle",
      "Trincomalee",
      "Batticaloa",
      "Ampara",
    ];

    return (
      <select
        className="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  if (props.dropdown === DropDown.BLOODTYPEDROPDOWN) {
    const options = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    return (
      <select
        className="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return null;
}

export default Hospital;