/*
import React from 'react';
import './Table.css';

function Table({ tableName, numRows }) {
  const tables = {
    "DONOR HISTORY": {
      columns: ["NIC", "DATE OF DONATION", "BLOOD TYPE", "QUANTITY OF BLOOD DONATED IN PINTS"],
    },
    "DONOR SEARCH": {
      columns: ["NIC OF DONOR","NAME OF DONOR", "TELEPHONE DETAILS", "ENTER BLOOD TYPE", "ENTER LOCATION OF BLOOD BANK", "ENTER AMOUNT OF BLOOD DONATED [IN PINTS]", "REWARD POINTS", "CONFIRM CHANGES"],
    },
    "BLOOD BANK SEARCH": {
      columns: ["DATE","BLOOD BANK NAME", "BLOOD TYPE", "AMOUNT OF BLOOD"],
    },
  };

  const tableData = tables[tableName];

  if (!tableData) {
    return <div>No table found</div>;
  }

  
  const { columns } = tableData;
  const rows = generateRows(tableName, numRows);

  
  return (
    <div>
      <div className="tablecover">
      <h2 className="tablename">{tableName}</h2>
      
      {(tableName === 'DONOR SEARCH' || tableName === 'BLOOD BANK SEARCH')  && (
     <div className='search'>
      <input
        type="text"
        placeholder="Search" />
        </div>
)}
      <table className="tablemain">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {tableName === 'DONOR SEARCH' && (
      <button className="submitbutton">Submit</button>
    )}
    </div>
  );
}

function generateRows(tableName) {
  const rows = [];

  switch (tableName) {

    case "DONOR HISTORY":
      const nicValues = ["NIC1", "NIC2", "NIC3", "NIC4"];
      const dateValues=["1/2/12","8","8/9/10","9"];
      const bloodValues=["a"];
      const quantityValues=[1,2,3,3];
      const numRows=20;
      for (let i = 0; i < numRows; i++) {
        const row = {
          "NIC": nicValues[i],
          "DATE OF DONATION": dateValues[i],
          "BLOOD TYPE":  bloodValues[i],
          "QUANTITY OF BLOOD DONATED IN PINTS": quantityValues[i],
        };
        rows.push(row);
      }
      break;

      case "DONOR SEARCH":

        const nameD = ["monaragala", "moratuwa"];
        const telephone = ["11"];
        const numberofRows = 2;
        const NIC=[""];
        const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
        const locationInput = <input type="text" />;
        const amountInput = <input type="number" min="0"/>;
        const reward = <input type="number"  min="0" />;
          
        for (let i = 0; i < numberofRows; i++) {
          const row = {
            "NIC OF DONOR": NIC[i],
            "NAME OF DONOR": nameD[i],
            "TELEPHONE DETAILS": telephone[i],
            "ENTER BLOOD TYPE": (
              <select>
                {bloodTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            ),
            "ENTER LOCATION OF BLOOD BANK": locationInput,
            "ENTER AMOUNT OF BLOOD DONATED [IN PINTS]": amountInput,
            "REWARD POINTS": reward,
            "ACTION": (
              <button>Confirm Changes</button>
            ),
          }; 
          rows.push(row);
        }
        
        console.log(rows);
        
        break;
        
      
        case "BLOOD BANK SEARCH":
      const date_b = ["8th", "8", "9", "9"];
      const name_b=["monaragala","moratuwa"];
      const bloodtype_b=["a"];
      const quantity_b=[1,2,3,3];
      const numberofrows=9;
      for (let i = 0; i < numberofrows; i++) {
        const row = {
          "DATE":date_b[i],
          "BLOOD BANK NAME": name_b[i],
          "BLOOD TYPE": bloodtype_b[i],
          "AMOUNT OF BLOOD": quantity_b[i]
        };
        rows.push(row);
      }
      break;
  }

  return rows;
}



export default Table;
*/

import React from 'react';
import './Table.css';
import Dropdown from './Dropdown';

const TableNames = {
  DONORHISTORY: "DONOR HISTORY",
  DONORSEARCH: "DONOR SEARCH",
  BLOODBANKSEARCH: "BLOOD BANK SEARCH",
  DONORLOCATION:"DONOR LOCATION",
};

function Table({ tableName, numRows }) {
  const tables = {
    [TableNames.DONORHISTORY]: {
      columns: ["NIC", "DATE OF DONATION", "BLOOD TYPE", "QUANTITY OF BLOOD DONATED IN PINTS"],
    },
    [TableNames.DONORLOCATION]:{
      columns: ["NAME OF BLOOD BANK","CONTACT DETAILS","ADDRESS"],
    },
    [TableNames.DONORSEARCH]: {
      columns: ["NIC OF DONOR", "NAME OF DONOR", "TELEPHONE DETAILS", "ENTER BLOOD TYPE", "ENTER LOCATION OF BLOOD BANK", "ENTER AMOUNT OF BLOOD DONATED [IN PINTS]", "REWARD POINTS", "ACTION"],
    },
    [TableNames.BLOODBANKSEARCH]: {
      columns: ["DATE", "BLOOD BANK NAME", "BLOOD TYPE", "AMOUNT OF BLOOD"],
    },
  };

  const tableData = tables[tableName];

  if (!tableData) {
    return <div>No table found</div>;
  }

  const { columns } = tableData;
  const rows = generateRows(tableName, numRows);



  return (
    <div>
      <div className="tablecover">
        <h2 className="tablename">{tableName}</h2>

        {(tableName === TableNames.DONORSEARCH) && (
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        )}
           {(tableName === TableNames.BLOODBANKSEARCH) && (
          <div>
            <Dropdown dropdown='districtdropdown' />
            <Dropdown dropdown='bloodtypedropdown' />
          </div>
        )}

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
      {tableName === TableNames.DONORSEARCH && (
        <button className="submitbutton">Submit</button>
      )}
    </div>
  );
}

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
  } else if (tableName === TableNames.DONORLOCATION) {
      const namebloodbank = [ "Narahempital Bloodbank"];
      const contact= ["0999999", "822222"];
      const address = ["a"];
      const numRows = 20;
      for (let i = 0; i < numRows; i++) {
        const row = {
          "NAME OF BLOOD BANK": namebloodbank[i],
          "CONTACT DETAILS":contact[i],
          "ADDRESS": address[i],
        };
        rows.push(row);
      }
  } else if (tableName === TableNames.DONORSEARCH) {
    const nameD = ["monaragala", "moratuwa"];
    const telephone = ["11"];
    const numberofRows = 2;
    const NIC = [""];
    const locationInput = <input type="text" />;
    const amountInput = <input type="number" min="0" />;
    const reward = <input type="number" min="0" />;

    for (let i = 0; i < numberofRows; i++) {
      const row = {
        "NIC OF DONOR": NIC[i],
        "NAME OF DONOR": nameD[i],
        "TELEPHONE DETAILS": telephone[i],
        "ENTER BLOOD TYPE": 
       <Dropdown dropdown='bloodtypedropdown' />,

        "ENTER LOCATION OF BLOOD BANK": locationInput,
        "ENTER AMOUNT OF BLOOD DONATED [IN PINTS]": amountInput,
        "REWARD POINTS": reward,
        "ACTION": (
          <button>Confirm Changes</button>
        ),
      };
      rows.push(row);
    }
  } else if (tableName === TableNames.BLOODBANKSEARCH) {
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


export default Table;
