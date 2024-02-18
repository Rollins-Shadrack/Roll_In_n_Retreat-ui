import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { staffCounts } from "@/constants/data/partnerOnboarding";
import { cn } from "@/lib/utils";
import { AdditionalOnBoardingDataSchema } from "@/lib/validations/PartnerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff, Send, Square } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { recaptchaSiteKey } from "@/constants/globalConstants";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useConfirmPartnerMutation } from "@/store/apis/auth.api";
import { toast } from "react-toastify";

const Profile = () => {
  const [confirmPartner, { isLoading, error }] = useConfirmPartnerMutation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || { pathname: "/onboard/login" };
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const form = useForm({
    resolver: yupResolver(AdditionalOnBoardingDataSchema),
    defaultValues: {
      token: token || "",
      staffCount: "",
      password: "",
      partnerAddress: {
        addressLine1: "",
        postalCode: "",
      },
      capVal: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    await confirmPartner(values)
      .unwrap().then((response) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.data.message || error.message);
      });
  }
  return (
    <div className={cn("w-4/5 mx-auto")}>
      <div className="">
        <div className="flex flex-col space-y-4 items-center justify-center mb-5">
          <p className="text-2xl font-bold text-black">Complete Your Business Profile</p>
          <p className="text-sm text-gray-500">Provide essential details about your staff count and location.</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="staffCount"
              render={() => (
                <FormItem>
                  <FormLabel>Staff Count</FormLabel>
                  <FormField
                    control={form.control}
                    name="staffCount"
                    render={({ field }) => {
                      return (
                        <RadioGroup
                          className="grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 gap-4"
                          value={field.value}
                          onValueChange={field.onChange}>
                          {staffCounts.map((item) => (
                            <div key={item.id}>
                              <RadioGroupItem value={item.name} id={`${item.id}-staff-count`} className="peer sr-only" />
                              <Label
                                htmlFor={`${item.id}-staff-count`}
                                className="flex flex-col items-center gap-4 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                <Square className="h-6 w-6" />
                                {item.label}
                                <span className="text-sm text-gray-500">{item.range}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      );
                    }}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-5 my-3">
              <FormField
                control={form.control}
                name="partnerAddress.addressLine1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your street address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="partnerAddress.postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your postal code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="my-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Password</FormLabel>
                    <FormControl className="relative">
                      <Input placeholder="Enter your Password" {...field} type={isPasswordVisible ? "text" : "password"} />
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
            </div>
            <div className="mb-3">
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
            </div>
            <Button variant="outline" className="px-5 bg-black text-white">
              Submit <Send className="h-4 w-4 ml-3" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
