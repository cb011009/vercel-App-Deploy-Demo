
import React, { useState } from "react";

const Page = {
  LOGIN: 'login',
  SIGNUP: 'signup', 
  DASHBOARD: "dashboard",
  NAVIGATION: "navigation",
  HOSPITALPENDING: "hospitalpending",
  BLOODBANKPENDING:"bloodbankpending",
  HOSPITALACCEPTED:"hospitalaccepted",
  BLOODBANKACCEPTED: "bloodbankaccepted",
};

const InputType = {TEXT: 'text',PASSWORD: 'password',};

function Admin (props) {
 
  let UserName = '';
  let Password='';

  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  

  if (props.page === Page.LOGIN || props.page === Page.SIGNUP ) {
    const forms = [
      {
        formName: Page.SIGNUP,
        requiredFields: ['password', 'username'],
        fields: [
          { name: 'username',label:'Username', type:  InputType.TEXT, placeholder: 'Enter username' },
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
        if (!value) {
         if (fieldName === 'loginPassword') {
              return 'Password is required.';
          } else {
            return `${fieldName} is required.`;
          }
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
          console.log('Admin Login form submitted');
          for (const key in formValues) {
            if (formValues.hasOwnProperty(key)) {
              if (key === 'username') {UserName = formValues[key];}
              if (key === 'loginPassword') {Password= formValues[key];}}}
          console.log(UserName);
          console.log(Password);
        }
        else if (formName === Page.SIGNUP) {
          console.log('Admin Signup form submitted');
          for (const key in formValues) {
            if (formValues.hasOwnProperty(key)) {
              if (key === 'username') {UserName = formValues[key];}
              if (key === 'password') {Password= formValues[key];}}}
          console.log(UserName);
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
<button className="Logoutadmin">Logout</button>
<div className="dashboardinfo">
<h3 className="finalheading">PERSONAL INFORMATION</h3>
<ul>
<div className="leftcolumn1">
<li className="list">
 NAME <i className="fas fa-user icon-left6"></i><span className="innertext">hi</span>
</li>
</div>

<div className="admincolumn">
<li className="requestlist">
<span className="number">09</span><br/><i className="fas fa-bolt icon-left7"/>Number of pending hospital requests
</li>
<hr/>
<li className="requestlist">
<span className="number">90</span><br/><i className="fas fa-bolt icon-left7"/>Number of pending blood bank requests 
</li>
<hr/>
<li className="requestlist" >
<span className="number">80</span><br/><i className="fas fa-bolt icon-left7"/>Number of accepted hospital requests 
</li>
<hr/>
<li className="requestlist">
<span className="number">78</span><br/><i className="fas fa-bolt icon-left7"/>Number of accepted blood bank requests 
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
        <a href="/admindashboard" className="link">
        <i className="fas fa-info-circle"></i> 
          ADMIN DASHBOARD
        </a>
      </li>
      <li className="lists">
        <i className="fas fa-clock"></i> 
        <button>PENDING REQUESTS</button> 
       <ul>
          <li className="link">
           <i className="fas fa-hospital"></i>
          <a href="/hospitalpending" >HOSPITAL</a>
          </li>
          <li className="link">
          <i className="fas fa-medkit"></i>
          <a href="/bloodbankpending">BLOOD BANK</a>
          </li>
        </ul>
      </li>
      <li className="lists">
         <i className="fas fa-check-circle"></i> 
          <button>ACCEPTED REQUESTS</button>
       <ul>
          <li className="link">
          <i className="fas fa-hospital"></i>
          <a href="/hospitalaccepted" >HOSPITAL</a>
          </li>
          <li className="link">
          <i className="fas fa-medkit"></i>
          <a href="/bloodbankaccepted" >BLOOD BANK</a>
          </li>
        </ul>
      </li>
      <li className="lists">
        <a href="/SignUp" className="link">
        <i className="fas fa-sign-out-alt"></i>
        <a href="/donorSignUpPage" >LOG OUT </a>
        </a>
      </li>
    </ul>
  );
}
if(props.page === Page.HOSPITALACCEPTED ||props.page === Page.BLOODBANKPENDING||props.page === Page.BLOODBANKACCEPTED||props.page === Page.HOSPITALPENDING){
  const requestsTable = [
    {
      tableName: Page.HOSPITALACCEPTED,
   
      fields: [
      { name: 'hospital1', telephone:'0123123123',location:'location1'},
      { name: 'hospital2', telephone:'0123123123',location:'location1'},
    ],
    },
    {
      tableName: Page.HOSPITALPENDING,
      fields: [
        { name: 'hospital4', telephone:'0123123123',location:'location1'},
        { name: 'hospital3', telephone:'0123123123',location:'location1'},
     ],
    },
    {
      tableName: Page.BLOODBANKACCEPTED,
      fields: [
      { name: 'bloodBank1', telephone:'0123123123',location:'location1'},
      { name: 'bloodBank2', telephone:'0123123123',location:'location1'},
    ],
    },
    {
      tableName: Page.BLOODBANKPENDING,
      fields: [
        { name: 'bloodBank3', telephone:'0123123123',location:'location1'},
        { name: 'bloodBank4', telephone:'0123123123',location:'location1'},
    ],
    },
  ];
  const filteredTable = requestsTable.filter(request => request.tableName === props.page);
 
return(
  <div>
    <div>
   <h2>{props.page}</h2>
    {filteredTable[0].fields.length === 0 ? (
      <div>
      <div className="heading-row">
      <div className="heading">Name</div>
      <div className="heading">Telephone Number</div>
      <div className="heading">Location</div>
    </div>
      <p>No new requests</p>
      </div>
    ) : (
      <>
        <div className="heading-row">
          <div className="heading">Name</div>
          <div className="heading">Telephone Number</div>
          <div className="heading">Location</div>
        </div>
        {filteredTable.map((request, index) => (
          <div key={index}>
            {request.fields.map((field, fieldIndex) => (
              <div key={fieldIndex}>
                <div>{field.name}</div>
                <div>{field.telephone}</div>
                <div>{field.location}</div>
                {(props.page === Page.HOSPITALPENDING || props.page === Page.BLOODBANKPENDING) && (
                  <>
                    <button>Accept</button>
                    <button>Decline</button>
                  </>
                )}
                {(props.page !== Page.HOSPITALPENDING && props.page !== Page.BLOODBANKPENDING) && (
                  <button>Decline</button>
                )}
                <hr />
              </div>
            ))}
          </div>
        ))}
      </>
    )}
  </div>
 
  </div>
    
)


}

}
export default Admin;
