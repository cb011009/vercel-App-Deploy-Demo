/*import React, { useState  } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import "./BloodCountChart.css";



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


  function sendData(e){
    e.preventDefault();
    const newbloodBankcount={
     bloodCounts,

    }
    axios.post("http://localhost:8070/bloodBankcount/add",newbloodBankcount).then(()=>{
      alert("bloodBankcount added to the database")
    }).catch((err)=>{
      alert(err)
    })
    console.log(newbloodBankcount);

  }

  function handleCountUpdate(index, value) {
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
    <div>
        <form onSubmit={sendData}>
      <div className="buttons-container">
        <button className="btn1" >Search For Blood Banks</button>
        <button className="btn2">Back To Dashboard</button>
      </div>

      <h3>HOSPITAL BLOOD BANK</h3>
      <p className="freq">Frequency of blood group <br/> (In Pints) </p>
      <div className="Barchart">
        <BarChart width={800} height={400} data={bloodCounts}>
          <CartesianGrid strokeDasharray="5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" onClick={() => {}}>
            {bloodCounts.map((bloodCount, index) => {
              const barColor = bloodCount.count > 2 ? "green" : "red";
              return <Cell key={index} fill={barColor} />;
            })}
          </Bar>
        </BarChart>
      </div>
      <div className="key">
        <h4>Key</h4>
        <br />
        <div>
          <div className="circle green"></div>
          <p className="info one">Supply is stable</p>
        </div>
        <div>
          <div className="circle red"></div>
          <p className="info two">
            Supply is at a <br/> critical level
          </p>
        </div>
      </div>
      
      <div className="IncrementDecrementButtons">
  <p className="Bloodtype">Blood Type</p>
  <u>
    <h3 className="bloodcount">Blood Count</h3>
  </u>

  {bloodCounts.map((bloodCount, index) => (
    console.log(bloodCount),
    <div key={index}>
      <span>{bloodCount.name}</span>
      <input
        type="number"
        step="0.01"
        value={bloodCount.count}
        onChange={(e) =>
          handleCountUpdate(index, parseFloat(e.target.value))
        }
      />
    </div>
  ))}
  
</div>
<button className="btn3" type="submit" >Submit Changes</button>
</form>
</div>);}


export default BloodCountChart;*/
