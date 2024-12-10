import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("Must be filled"),
  number: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .min(3, "Minimum 3 digits")
    .max(50, "Maximum 50 digits")
    .required("Must be filled"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleForm = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name.trim().toLowerCase(),
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleForm}
      validationSchema={validationSchema}
    >
      <Form className={s.contactForm}>
        <label>
          Name
          <Field className={s.formInput} name="name" />
          <ErrorMessage className={s.inputErr} name="name" component="p" />
        </label>
        <label>
          Number
          <Field className={s.formInput} name="number" />
          <ErrorMessage className={s.inputErr} name="number" component="p" />
        </label>
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;