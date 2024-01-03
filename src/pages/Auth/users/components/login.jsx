import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserAuthLoginSchema } from "@/lib/validations/AuthSchema";
import google from "@/assets/google.svg";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const login = () => {
  const form = useForm({
    resolver: yupResolver(UserAuthLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="my-5 w-full">
            <h1 className="text-2xl font-semibold">Welcome Back!</h1>
            <p className="text-base ">Sign in to make reservations and manage your hotel bookings.</p>
          </div>

          <div className="border border-black px-10 py-1 flex justify-between w-full  items-center rounded-xl">
            <img src={google} alt="" className="w-8 inline-block items-center" />
            <div className="mx-auto">
              <h1 className="text-base font-semibold">Continue with Google</h1>
            </div>
          </div>

          <div class="my-3 text-base  font-medium">or sign in with email</div>

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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between items-center">
                <Button type="submit">Login</Button>
                <Link to="/auth/forgot_password" className="font-medium">
                  Forgot Password
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
  );
};

export default login;
