import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const FormPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string().required('Email is required').email('Invalid Email format'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[!@#$%^&*])/,
        'Password must contain at least one special character (!@#$%^&*)'
      )
     
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='p-5'>
      FormPage
      <div className='max-w-md shadow-xl rounded-lg p-5'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {() => (
            <>
              <Form style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <label htmlFor='email'>Email Address</label>
                <Field className='border' type='email' name='email' id='email' />
                <ErrorMessage name='email' component='div' className='error' />

                <label htmlFor='password'>Password</label>
                <Field className='border' type='password' name='password' id='password' />
                <ErrorMessage name='password' component='div' className='error' />

                <button  type='submit'>Submit</button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormPage;
