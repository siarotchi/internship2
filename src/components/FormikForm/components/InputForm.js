import React from "react";
import FormikInput from "./FormikInput";
import { formFields } from "../constants";
import Error from "./Error";

const InputForm = ({ values, errors, touched, handleChange, handleBlur }) => {
  return (
    <form>
      <h2>Registration form</h2>
      <div className="form-main">
        {formFields.map(({ label, type, name, id, placeholder }) => (
          <FormikInput
            key={id}
            label={label}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            values={values[name]}
            errors={errors[name]}
            touched={touched[name]}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        ))}
        <div className="input-row">
          <label htmlFor="name">Gender</label>
          <select id="gender" name="gender">
            <option value={values.gender}>Male</option>
            <option value={values.gender}>Female</option>
            <option value={values.gender}>Animal</option>
            <option value={values.gender}>Alien</option>
          </select>
        </div>
        <div className="input-row">
          <label htmlFor="name">Addres</label>
          <textarea
            type="text"
            name="street"
            id="street"
            placeholder="Street"
            rows="10"
            cols="22"
            maxLength="50"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.street}
            className={touched.street && errors.street ? "has-error" : null}
          ></textarea>
          <Error touched={touched.street} message={errors.street} />
        </div>
        <div className="input-row">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
