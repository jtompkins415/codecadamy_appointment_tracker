import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointmentsList, contactsList, handleNewAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currName, setCurrName] = useState('');
  const [currContact, setCurrContact] = useState('');
  const [currDate, setCurrDate] = useState('');
  const [currTime, setCurrTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   handleNewAppointment(currName, currContact, currDate, currTime);
   setCurrName('');
   setCurrContact('');
   setCurrDate('');
   setCurrTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        contacts={contactsList}
        currName={currName}
        setCurrName={setCurrName}
        currContact={currContact}
        setCurrContact={setCurrContact}
        currDate={currDate}
        setCurrDate={setCurrDate}
        currTime={currTime}
        setCurrTime={setCurrTime}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objectList={appointmentsList} />
      </section>
    </div>
  );
};