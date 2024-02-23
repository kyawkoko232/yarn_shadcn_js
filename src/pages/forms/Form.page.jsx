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
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-md shadow-xl rounded-lg p-5'>
        <h2 className='text-2xl font-bold mb-4'>Sign In</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {() => (
            <Form className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <label htmlFor='email' className='text-sm font-medium text-gray-600'>Email Address</label>
                <Field className='border rounded-md py-2 px-3 mt-1 w-full' type='email' name='email' id='email' />
                <ErrorMessage name='email' component='div' className='text-red-500 text-xs mt-1' />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='password' className='text-sm font-medium text-gray-600'>Password</label>
                <Field className='border rounded-md py-2 px-3 mt-1 w-full' type='password' name='password' id='password' />
                <ErrorMessage name='password' component='div' className='text-red-500 text-xs mt-1' />
              </div>

              <button className='bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-300' type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormPage;
