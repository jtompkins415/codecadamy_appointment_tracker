import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [contactsList, setContactsList] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  function handleNewContact(name, phoneNumber, email){
    setContactsList((cData) => ([
      ...cData,
      {
        name:name,
        phoneNumber: phoneNumber,
        email: email
      }
    ]));
  };

  function handleNewAppointment(name, contact, date, time){
    setAppointmentsList((aData) => ([
      ...aData,
      {
        name:name,
        contact:contact,
        date: date,
        time: time
      }
    ]));
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contactsList={contactsList} handleNewContact={handleNewContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointmentsList={appointmentsList} contactsList={contactsList} handleNewAppointment={handleNewAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
