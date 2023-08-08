import React from "react";
import ContactPicker from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  currName,
  setCurrName,
  currContact,
  setCurrContact,
  currDate,
  setCurrDate,
  currTime,
  setCurrTime,
  handleSubmit
}) => {

  const handleChange = (evnt) => {
    const {name, value} = evnt.target;

    if(name === 'title'){
      setCurrName(value)
    }else if(name === 'date'){
      setCurrDate(value)
    }else if(name === 'time'){
      setCurrTime(value)
    }else if(name === 'contact'){
      setCurrContact(value)
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" name="title" value={currName} onChange={handleChange}/>
      <label htmlFor="date">Date: </label>
      <input type="date" id="date" name="date" min={getTodayString()} value={currDate} onChange={handleChange}/>
      <label htmlFor="time">Time: </label>
      <input type="time" id="time" name="time" value={currTime} onChange={handleChange}/>
      <label htmlFor="contact">Contact: </label>
      <ContactPicker contactList={contacts} value={currContact} id="contact" name='contact' handleChange={handleChange}/>
      <input type="submit"/>
    </form>
    </>
  );
};
