import React,{useState} from 'react'

import './Requests.css';
import Requests from './Requests';

export default function AdminPendingRequests(props) {
  const [pendingH, setPendingH] = useState([
    { location: 'Location 1', telephoneNum: '123-456-7890', nameOfH: 'Hospital 1' },
    { location: 'Location 2', telephoneNum: '987-654-3210', nameOfH: 'Hospital 2' },
    { location: 'Location 3', telephoneNum: '555-555-5555', nameOfH: 'Hospital 3' },
  ]);

  const [pendingBB, setPendingBB] = useState([
    { location: 'Location 1', telephoneNum: '123-456-7890', nameOfBB: 'Hospital 1' },
    { location: 'Location 2', telephoneNum: '987-654-3210', nameOfBB: 'Hospital 2' },
    { location: 'Location 3', telephoneNum: '555-555-5555', nameOfBB: 'Hospital 3' },
  ]);

  const removePendingHItem = (index) => {
    const updatedArray = [...pendingH];
    updatedArray.splice(index, 1);
    setPendingH(updatedArray);
  };


  const removePendingBBItem = (index) => {
    const updatedArray = [...pendingBB];
    updatedArray.splice(index, 1);
    setPendingBB(updatedArray);
  };

 return(
    <div>
      <Requests 
      user={props.user} request={props.requestType}
      pendingBB={pendingBB} removePendingBBItem={removePendingBBItem}
      pendingH={pendingH} removePendingHItem={removePendingHItem}
      />
    </div>
  
  )

}
 
