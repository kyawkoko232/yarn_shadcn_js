import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from "yup";
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../store/service/endpoints/auth.endpoint';





const Login = () => {

  const [fun, { data, error }] = useLoginMutation();
  console.log(data)
  const initialValue = {
    email: "",
    password: "",
  }

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Formant"),

    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password should be 4 letters"),
  })

  const handleSubmit = async (value, action) => {
    await fun(value);
    action.reset
  }


  return (
    <div className='max-w-md mx-auto'>
      <Card>
        <CardHeader className="flex flex-row text-primary justify-between">
          <CardTitle>Sign in</CardTitle>
          <CardDescription><Link to="/register"> Do not have an account yet? </Link></CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValue}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ handleBlur, handleChange, values, isSubmitting }) => (
              <>
                <Form className='space-y-5'>
                  <div className='space-y-2'>
                    <Label htmlFor="email"> Email Address</Label>
                    <Input
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      type="email" name="email" id="email" />
                    <ErrorMessage className='text-danger text-sm' component={"p"} name='email' />

                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      type="password" name="password" id="password" />
                    <ErrorMessage className='text-danger text-sm' component={"p"} name='password' />
                  </div>

                  <div>
                    {error && (
                      <div className='text-red-500'>
                         {JSON.stringify(error.data.message)}
                      </div>
                    )}
                  </div>


                  <div>
                    <Button disabled={isSubmitting} type="submit" className="w-full bg-basic">
                      Login {isSubmitting && <Loader2 className="ml-4 h-4 w-4 animate-spin" />} </Button>
                  </div>

                </Form>
              </>
            )
            }
          </Formik>
        </CardContent>
        <CardFooter>

        </CardFooter>
      </Card>


    </div>
  )
}

export default Login