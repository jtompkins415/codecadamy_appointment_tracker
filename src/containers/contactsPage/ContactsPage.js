import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contactsList, handleNewContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [currName, setCurrName] = useState('');
  const [currPhoneNum, setCurrPhoneNum] = useState('');
  const [currEmail, setCurrEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    const duplicate = contactsList.some(contact => contact.name === currName)
    if(duplicate){
      setIsDuplicate(true);
    }
  }, [currName])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   
   if(!isDuplicate){
    handleNewContact(currName, currPhoneNum, currEmail)
    setCurrName('');
    setCurrPhoneNum('');
    setCurrEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props



  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        currName={currName}
        setCurrName={setCurrName} 
        currEmail={currEmail}
        setCurrEmail={setCurrEmail} 
        currPhoneNum={currPhoneNum}
        setCurrPhoneNum={setCurrPhoneNum}
        handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objectList={contactsList} />
      </section>
    </div>
  );
};
