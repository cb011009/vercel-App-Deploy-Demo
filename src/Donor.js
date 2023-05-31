import React,{useState} from 'react'

const Page = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  NAVIGATION: "navigation",
  DASHBOARD: "dashboard",
  DONORPOINTS:"donorpoints",
  FAQ:"faq",
  DONORHISTORY:"donorhistory",
  LOCATION1: "location1",
  LOCATION2:"location2",
};

const InputType = {
  TEXT: 'text',
  PASSWORD: 'password',
  SELECT: 'select',
  DATE: 'date',
  TEXTAREA: 'textarea',
};

const TableNames = {
  DONORHISTORY: "donorhistory",
};

export default function Donor(props) {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  
  let NIC = '';
  let FullName = '';
  let Gender='';
  let BloodType='A+';
  let BirthDate='';
  let Address='';
  let Telephone='';
  let Password='';

  if (props.page === Page.LOGIN || props.page === Page.SIGNUP ) {
    const forms = [
      {
        formName: Page.SIGNUP,
        requiredFields: ['nic', 'telephone', 'password', 'fullname', 'dateOfBirth'],
      fields: [
        { name: 'nic', label:'NIC',type: InputType.TEXT, placeholder: 'Enter NIC' },
        { name: 'fullname', label:'Full Name',type: InputType.TEXT, placeholder: 'Enter Full Name' },
        { 
          name: 'gender',
          label:'Gender',
          type: InputType.RADIO,
          placeholder: 'Gender',
          options: ['Male', 'Female'],
        },
        { name: 'dateOfBirth', type: InputType.DATE, placeholder: 'Enter Date of Birth' },
        { 
          name: 'bloodType',
          label:'Blood Type',
          type: InputType.SELECT,
          placeholder: 'Blood Type',
          options: ['A+', 'A-', 'O-', 'O+', 'AB+', 'AB-', 'B-', 'B+','unknown'],
        },
        { name: 'telephone', label:'Telephone Number', type: InputType.TEXT, placeholder: 'Enter Telephone Number' },
        { name: 'donorAddress',label:'Address', type: InputType.TEXTAREA, placeholder: 'Enter Address' },
        { name: 'password',label:'Password', type:InputType.PASSWORD, placeholder: 'Enter Password' },
      ],
      },
      {
        formName: Page.LOGIN,
        requiredFields: ['nic', 'loginPassword'],
      fields: [
        { name: 'nic', label:'NIC', type: InputType.TEXT, placeholder: 'Enter NIC' },
        { name: 'loginPassword',label:'Password', type: InputType.PASSWORD, placeholder: 'Enter Password' },
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
        }if (fieldName === 'nic' && (value.length !== 12 || !/^\d+$/.test(value))) {
          return 'NIC should be a 12-digit number.';
        }if (fieldName === 'telephone' && (value.length !== 10 || !/^\d+$/.test(value))) {
          return 'Telephone should be a 10-digit number.';
        }if (fieldName === 'dateOfBirth') {
          const currentDate = new Date();
          const dob = new Date(value);
    
          if (currentDate.getFullYear() - dob.getFullYear() < 18) {
            return 'You must be at least 18 years old to sign up.';
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
        if (formName === Page.SIGNUP) {
          console.log('Donor Signup form submitted');
          for (const key in formValues) {
             if (formValues.hasOwnProperty(key)) {
               if (key === 'nic') {NIC = formValues[key];}
               if (key === 'fullname') {FullName = formValues[key];}
               if (key === 'gender') {Gender = formValues[key];}
               if (key === 'dateOfBirth') {BirthDate = formValues[key]}
               if (key === 'bloodType') {BloodType = formValues[key];}
               if (key === 'telephone') {Telephone = formValues[key];}
               if (key === 'donorAddress') {Address = formValues[key];}
               if (key === 'password') {Password= formValues[key];} }}
               console.log(NIC);
               console.log(FullName);
               console.log(Gender);
               console.log(BirthDate);
               console.log(BloodType);
               console.log(Telephone);
               console.log(Address);
               console.log(Password);
             }
         else if (formName === Page.LOGIN) {
             console.log('Donor Login form submitted');
             for (const key in formValues) {
               if (formValues.hasOwnProperty(key)) {
                 if (key === 'nic') {NIC = formValues[key];}
                 if (key === 'loginPassword') {Password= formValues[key];}}}
             console.log(NIC);
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
              {field.type === InputType.RADIO && (
                <div>
                  {field.options.map((option) => (
                    <div key={option}>
                      <input type="radio" id={option} name={field.name} value={option} checked={formValues[field.name] === option}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}/>
                      <label htmlFor={option}>{option}</label>
                    </div>))}
                </div>
              )}
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
    </div>)
  }

if (props.page === Page.NAVIGATION) {
  return (
    <ul className="sidebarnav">
      <h2 className="myac"> MY ACCOUNT </h2>

      <li className="lists">
        <a href="/donordashboard" 
         DONOR DASHBOARD className="link">
          <i className="fas fa-info-circle"></i> 
          Donor Dashboard 
        </a>
      </li>
      <hr className="navhr"/>
      <li className="lists">
        <a href="/donorhistory" className="link">
        <i className="fas fa-history"></i>Donation History </a>
      </li>
      <hr className="navhr"/>
      <li className="lists">
        <a href="/donorpoints" className="link">
        <i className="fas fa-coins"></i>
          View Donor Points</a>
      </li >
      <hr className="navhr"/>
      <li className="lists">
        <a href="/FAQS" className="link">
        <i className="fas fa-question"></i>
          FAQS</a>
      </li>
      <hr className="navhr"/>
      <li className="lists">
        <a href="/location1" className="link">
        <i className="fas fa-map-marker-alt"></i> 
          Find Nearest Location</a>
      </li>
      <hr className="navhr"/>
      <li className="lists">
        <a href="/donorSignUpPage" className="link">
        <i className="fas fa-sign-out-alt"></i>
          Logout</a>
      </li>
      <hr className="navhr"/>
    </ul>
  );
}

if (props.page === Page.LOCATION1) {
  

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return (
      <div>
<div className="stepindicator">
<div className="step">
<div className="stepnumber1">1</div>
<div className="steptext1">Step 1</div>
</div>
<div className="stepline"></div>
<div className="step">
<div className="stepnumber2">2</div>
<div className="steptext2">Step 2</div>
</div>
</div>

<div className="containerlocation">
  <h1 className="heading1">FIND NEAREST BLOOD BANK</h1>
  <br/>
  <h3 className="heading2">SELECT THE NEAREST DISTRICT TO YOUR LOCATION</h3>
  <div class="dropdowncontainer">
  <div className="dropdowncontent">
    <select value={selectedOption} onChange={handleSelectChange} className="districtdrop" >
      <option value="1">Ampara</option>
      <option value="2">Anuradhapura</option>
      <option value="3">Badulla</option>
      <option value="4">Batticaloa</option>
      <option value="5">Colombo</option>
      <option value="6">Galle</option>
      <option value="7">Gampaha</option>
      <option value="8">Hambantota</option>
      <option value="9">Jaffna</option>
      <option value="10">Kalutara</option>
      <option value="11">Kandy</option>
      <option value="12">Kegalla</option>
      <option value="13">Kilinochchi</option>
      <option value="14">Kurunegala</option>
      <option value="15">Mannar</option>
      <option value="16">Matale</option>
      <option value="17">Matara</option>
      <option value="18">Moneragala</option>
      <option value="19">Mullaitivu</option>
      <option value="20">Nuwara Eliya</option>
      <option value="21">Polonnaruwa</option>
      <option value="22">Puttalam</option>
      <option value="23">Ratnapura</option>
      <option value="24">Trincomalee</option>
      <option value="25">Vavuniya</option>
    </select>
    <span className="custom-arrow"></span>
    <a href="/location2">
    <button className="nextbutton">NEXT</button>
    </a>
  </div>
</div>
</div>
</div>

);
  }
  if (props.page === Page.FAQ) {
      return (
        <div>
  FAQ
  </div>
 
);
    }

    if (props.page === Page.DASHBOARD) {
      return (
      <div>
        <div className="maincontainer">
        <button className="Logoutdonor">Logout</button>
        <div className="dashboardinfo">
        <h3 className="finalheading">Personal Information</h3>
        <ul>
        <div className="leftcolumn1">
        <li className="list">
         NAME <i className="fas fa-user icon-left1"></i><span className="innertext">hi</span>
        </li>
        </div>
        <div className="rightcolumn1">
        <li className="list">
         DATE OF BIRTH <i className="fas fa-calendar-alt icon-left2"></i><span className="innertext">hi</span>
        </li>
        </div>
        <div className="rightcolumn2">
        <li className="list">
         BLOOD TYPE<i className="fas fa-tint icon-left3"></i><span className="innertext">hi</span>
        </li>
        </div>
        <div className="middlecolumn1">
        <li className="list">
         TELEPHONE <i className="fas fa-phone icon-left4"></i> <span className="innertext">hi</span>
        </li>
        </div>
        <div className="middlecolumn2">
        <li className="list">
         ADDRESS <i className="fas fa-map-marker-alt icon-left5"></i><span className="innertext">hi</span>
        </li>
        </div>
        </ul>
        </div>
        </div>
        </div>
        );
        } 

        if (props.page === Page.DONORPOINTS) {
          return (
            <div>
            <div className="box">
             <br/>
             <p className="space"></p>
            <h1 className="heading">DONOR POINTS</h1>
            <hr className="hrtag"></hr>
            <p className="paragraph">DONOR POINTS EARNED ARE:</p>
            <p className="minibox">{props.points} pints</p>
            </div>
          </div>
          );
        }

        if (props.page === Page.DONORHISTORY) {
          const tables = {
            [TableNames.DONORHISTORY]: {
              columns: ["NIC", "DATE OF DONATION", "BLOOD TYPE", "QUANTITY OF BLOOD DONATED IN PINTS"],
            }
          };
          const { columns } = tables[TableNames.DONORHISTORY];
          const rows = generateRows(TableNames.DONORHISTORY);
      
          function generateRows(tableName) {
            const rows = [];
      
            if (tableName === TableNames.DONORHISTORY) {
              const nicValues = ["NIC1", "NIC2", "NIC3", "NIC4"];
              const dateValues = ["1/2/12", "8", "8/9/10", "9"];
              const bloodValues = ["a"];
              const quantityValues = [1, 2, 3, 3];
              const numRows = 20;
              for (let i = 0; i < numRows; i++) {
                const row = {
                  "NIC": nicValues[i],
                  "DATE OF DONATION": dateValues[i],
                  "BLOOD TYPE": bloodValues[i],
                  "QUANTITY OF BLOOD DONATED IN PINTS": quantityValues[i],
                };
                rows.push(row);
              }
            }
      
            return rows;
          }

          
    if (props.page === Page.DONORPOINTS) {
      return (
        <div>
        <div className="box">
         <br/>
         <p className="space"></p>
        <h1 className="heading">DONOR POINTS</h1>
        <hr className="hrtag"></hr>
        <p className="paragraph">DONOR POINTS EARNED ARE:</p>
        <p className="minibox">{props.points} pints</p>
        </div>
      </div>
      );
    }
      
          return (
            <div>
              <div className="tablecover">
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

        if (props.page === Page.FAQ) {
          return (
            <div>
      FAQ
      </div>
     
    );
        }
      
        if (props.page === Page.LOCATION2) {
          return (
            <div>
          <div className="stepindicators">
        <div className="steps">
          <div className="stepnumber01">1</div>
          <div className="steptext01">Step 1</div>
        </div>
        <div className="stepline"></div>
        <div className="steps">
          <div className="stepnumber02">2</div>
          <div className="steptext02">Step 2</div>
        </div>
      </div>
            <h1 className="heading01">THE LOCATION YOU HAVE SELECTED IS </h1><p className="districtprops">{props.disrtict} </p>
            <br/>
            <h3 className="heading02">THESE ARE THE BLOOD BANKS AVAILABLE: </h3>
    
              <a href="/location1">
              <button className="backbutton">BACK</button>
              </a>
            </div>
          );
        }

  return (
    <div>
    
     
    </div> 
    
  )
}
