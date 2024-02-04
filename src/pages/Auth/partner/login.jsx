import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserAuthLoginSchema } from "@/lib/validations/AuthSchema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useLoginPartnerMutation } from "@/store/apis/auth.api";
import ErrorMessageAlert from "@/components/ErrorMessageAlert";

const login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [login, { isLoading, error }] = useLoginPartnerMutation();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from || { pathname: "/dashboard" };
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
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-4/5">
      <div className="flex flex-col items-center">
        <div className="my-5 w-full flex justify-between items-center">
          <div className="">
            <h1 className="text-2xl font-semibold">Welcome Back!</h1>
            <p className="text-base ">Sign in to access your account</p>
          </div>
          <Link to="/onboard/register" className="text-lg font-semibold">
            Create Account
          </Link>
        </div>
        <ErrorMessageAlert error={error} />
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
