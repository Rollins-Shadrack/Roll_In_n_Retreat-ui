import { EmailValidationSchema } from '@/lib/validations/AuthSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForgotPasswordMutation } from '@/store/apis/auth.api';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const index = () => {
  const [forgotPassword, { isLoading, error }] = useForgotPasswordMutation();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || { pathname: "/auth/forgot_password_template" };
    const form = useForm({
        resolver: yupResolver(EmailValidationSchema),
        defaultValues: {
            email:""
        },
        mode: "onSubmit"
    })

    async function onSubmit(values) {
      await forgotPassword(values).unwrap().then(() => {
        navigate(from, { replace: true });
        }).catch(error =>{
          toast.error(error?.message || error?.data?.message)
        })
    }
  return (
    <div className="flex flex-col justify-center items-center w-4/5">
      <div className="my-5  w-full">
        <h1 className="text-2xl font-semibold">Forgot Password?</h1>
        <p className="text-base ">Recover your account by resetting your password.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <Button type="submit" disable={isLoading}>Recover</Button>
        </form>
      </Form>
    </div>
  );
}

export default index