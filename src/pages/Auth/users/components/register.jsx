import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserAuthRegisterSchema } from "@/lib/validations/AuthSchema";
import google from "@/assets/google.svg";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegisterMutation } from "@/store/apis/auth.api";
import { useLocation, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { toast } from "react-toastify";


const register = () => {
  const [register, { isLoading, error }] = useRegisterMutation()
  const location = useLocation();
  const from = location.state?.from || { pathname: "/auth/confirmation-template" };
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(UserAuthRegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    await register(values).unwrap().then((response) => {
      navigate(from, {replace:true})
    }).catch(error => {
      toast.error(error.data.message || error.message);
    })
  }
  return (
    <>
      <div className="w-full">
        <div className="lg:flex flex-col items-center">
          <div className="mt-5 mb-3 w-full">
            <h1 className="text-2xl font-semibold">Let's Get Started!</h1>
            <p className="text-base ">Join us to unlock exclusive benefits and start booking your hotel stays</p>
          </div>

          <div className="border my-2 border-black px-5 py-1 flex justify-between w-full  items-center rounded-xl">
            <img src={google} alt="" className="w-8 inline-block items-center" />
            <div className="mx-auto">
              <h1 className="text-base font-semibold">Sign up with Google</h1>
            </div>
          </div>

          <div class=" my-2 text-base  font-medium">or sign up with email</div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
              <div className="md:flex md:space-x-3">
                <div className="md:w-1/2 w-full">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="lg:w-1/2 w-full">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

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
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Mobile Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between items-center">
                <Button variant="outline" type="submit" disable={isLoading}>
                  Sign Up
                  <UserPlus className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default register;
