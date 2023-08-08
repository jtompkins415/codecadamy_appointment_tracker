import React from "react";

export const ContactForm = ({
  currName,
  setCurrName,
  currPhoneNum,
  setCurrPhoneNum,
  currEmail,
  setCurrEmail,
  handleSubmit
}) => {

  const handleChange = (evnt) => {
    const {name, value} = evnt.target;

    if(name === 'name'){
      setCurrName(value)
    }else if(name === 'phoneNumber'){
      setCurrPhoneNum(value)
    }else if(name === 'email'){
      setCurrEmail(value)
    }

  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input 
      type="text" 
      id="name" 
      name="name" 
      value={currName} 
      onChange={handleChange}/>
      <label htmlFor="phoneNumber">Phone Number: </label>
      <input 
      type="tel" 
      id="phoneNumber" 
      name="phoneNumber"
      pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" 
      value={currPhoneNum} 
      onChange={handleChange}/>
      <label htmlFor="email">Email: </label>
      <input 
      type="email" 
      id="email" 
      name="email" 
      value={currEmail} 
      onChange={handleChange}/>
      <input type="submit" />
    </form>
    </>
  );
};