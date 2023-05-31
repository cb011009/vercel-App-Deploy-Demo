/*import './BloodBankTable.css';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
export default function BloodBankTable(){
  const [searchInput, setSearchInput] = useState("");
  const [tableData, setTableData] = useState([
    { donorNumber: 1, name: "John", bloodType: "O+", location: "New York" },
    { donorNumber: 2, name: "Jane", bloodType: "AB-", location: "Los Angeles" },
    { donorNumber: 3, name: "Bob", bloodType: "A+", location: "Chicago" },
    { donorNumber: 4, name: "Alice", bloodType: "B-", location: "Houston" }
  ]);

  const handleSearchInputChange = event => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const filteredTableData = tableData.filter(item =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

    return (
      <div>
        <div className='search'>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search" 
        
        />
        
        </div>
   
        <div className="App">
          <table>
            <tr>
              <th>Donor Number</th>
              <th>Name Of Donor</th>
              <th>Telephone Details</th>
              <th>Enter Blood Type</th>
              <th>Enter Location Of Blood Bank</th>
              <th>Enter Amount Of Blood Donated</th>
              <th>Reward Points</th>
              <th>Enter Comments About The Donor</th>
            </tr>
            <tr>
                <td></td>
                <td>18</td>
                <td>F</td>
                <td><input type="text" name="Bloodtype" /></td>
                <td><input type="text" name="Location" /></td>
                <td><input type="text" name="Amtofblood" /></td>
                <td></td>
                <td><input type="text" name="Comments" /></td>
            </tr>
            </table>
    </div>
    </div>
  );
    
}*/