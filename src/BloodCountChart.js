/*import React, { useState  } from "react";
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
<button className="btn3" onClick={handleSubmit}>Submit Changes</button>
</div>);}
function handleSubmit() {
  axios.post('/api/blood-counts', bloodCounts)
    .then(response => {
      console.log('Data successfully submitted:', response.data);
    })
    .catch(error => {
      console.error('Error submitting data:', error);
    });
}


export default BloodCountChart;

/*<div className="IncrementDecrementButtons">
{bloodCounts.map((bloodCount, index) => (
  console.log(bloodCount),
  <div key={index}>
    <span>{bloodCount.name}</span>
    <button onClick={() => handleCountUpdate(index, bloodCount.count - 1 < 0 ? 0 : bloodCount.count - 1)}>-</button>
    <input
      type="string"
      value={bloodCount.count}              
      
    />
    <button onClick={() => handleCountUpdate(index, bloodCount.count + 1)}>+</button>
  </div>
))}
</div>*/
