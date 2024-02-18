import { UserConfirmation } from "@/lib/validations/AuthSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useConfirmUserMutation, useResetPasswordMutation } from "@/store/apis/auth.api";
import { useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

const Confirmation = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmUser, { isLoading, error }] = useConfirmUserMutation();
  const [resetPassword, { isLoading: loading, error: resetError }] = useResetPasswordMutation();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || { pathname: "/auth/users" };
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const email = queryParams.get("email");
  const form = useForm({
    resolver: yupResolver(UserConfirmation),
    defaultValues: {
      token: token || "",
      email: email || "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    if (token) {
      await confirmUser(values)
        .unwrap()
        .then(() => {
          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.data.message || error.message);
        });
    }
    if (email) {
      await resetPassword(values)
        .unwrap()
        .then((response) => {
          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.data.message || error.message);
        });
    }
  }
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="my-5 w-4/5">
          <h1 className="text-2xl font-semibold">Identity Confirmation</h1>
          <p className="text-sm">
            Thank you for registering with us. To complete the registration process, please set your password and confirm it below.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-4/5">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Password</FormLabel>
                  <FormControl className="relative">
                    <Input placeholder="Enter password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl className="relative">
                    <Input placeholder="Confirm Password" type={isPasswordVisible ? "text" : "password"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center">
              <Button variant="outline" type="submit" disabled={isLoading || loading}>
                Confirm
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Confirmation;
