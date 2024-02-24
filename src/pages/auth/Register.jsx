import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Formik, Form, ErrorMessage} from 'formik';
import * as yup from "yup";
import { useRegisterMutation} from '../../store/service/endpoints/auth.endpoint'
import { Loader2 } from "lucide-react"
import { Link } from 'react-router-dom'






const Register = () => {

  const [fun, data] = useRegisterMutation();
  console.log(data)

  const initialValue  = {
    name : "",
    email : "",
    password : "",
    password_confirmation: "",


  }

  const validationSchema = yup.object({
    name: yup
    .string()
    .required("Name is required")
    .min(2,"Name should be longer than 2 letter"),
    email : yup
    .string()
    .required("Email is required")
    .email("Invalid Email Formant"),

    password : yup
    .string()
    .required("Password is required")
    .min(8, "Password should be 8 letters"),

    password_confirmation : yup
    .string()
    .required("Password confirm is required")
    .min(8, "Password should be 8 letters")
    .oneOf(
      [yup.ref("password"),null],
      "Password confirm must be same with password"
    ),
  });


  const handleSubmit = async (value) => {
    await fun(value);
  };


  return (
    <div className='max-w-md mx-auto'>
      <Card>
        <CardHeader className="flex flex-row text-primary justify-between">
          <CardTitle>Register</CardTitle>
          <CardDescription>
          <Link to="/register"> Already have an account?</Link>
           </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik 
          validationSchema={validationSchema}
          initialValues={initialValue}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={handleSubmit}

          >
            { ({handleBlur, handleChange, values, isSubmitting})=> (
                <>
                <Form className='space-y-5'>   


                <div className='space-y-2'>
                  <Label htmlFor="name"> name </Label>
                  <Input 
                  onBlur={handleBlur}
                  value={values.name}
                  onChange={handleChange}
                  type="text" name="name"  id="name" />
                  <ErrorMessage className='text-danger text-sm' component={"p"} name='name' />

                  </div>
                
                  <div className='space-y-2'>
                  <Label htmlFor="email"> Email Address</Label>
                  <Input 
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  type="email" name="email"  id="email" />
                  <ErrorMessage className='text-danger text-sm' component={"p"} name='email' />

                  </div>

                  <div className='space-y-2'>
                  <Label htmlFor="password">Password</Label>
                  <Input 
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  type="password" name="password"  id="password" />
                  <ErrorMessage className='text-danger text-sm' component={"p"} name='password'  />
                  </div>


                  <div className='space-y-2'>
                  <Label htmlFor="password_confirmation">Password Confirm</Label>
                  <Input 
                  onBlur={handleBlur}
                  value={values.password_confirm}
                  onChange={handleChange}
                  type="password" name="password_confirmation"  id="password_confirmation" />
                  <ErrorMessage className='text-danger text-sm' component={"p"} name='password_confirmation'  />
                  </div>

                  <div>
                  <Button disabled={isSubmitting} type="submit" className="w-full bg-basic"> 
                  Register { isSubmitting && <Loader2  className="ml-4 h-4 w-4 animate-spin" /> }</Button>
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

export default Register