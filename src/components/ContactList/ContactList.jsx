import React from "react";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice"; 

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!filteredContacts.length) {
    return <p className={s.noContacts}>No contacts found.</p>; 
  }

  return (
    <ul className={s.contactList}>
      {filteredContacts.map((user) => (
        <li className={s.contactItem} key={user.id}>
          <Contact user={user} />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(ContactList); 
