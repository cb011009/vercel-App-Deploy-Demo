import React,{useState}from 'react'
import AdminPendingRequests from './AdminPendingRequests';

export default function Requests(props) {
  let request=props.request;
  let user=props.user;
  let pendingH = props.pendingH;
  let pendingBB = props.pendingBB;
  let acceptedH = [];
  let acceptedBB =[];
  
  const [newAcceptedBB, setNewAcceptedBB] = useState(acceptedBB);
  const [newAcceptedH, setNewAcceptedH] = useState(acceptedH);
 

  const handleBloodBankAccept = (index) => {
    const acceptedRequest = pendingBB[index];
    setNewAcceptedBB([...newAcceptedBB, acceptedRequest]);

    props.removePendingBBItem(index);
  };

  const handleBloodBankDecline = (index) => {
    const updatedAcceptedBB = [...newAcceptedBB];
    updatedAcceptedBB.splice(index, 1);
    setNewAcceptedBB(updatedAcceptedBB);
  };
  
  

  const handleHospitalAccept = (index) => {
    const acceptedRequest = pendingH[index];
    setNewAcceptedH([...newAcceptedH, acceptedRequest]);

    props.removePendingHItem(index);
  };

  
  const handleHospitalDecline = (index) => {
    const updatedAcceptedH = [...newAcceptedH];
    updatedAcceptedH.splice(index, 1);
    setNewAcceptedH(updatedAcceptedH);
  };

 

  console.log(newAcceptedBB);
 
  return (
    <div>
     <ul >
      <li><a href='/HospitalPendingRequests'>View Hospital Pending Requests</a></li>
      <li><a href='/BloodBankPendingRequests'>View Blood Bank Pending Requests</a></li>
      <li><a href='/BloodBankAcceptedRequests'>View Blood Bank Accepted Requests</a></li>
      <li><a href='/HospitalAcceptedRequests'>View Hospital Accepted Requests</a></li>
      </ul>

      {request === 'pending' && (
   <div>
    <div className='requestsContainer'>
      <div className='item'>Name Of {user}</div>
      <div className='item'>Telephone Number</div>
      <div className='item'>Address</div>
      <div className='item'>Action</div>
    </div>
    {user === 'bloodBank' ? (
        pendingBB.length > 0 ? (
          pendingBB.map((array, index) => (
            <div className='requestsContainer' key={index}>
               <div className='item'>{array.nameOfBB}</div>
               <div className='item'>{array.telephoneNum}</div>
               <div className='item'>{array.location}</div>
               <div className='item'>
                <button onClick={() => handleBloodBankAccept(index)} >Accept</button>
                <button onClick={() => props.removePendingBBItem(index)}>Decline</button>
              </div>
            </div>
          ))
        ) : (
          <div className='requestsContainer'>
            <div className='item'>No New Requests</div>
          </div>
        )
    ) : (
     
      pendingH.length > 0 ? (
        pendingH.map((array, index) => (
          <div className='requestsContainer' key={index}>
            <div className='item'>{array.nameOfH}</div>
            <div className='item'>{array.telephoneNum}</div>
            <div className='item'>{array.location}</div>
            <div className='item'>
              <button onClick={() => handleHospitalAccept(index)}>Accept</button>
              <button onClick={() => props.removePendingHItem(index)}>Decline</button>
            </div>
          </div>
        ))
      ) : (
        
          <div className='requestsContainer'>
            <div className='item'>No New Requests</div>
          </div>
        
      )
    )}
  </div>
)}
{/*The following code will display the accepted table in the same page as the pending requests table*/}
{request === 'pending' && (
   <div>
    <div className='requestsContainer'>
      <div className='item'>Name Of {user}</div>
      <div className='item'>Telephone Number</div>
      <div className='item'>Address</div>
      <div className='item'>Action</div>
    </div>
    {user === 'bloodBank' ? (
       newAcceptedBB.length > 0 ? (
          newAcceptedBB.map((array, index) => (
            <div className='requestsContainer' key={index}>
               <div className='item'>{array.nameOfBB}</div>
               <div className='item'>{array.telephoneNum}</div>
               <div className='item'>{array.location}</div>
               <div className='item'>
             
                  <button onClick={() =>handleBloodBankDecline(index)} >Decline</button>
               </div>
            </div>
          ))
        ) : (
          <div className='requestsContainer'>
            <div className='item'>No New Requests</div>
          </div>
        )
    ) : (
     
      newAcceptedH.length > 0 ? (
        newAcceptedH.map((array, index) => (
          <div className='requestsContainer' key={index}>
            <div className='item'>{array.nameOfH}</div>
            <div className='item'>{array.telephoneNum}</div>
            <div className='item'>{array.location}</div>
            <div className='item'>
              <button onClick={() => handleHospitalDecline(index)}>Decline</button>
            </div>
          </div>
        ))
      ) : (
        
          <div className='requestsContainer'>
            <div className='item'>No New Requests</div>
          </div>
        
      )
    )}
  </div>
)}
{/*The code ends here*/}

{request === 'accepted' && (
  <div>
    <div className='requestsContainer'>
      <div className='item'>Name Of {user}</div>
      <div className='item'>Telephone Number</div>
      <div className='item'>Address</div>
      <div className='item'>Action</div>
    </div>
    {user === 'bloodBank' ? (
     newAcceptedBB.length > 0 ? (
     newAcceptedBB .map((array, index) => (
          <div className='requestsContainer' key={index}>
            <div className='item'>{array.nameOfBB}</div>
            <div className='item'>{array.telephoneNum}</div>
            <div className='item'>{array.location}</div>
            <div className='item'>
               <button onClick={() => handleBloodBankDecline(index)} >Decline</button>
            </div>
          </div>
        ))
      ) : (
          <div className='requestsContainer'>
            <div className='item'>No New Requests</div>
          </div>
        
       
      )
    ) : (
      newAcceptedH.length > 0 ? (
        newAcceptedH.map((array, index) => (
          <div className='requestsContainer' key={index}>
            <div className='item'>{array.nameOfH}</div>
            <div className='item'>{array.telephoneNum}</div>
            <div className='item'>{array.location}</div>
            <div className='item'>
              
              <button onClick={() => handleHospitalDecline(index)}>Decline</button>
            </div>
          </div>
        ))
      ) : (
        
          <div className='requestsContainer'>
            <div className='item'>No New Requests</div>
          </div>
        
      )
    )}
  </div>
      )}


</div>             
       
  
  )
}
