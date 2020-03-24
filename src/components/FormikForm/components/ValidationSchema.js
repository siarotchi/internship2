import React from "react";
import * as Yup from "yup";
import "./formik.scss";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have a character")
    .max(250, "Must be shorter than 250")
    .required("Must enter a name"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(250, "Must be shorter than 250")
    .required("Must enter an email"),
  pass: Yup.string()
    .min(8, "Must be longer than 8 simbols")
    .max(250, "Must be shorter than 250")
    .required("Must enter an email"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required")
});

export default ValidationSchema;
