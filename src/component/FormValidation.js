
// import { Formik, Form, Field, ErrorMessage } from "formik"
// import React,{ Fragment } from "react"
// import * as yup from "yup"


// const FormValidation = () => {

//     const defaultValue = {
//         name: "",
//         email: "",
//         password: "",
//         gender: "",
//         termsAndCond: false,
//         TransportMode: "" // radio
//     }

//     const validationSchema = yup.object().shape({
//         name: yup.string().required("Please enter your name"),
//         email: yup.string().required("Please enter your email").email("please enter valid email"),
//         password: yup.string().required("please enter your password"),
//         gender: yup.string().required("please select gender"),
//         termsAndCond: yup.boolean().oneOf([true], "Please accept terms and conditons"),
//         TransportMode: yup.string().required("Please select transport mode")
//     })

//     const handleSubmit = (values) => {
//         console.log("values", values)
//     }


//     return (
//         <Fragment>
//             <div className="container">
//                 <div className="col-md-12 text-center mt-5">
//                     <h1>Form Validation with Formik and Yup Library</h1>

//                     <Formik initialValues={defaultValue}
//                         validationSchema={validationSchema}
//                         onSubmit={handleSubmit}
//                     >
//                         {({ values }) =>

//                             <Form>
//                                 <div className="col-md-12 mt-4">
//                                     <Field type="text" name="name" placeholder="Enter Your name" className="form-control" />
//                                     <p className="text-danger">
//                                         <ErrorMessage name="name" />
//                                     </p>
//                                 </div>
//                                 <div className="col-md-12 mt-4">
//                                     <Field type="text" name="email" placeholder="Enter Your Email" className="form-control" />
//                                     <p className="text-danger">
//                                         <ErrorMessage name="email" />
//                                     </p>
//                                 </div>
//                                 <div className="col-md-12 mt-4">
//                                     <Field type="text" name="password" placeholder="Enter Your password" className="form-control" />
//                                     <p className="text-danger">
//                                         <ErrorMessage name="password" />
//                                     </p>
//                                 </div>
//                                 <div className="col-md-12 mt-4">
//                                     <Field component="select" name="gender" placeholder="select your gender" className="form-control">
//                                         <option value="" disabled>Please select</option>
//                                         <option value="male">Male</option>
//                                         <option value="female">Female</option>
//                                     </Field>
//                                     <p className="text-danger">
//                                         <ErrorMessage name="gender" />
//                                     </p>
//                                 </div>

//                                 <div className="col-md-12 mt-4">
//                                     <label className="form-inline">
//                                         <Field type="checkbox" name="termsAndCond"></Field>
//                                         I accept terms and conditions
//                                     </label>
//                                     <p className="text-danger">
//                                         <ErrorMessage name="termsAndCond" />
//                                     </p>
//                                 </div>

//                                 <div className="col-md-12 mt-4">
//                                     <label>
//                                         <Field type="radio" name="TransportMode" value="bike">
//                                         </Field>
//                                         Bike
//                                     </label>
//                                     <label>
//                                         <Field type="radio" name="TransportMode" value="car">
//                                         </Field>
//                                         Car
//                                     </label>

//                                     <p className="text-danger">
//                                         <ErrorMessage name="TransportMode" />
//                                     </p>

//                                 </div>

//                                 <button className="btn btn-primary" type="submit">
//                                     Submit
//                                 </button>

//                             </Form>
//                         }
//                     </Formik>
//                 </div>
//             </div>
//         </Fragment>
//     )

// }

// export default FormValidation

import React from "react";
import './FormValidation.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required")
  });

  const handleSubmit = (values) => {
    console.log("Submitted:", values);
  };

  return (
    <div className="container">
      <div className="login-box">
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
