import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserProfileSchema } from "@/lib/validations/ProfileSchema";
import { genders } from "@/constants/data/market/profile";

const EditProfile = () => {
  const form = useForm({
    resolver: yupResolver(UserProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      gender: "",
      dob: "",
      homeAddress: {
        addressLine1: "",
        addressLine2: "",
        postalCode: "",
        townCity: "",
      },
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="">Edit Profile</Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-lg max-sm:w-full overflow-y-auto no-scrollbar z[9999]">
        <SheetHeader>
          <SheetTitle>Edit Basic Info</SheetTitle>
          <SheetDescription>We care about your data so we'll always keep it secure.</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="block mb-3">
              <FormField
                className="w-full"
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input name="firstName" placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="block mb-3">
              <FormField
                className="w-full"
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input name="lastName" placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="block mb-3">
              <FormField
                className="w-full"
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input name="email" type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="block mb-3">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Input name="dob" type="date" placeholder="Date of Birth" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="block mb-3">
              <FormField
                name="gender"
                control={form.control}
                render={({ field }) => (
                  <>
                    <FormItem className="">
                      <FormLabel>Gender</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          {genders &&
                            genders?.map((gender, idx) => (
                              <SelectItem key={idx} value={gender}>
                                {gender}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
            <div className="">
              <h6 className="text-sm font-medium">Home Address</h6>
              <div className="col-span-2 p-4 space-y-3 border-2 border-dashed">
                <FormField
                  control={form.control}
                  name="homeAddress.addressLine1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address Line 1</FormLabel>
                      <FormControl>
                        <Input name="homeAddress.addressLine1" placeholder="Address Line 1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="homeAddress.addressLine2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address Line 2</FormLabel>
                      <FormControl>
                        <Input name="homeAddress.addressLine2" placeholder="Address Line 2" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-row items-center justify-between">
                  <FormField
                    control={form.control}
                    name="homeAddress.postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postal Code</FormLabel>
                        <FormControl>
                          <Input name="homeAddress.postalCode" type="text" placeholder="Postal Code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="homeAddress.townCity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Town/City</FormLabel>
                        <FormControl>
                          <Input name="homeAddress.townCity" placeholder="Town/City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <SheetFooter className="mt-5">
              <Button type="submit">Save Changes</Button>
              <SheetClose asChild>
                <Button>Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default EditProfile;
