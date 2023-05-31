import React,{useState}from 'react'

export const Validation= (fieldName, value) => {
    
    if (fieldName === "NIC") {
      if (value.trim() === "") {
        return "NIC Number is Required!";
      }
    } else if(fieldName === "username") {
      if (value.trim() === "") {
        return "Username is Required!";
      }
    } 
    else if (fieldName === "fullName") {
      if (value.trim() === "") {
        return "Full Name is Required!";
      }
    } 
    else if (fieldName === "dateOfBirth") {
      const selectedDate = new Date(value);
      if (isNaN(selectedDate.getTime())) {
        return "Please enter a valid date";
    }
     const currentDate = new Date();
     if (selectedDate > currentDate) {
     return "Date cannot be set in the future";
    }
    console.log(value)

    } else if (fieldName === "bloodType") {
      if (value.trim() === "") {
        return null;
      }
      console.log(value);
    }
    else if (fieldName === "gender") {
      if (value.trim() === "") {
        return null;
      }
      console.log(value);
    }
    else if (fieldName === "telephone") {
      if (value.length < 11) {
        return "Telephone Number should be 10 characters";
      }
      console.log(value)
    }
    else if (fieldName === "district") {
      if (value.trim() === "") {
        return "District is Required!";
      }
      
    }
    else if (fieldName === "password") {
      if (value.length < 6) {
        return "Password should be at least 6 characters";
      }
    }
  
    return "";
  };