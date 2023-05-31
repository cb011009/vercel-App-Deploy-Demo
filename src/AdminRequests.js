
import React, { useState,useEffect,useRef} from "react";
import Navigation from "./Navigation";
import "./AdminRequests.css";

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

function AdminRequests (props) {
  const requestsRef = useRef(null);

  useEffect(() => {
    const headingRows = Array.from(requestsRef.current.querySelectorAll('.heading-row'));

    headingRows.forEach((row, index) => {
      setTimeout(() => {
        row.style.opacity = 1;
        row.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, []);
 
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
        { name: 'hospital4', telephone:'0123123123',location:'location1 '},
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
        { name: 'bloodBank3', telephone:'0123123123',location:'This is a long text that should stay inside its container.This is a long text that should stay inside its container.This is a long text that should stay inside its container.'},
        { name: 'bloodBank4', telephone:'0123123123',location:'location1'},
    ],
    },
  ];
  const filteredTable = requestsTable.filter(request => request.tableName === props.page);
 
return(
  <div className="RequestContainer">
    <div className="sidenav"><span><Navigation user="admin"/></span></div>
    <div className="requests" ref={requestsRef}>
   <h2>{props.page}</h2>
    {filteredTable[0].fields.length === 0 ? (
      <div >
      <div className="heading-row">
      <div className="heading">Name</div>
      <div className="heading">Telephone Number</div>
      <div className="heading">Location </div>
      <div className="heading">Action</div>
    </div>
      <p>No new requests</p>
      </div>
    ) : (
      <>
        {/*<div className="heading-row">
          <div className="heading">Name</div>
          <div className="heading">Telephone Number</div>
          <div className="heading">Location</div>
          <div className="heading">Action</div>
    </div>*/}
        {filteredTable.map((request, index) => (
          <div key={index}>
            {request.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="heading-row">
                <div><div className="heading">NAME</div><div className="heading2">NAME</div></div>
                <div><div className="heading">TELEPHONE NUMBER</div><div className="heading2">NAME</div></div>
                <div><div className="heading">ADDRESS</div><div className="address">{field.location}</div></div>
                {(props.page === Page.HOSPITALPENDING || props.page === Page.BLOODBANKPENDING) && (
                  <div>
                    <div className="heading">ACTION:</div>
                    <div className="adminButtons"><button className="accept">Accept</button><span>/</span>
                    <button className="decline">Decline</button></div>
                  </div>
                )}
                {(props.page !== Page.HOSPITALPENDING && props.page !== Page.BLOODBANKPENDING) && (

                 <div>
                    <div className="heading">ACTION:</div>
                    <div className="adminButtons">
                    <button className="decline">Decline</button></div>
                 </div>
                )}
                
                {/*<div><div className="heading">NAME:</div><div>{field.name}</div></div>
                <div><div className="heading">TELEPHONE NUMBER:</div><div>{field.telephone}</div></div>
                <div><div className="heading">ADDRESS:</div><div className="addressText">{field.location}</div></div>
                {(props.page === Page.HOSPITALPENDING || props.page === Page.BLOODBANKPENDING) && (
                  <div>
                    <div className="heading">ACTION:</div>
                    <div className="adminbutton"><button className="accept">Accept</button><span>/</span>
                    <button className="decline">Decline</button></div>
                  </div>
                )}
                {(props.page !== Page.HOSPITALPENDING && props.page !== Page.BLOODBANKPENDING) && (

                  <div>
                    <div className="heading">ACTION:</div>
                    <button className="decline" >DECLINE</button>
                  </div>
                )}*/}
               
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
export default AdminRequests;
