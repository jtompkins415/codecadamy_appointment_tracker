import React from "react";

const ContactPicker = ({contactList, handleChange, name, value}) => {
  return (
    <>
    <select onChange={handleChange} value={value} name={name}>
      <option value=''>No Contact Selected</option>
      {contactList.map((contact, idx) => (
        <option key={idx} value={contact.name}>{contact.name}</option>
      ))}
    </select>
    </>
  );
};

export default ContactPicker;
