
/*import React, { useState } from "react";

const Page = {
  DASHBOARD: "dashboard",
  NAVIGATION: "navigation",
  DONORPOINTS: "donorpoints",
  DONORHISTORY:"donorhistory",
  FAQ:"faq",
  LOCATION1: "location1",
  LOCATION2:"location2",
};

const TableNames = {
  DONORHISTORY: "donorhistory",
};

function Test (props) {

 
    if (props.page === Page.NAVIGATION) {
      return (
        <ul className="sidebarnav">
          <h2 className="myac"> MY ACCOUNT </h2>

          <li className="lists">
            <a href="/" 
             DONOR DASHBOARD className="link">
              <i className="fas fa-info-circle"></i> 
              Donor Dashboard 
            </a>
          </li>
          <hr className="navhr"/>
          <li className="lists">
            <a href="/Donorhistory" className="link">
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
            <a href="/SignUp" className="link">
            <i className="fas fa-sign-out-alt"></i>
              Logout</a>
          </li>
          <hr className="navhr"/>
        </ul>
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

    if (props.page === Page.LOCATION1) {
      const [selectedOption, setSelectedOption] = useState('');

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
    <div >
  
  </div>
  );
  };

export default Test;*/
