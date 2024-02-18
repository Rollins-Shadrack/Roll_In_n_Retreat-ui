import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserAuthLoginSchema } from "@/lib/validations/AuthSchema";
import google from "@/assets/google.svg";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useLoginMutation } from "@/store/apis/auth.api";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/features/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { toast } from "react-toastify";

const login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from || { pathname: "/" };
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(UserAuthLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    try {
      await login(values)
        .unwrap()
        .then((res) => {
          dispatch(setCredentials(res));
          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.data.message ||  error.message)
        });
    } catch (error) {
      toast.error(error.data.message || error.message);
    }
  }
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="my-5 w-full">
          <h1 className="text-2xl font-semibold">Welcome Back!</h1>
          <p className="text-sm ">Sign in to make reservations and manage your hotel bookings.</p>
        </div>

        <div className="border border-black px-5 py-1 flex justify-between w-full  items-center rounded-xl">
          <img src={google} alt="" className="w-6 inline-block items-center" />
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
                <FormItem className="relative">
                  <FormLabel>Password</FormLabel>
                  <FormControl className="relative">
                    <Input placeholder="Enter password" type={isPasswordVisible ? "text" : "password"} {...field} />
                  </FormControl>
                  {isPasswordVisible ? (
                    <EyeOff className="absolute top-8 right-2 cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                  ) : (
                    <Eye className="absolute top-8 right-2 cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center">
              <Button variant="outline" type="submit" disabled={isLoading}>
                Login
                <LogIn className="ml-2 h-4 w-4" />
              </Button>
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
