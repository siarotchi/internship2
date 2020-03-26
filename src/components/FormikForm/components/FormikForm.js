import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./formik.scss";
import InputForm from "./InputForm";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have a character")
    .max(20, "Must be shorter than 20")
    .required("Must enter yours FirstName"),
  name1: Yup.string()
    .min(1, "Must have a character")
    .max(20, "Must be shorter than 20")
    .required("Must enter yours LastName"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(50, "Must be shorter than 50")
    .required("Must enter an email"),
  pass: Yup.string()
    .min(8, "Must be longer than 8 simbols")
    .max(250, "Must be shorter than 250")
    .required("Must enter a password"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
  street: Yup.string()
    .min(10, "Must have min 10 character")
    .max(50, "Must be shorter than 50")
    .required("Must enter your Adress")
});

//Without Yup

// const validate = values => {
//   let errors = {};

//   if (values.name !== undefined) {
//     if (values.name.length < 1) {
//       errors.name = "Must have a character";
//     }
//     if (values.name.length > 20) {
//       errors.name = "Must be shorter than 20";
//     }
//     if (values.name.length === 0) {
//       errors.name = "Must enter yours FirstName";
//     }
//   }
// };

const FormikForm = ({ props }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          name1: "",
          name2: "",
          email: "",
          pass: "",
          birthday: "",
          male: "",
          phone: "",
          street: ""
        }}
        validationSchema={validationSchema}
      >
        {props => <InputForm {...props} />}
      </Formik>
    </>
  );
};

export default FormikForm;
