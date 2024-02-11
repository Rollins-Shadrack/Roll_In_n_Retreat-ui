import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ReactSelect from "@/components/ui/react-select";
import { useGetCitiesQuery } from "@/store/apis/cms.api";
import { useDebouncedCallback } from "use-debounce";
import { useOnboardMutation, useValidateBusinessNameMutation, useValidateEmailMutation } from "@/store/apis/auth.api";
import { Input } from "@/components/ui/input";
import { CheckCircle, Loader2, Send, XCircle } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { onBoardingSchema } from "@/lib/validations/PartnerSchema";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { recaptchaSiteKey } from "@/constants/globalConstants";
import ErrorMessageAlert from "@/components/ErrorMessageAlert";
import { useLocation, useNavigate } from "react-router-dom";

const register = () => {
  const [isBusinessValidating, setIsBusinessValidating] = useState(false);
  const [isBusinessValid, setIsBusinessValid] = useState(false);
  const [businessValidationErrorMessage, setBusinessValidationErrorMessage] = useState("");
  const [isEmailValidating, setIsEmailValidating] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [EmailValidationErrorMessage, setEmailValidationErrorMessage] = useState("");
  const { data: res, isLoading: isCitiesLoading } = useGetCitiesQuery();
  const [validateBusinessName] = useValidateBusinessNameMutation();
  const [validateEmail] = useValidateEmailMutation();
  const [onboard, { isLoading, error }] = useOnboardMutation();
  const location = useLocation();
  const from = location.state?.from || { pathname: "/auth/confirmation-template" };
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(onBoardingSchema),
    defaultValues: {
      businessName: "",
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      mobileNumber: "",
      capVal: "",
    },
    mode: "onSubmit",
  });

  const debounceValidateBusinessName = useDebouncedCallback(async (businessName) => {
    setIsBusinessValidating(true);
    const res = await validateBusinessName({ businessName, cityId: form.watch("city") });
    if (res.error) {
      setIsBusinessValidating(false);
      setBusinessValidationErrorMessage(res.error.message);
    } else if (res.data.hasOwnProperty("available")) {
      setIsBusinessValid(true);
      setBusinessValidationErrorMessage("");
    } else {
      setIsBusinessValid(false);
      setBusinessValidationErrorMessage(res.data);
    }
    setIsBusinessValidating(false);
  }, 1000);

  const debounceValidateEmail = useDebouncedCallback(async (email) => {
    setIsEmailValidating(true);
    const isEmail = /\S+@\S+\.\S+/.test(email);
    if (!isEmail) {
      setIsEmailValid(false);
      setEmailValidationErrorMessage("Invalid email address");
      setIsEmailValidating(false);
      return;
    }
    const res = await validateEmail({ email });
    if (res.error) {
      setIsEmailValid(false);
      setEmailValidationErrorMessage(res.error.message);
    } else if (res.data.hasOwnProperty("available")) {
      setIsEmailValid(true);
      setEmailValidationErrorMessage("");
    } else {
      setIsEmailValid(false);
      setEmailValidationErrorMessage(res.data);
    }
    setIsEmailValidating(false);
  }, 1000);

  async function onSubmit(values) {
    await onboard(values)
      .unwrap()
      .then(() => {
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className={cn("w-4/5 mx-auto")}>
      <div className=" ">
        <div className="flex flex-col space-y-4 items-center justify-center mb-5">
          <p className="text-2xl font-bold text-black">Tell us about your business</p>
          <p className="text-sm text-gray-500">Enter your business name and contact details</p>
        </div>
        <ErrorMessageAlert error={error} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        value={field.value}
                        onChange={(e) => {
                          form.setValue("email", e.target.value);
                          debounceValidateEmail(e.target.value);
                        }}
                      />
                    </FormControl>
                    {isEmailValidating && (
                      <div className="flex items-center space-x-2 mt-2 pt-2">
                        <Loader2 className="h-4 w-4 pt-2 animate-spin" />
                        <span className="text-muted-foreground text-base">Validating email...</span>
                      </div>
                    )}
                    {!isEmailValidating && EmailValidationErrorMessage && (
                      <div className="flex items-center space-x-2 mt-2 pt-2">
                        <XCircle className="h-6 w-6 text-red-500" />
                        <span className="text-red-500 text-xs">{EmailValidationErrorMessage}</span>
                      </div>
                    )}

                    {!isEmailValidating && isEmailValid && (
                      <div className="flex items-center space-x-2 mt-2 pt-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-green-500 text-xs">Email is valid</span>
                      </div>
                    )}
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
                      <PhoneInput
                        {...field}
                        placeholder="Enter Mobile Number"
                        // containerStyle={{ width: "100%" }}
                        inputStyle={{ padding: "16px 40px", width: "100%" }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="mt-3">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <ReactSelect
                          isLoading={isCitiesLoading}
                          options={res?.cities.map((city) => ({ label: city.name, value: city.id }))}
                          placeholder="Select your city"
                          onChange={(e) => {
                            form.setValue("city", e.value);
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={"Enter your business Name"}
                        value={field.value}
                        disabled={form.watch("city") === ""}
                        onChange={(e) => {
                          form.setValue("businessName", e.target.value);
                          debounceValidateBusinessName(e.target.value);
                        }}
                      />
                    </FormControl>
                    {isBusinessValidating && (
                      <div className="flex items-center space-x-2 mt-2 pt-2">
                        <Loader2 className="h-4 w-4 pt-2 animate-spin" />
                      </div>
                    )}
                    {!isBusinessValidating && businessValidationErrorMessage && (
                      <div className="flex items-center space-x-2 mt-2 pt-2">
                        <XCircle className="h-6 w-6 text-red-500" />
                        <span className="text-red-500 text-xs">{businessValidationErrorMessage}</span>
                      </div>
                    )}
                    {!isBusinessValidating && isBusinessValid && (
                      <div className="flex items-center space-x-2 mt-2 pt-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-green-500 text-xs">Business name is valid</span>
                      </div>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="capVal"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <ReCAPTCHA {...field} sitekey={recaptchaSiteKey} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} variant="outline" className="px-5 bg-black text-white">
              Submit <Send className="h-4 w-4 ml-3" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default register;
