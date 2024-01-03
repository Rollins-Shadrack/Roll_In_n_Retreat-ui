import { EmailValidationSchema } from '@/lib/validations/AuthSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const index = () => {
    const form = useForm({
        resolver: yupResolver(EmailValidationSchema),
        defaultValues: {
            email:""
        },
        mode: "onSubmit"
    })

    async function onSubmit(values) {
        console.log(values)
    }
  return (
    <div className="flex flex-col justify-center items-center w-full">
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
            <Button type="submit">Recover</Button>
        </form>
      </Form>
    </div>
  );
}

export default index