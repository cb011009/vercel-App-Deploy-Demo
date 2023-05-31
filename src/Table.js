const TableNames = {
  DONORHISTORY: "DONOR HISTORY",
  DONORSEARCH: "DONOR SEARCH",
  BLOODBANKSEARCH: "BLOOD BANK SEARCH",
  DONORLOCATION:"DONOR LOCATION",
  BLOODBANKPENDING:"BLOOD BANK PENDING",
  BLOODBANKACCEPTED:"BLOOD BANK ACCEPTING",
  HOSPITALPENDING:"HOSPITAL PENDING",
  HOSPITALACCEPTED:"HOSPITAL ACCEPTING"
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
    [TableNames.BLOODBANKPENDING]: {
      columns: ["NAME OF BLOOD BANK", "TELEPHONE NUMBER", "LOCATION", "ACTION"],
    },
    [TableNames.BLOODBANKACCEPTED]: {
      columns: ["NAME OF BLOOD BANK", "TELEPHONE NUMBER", "LOCATION", "ACTION"],
    },
    [TableNames.BLOODBANKPENDING]: {
      columns: ["NAME OF HOSPITAL", "TELEPHONE NUMBER", "LOCATION", "ACTION"],
    },
    [TableNames.BLOODBANKPENDING]: {
      columns: ["NAME OF HOSPITAL", "TELEPHONE NUMBER", "LOCATION", "ACTION"],
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
       /* "ENTER BLOOD TYPE": 
       /*<Dropdown dropdown='bloodtypedropdown' />,*/

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
  else if (tableName === TableNames.BLOODBANKPENDING) {
    const name_b = ["bloodbank1", "bloodbank2", "bloodbank3"];
    const telephone_b = ["1212121212", "2323232323","1212121212"];
    const location_b = ["location1","location2","location3"]; 
    const acceptbtn_b=<button>ACCEPT</button>
    const declinebtn_b=<button>DECLINE</button>
    const numberofrows = 3;
    for (let i = 0; i < numberofrows; i++) {
      const row = {
        "NAME OF BLOOD BANK": name_b[i],
        "TELEPHONE NUMBER": telephone_b[i],
        "ADDRESS": location_b[i],
        "ACTION":acceptbtn_b,declinebtn_b,
      };
      rows.push(row);
    }
  }
 
  else if (tableName === TableNames.HOSPITALPENDING) {
    const name_b = ["hospital1", "hospital2", "hospital3"];
    const telephone_b = ["1212121212", "2323232323","1212121212"];
    const location_b = ["location1","location2","location3"]; 
    const acceptbtn_b=<button>ACCEPT</button>
    const declinebtn_b=<button>DECLINE</button>
    const numberofrows = 3;
    for (let i = 0; i < numberofrows; i++) {
      const row = {
        "NAME OF BLOOD BANK": name_b[i],
        "TELEPHONE NUMBER": telephone_b[i],
        "ADDRESS": location_b[i],
        "ACTION":acceptbtn_b,declinebtn_b,
      };
      rows.push(row);
    }
  }
  else if (tableName === TableNames.HOSPITALACCEPTED) {
    const name_b = ["hospital4", "hospital5", "hospital6"];
    const telephone_b = ["1212121212", "2323232323","1212121212"];
    const location_b = ["location1","location2","location3"]; 
    const acceptbtn_b=<button>ACCEPT</button>
    const declinebtn_b=<button>DECLINE</button>
    const numberofrows = 3;
    for (let i = 0; i < numberofrows; i++) {
      const row = {
        "NAME OF BLOOD BANK": name_b[i],
        "TELEPHONE NUMBER": telephone_b[i],
        "ADDRESS": location_b[i],
        "ACTION":acceptbtn_b,declinebtn_b,
      };
      rows.push(row);
    }
  }
  else if (tableName === TableNames.BLOODBANKACCEPTED) {
    const name_b = ["bloodbank1", "bloodbank2", "bloodbank3"];
    const telephone_b = ["1212121212", "2323232323","1212121212"];
    const location_b = ["location1","location2","location3"]; 
    const declinebtn_b=<button>DECLINE</button>
    const numberofrows = 3;
    for (let i = 0; i < numberofrows; i++) {
      const row = {
        "NAME OF BLOOD BANK": name_b[i],
        "TELEPHONE NUMBER": telephone_b[i],
        "ADDRESS": location_b[i],
        "ACTION":declinebtn_b,
      };
      rows.push(row);
    }
  }


  return rows;
}


export default Table;
