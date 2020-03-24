import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./formik.scss";
import Error from "./Error";
// import { ValidationSchema } from "./ValidationSchema";

const validationSchema = Yup.object().shape({
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
    .max(8, "Must be 8 numbers")
    .min(8, "Must be longer than 8 simbols")
});

const FormikForm = () => {
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
          phone: "+373 ",
          street: ""
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <form>
            <h2>Registration form</h2>
            <div className="form-main">
              <div className="input-row">
                <label htmlFor="name">FirstName</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your FirstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={touched.name && errors.name ? "has-error" : null}
                />
                <Error touched={touched.name} message={errors.name} />
              </div>
              <div className="input-row">
                <label htmlFor="name1">LastName</label>
                <input
                  type="text"
                  name="name1"
                  id="name1"
                  placeholder="Enter your LastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name1}
                  className={touched.name1 && errors.name1 ? "has-error" : null}
                />
                <Error touched={touched.name1} message={errors.name1} />
              </div>
              <div className="input-row">
                <label htmlFor="name2">NickName</label>
                <input
                  type="text"
                  name="name2"
                  id="name2"
                  placeholder="Enter your NickName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name2}
                  className={touched.name2 && errors.name2 ? "has-error" : null}
                />
                <Error touched={touched.name2} message={errors.name2} />
              </div>
              <div className="input-row">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter@email.any"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? "has-error" : null}
                />
                <Error touched={touched.email} message={errors.email} />
              </div>
              <div className="input-row">
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Enter your Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pass}
                  className={touched.pass && errors.pass ? "has-error" : null}
                />
                <Error touched={touched.pass} message={errors.pass} />
              </div>
              <div className="input-row">
                <label htmlFor="birthday">Date of Birth</label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birthday}
                />
              </div>
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
                <label htmlFor="name">Mobile</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  pattern="+[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="+373 000 000 00"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  className={touched.phone && errors.phone ? "has-error" : null}
                />
                <Error touched={touched.phone} message={errors.phone} />
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
                ></textarea>
              </div>

              <div className="input-row">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormikForm;
