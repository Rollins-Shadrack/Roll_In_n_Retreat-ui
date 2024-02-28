import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Pen, PencilLine } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { staffProfileSchema } from "@/lib/validations/ProfileSchema";
import FeaturedButton from "@/components/FeaturedButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const EditProfile = ({ user }) => {
  console.log(user)
  const form = useForm({
    resolver: yupResolver(staffProfileSchema),
    defaultValues: {
      bio: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      staffAddress: {
        addressLine1: "",
        addressLine2: "",
        postalCode: "",
        townCity: "",
      },
      emergency: {
        contactName: "",
        contactMobileNumber: "",
      },
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Sheet >
      <SheetTrigger>
        <div className="h-8 w-fit bg-brandMidnight flex items-center justify-center space-x-1 px-2 rounded-lg text-brandFog">
          <Pen className="w-5 h-5" />
          <p className="font-semibold">Edit</p>
        </div>
      </SheetTrigger>
      <SheetContent className="sm:max-w-lg max-sm:w-full overflow-y-auto no-scrollbar ">
        <SheetHeader>
          <SheetTitle>Update Your Profile Information:</SheetTitle>
          <SheetDescription>
            Make sure your profile information is accurate and up-to-date. Any changes you make will be reflected across the system.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input className="bg-brandShell bg-opacity-40 text-brandMidnight" placeholder="Enter First Name" {...field} />
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
                      <Input className="bg-brandShell bg-opacity-40 text-brandMidnight" placeholder="Enter Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Id</FormLabel>
                    <FormControl>
                      <Input className="bg-brandShell bg-opacity-40 text-brandMidnight" placeholder="Enter Email Address" {...field} />
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
                      <PhoneInput
                        {...field}
                        placeholder="Enter Mobile Number"
                        inputStyle={{ padding: "16px 40px", width: "100%", backgroundColor: "rgba(203, 166, 136, 0.4)" }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2 p-4 space-y-3 border-2 border-dashed">
              <FormField
                control={form.control}
                name="staffAddress.addressLine1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address Line 1</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-brandShell bg-opacity-40 text-brandMidnight"
                        name="staffAddress.addressLine1"
                        placeholder="Address Line 1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="staffAddress.addressLine2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address Line 2</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-brandShell bg-opacity-40 text-brandMidnight"
                        name="staffAddress.addressLine2"
                        placeholder="Address Line 2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-row items-center justify-between">
                <FormField
                  control={form.control}
                  name="staffAddress.postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postal Code</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-brandShell bg-opacity-40 text-brandMidnight"
                          name="staffAddress.postalCode"
                          type="text"
                          placeholder="Postal Code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="staffAddress.townCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Town/City</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-brandShell bg-opacity-40 text-brandMidnight"
                          name="staffAddress.townCity"
                          placeholder="Town/City"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <SheetTitle className="text-base">Emergency Contact</SheetTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="emergency.contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Name</FormLabel>
                    <FormControl>
                      <Input className="bg-brandShell bg-opacity-40 text-brandMidnight" placeholder="Contact Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emergency.contactMobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Mobile Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        placeholder="Enter Mobile Number"
                        inputStyle={{ padding: "16px 40px", width: "100%", backgroundColor: "rgba(203, 166, 136, 0.4)" }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FeaturedButton type="submit" name="Save" icon={PencilLine} />
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default EditProfile;
