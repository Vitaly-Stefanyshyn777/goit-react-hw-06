import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ user }) => {
  const dispatch = useDispatch();

  const handleDeleteContactUser = () => {
    dispatch(deleteContact(user.id));
  };

  return (
    <>
      <div>
        <p className={s.contactText}>{user.name}</p>
        <p className={s.contactText}>{user.number}</p>
      </div>
      <button className={s.contactBtn} type="button" onClick={handleDeleteContactUser}>
        Delete
      </button>
    </>
  );
};

export default Contact;