import React from 'react'

export default function Dashboard(props) {
  let choice = props.value;
  let content ='';
  switch(choice){
    case 'donor':
      content=<div>
        <p>Name Of Donor :</p><span></span>
        <p>Date Of Birth:</p><span></span>
        <p>Donor Number:</p><span></span>
        <p>Address :</p><span></span>
        <p>Telephone :</p><span></span>
        <p>Blood Type :</p><span></span>
      </div>
    break;
    case 'admin':
    content=<div>
        <p>Name Of Admin :</p><span></span>
        
    </div>
    break;
    case 'hospital':
    content=<div>
        <p>Name Of Hospital:</p><span></span>
        <p>District The Hospital Is In:</p><span></span>
        <p>Telephone Number:</p><span></span>
        <p>Address :</p><span></span>
    </div>
    break;
    case 'bloodBank':
    content=<div>
        <p>Name Of Blood Bank:</p><span></span>
        <p>District The Blood Bank Is In:</p><span></span>
        <p>Telephone Number:</p><span></span>
        <p>Address :</p><span></span>
    </div>
    break;
  }
  return (
    <div>{content}</div>
  )
}
