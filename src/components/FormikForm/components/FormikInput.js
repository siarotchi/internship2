import React from "react";
import Error from "./Error";

function FormikInput({ values, errors, touched, handleChange, handleBlur, label, type, name, id, placeholder }) {
  return (
    <div className="input-row">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values}
        className={touched && errors ? "has-error" : null}
      />
      <Error touched={touched} message={errors} />
    </div>
  );
}

export default FormikInput;
