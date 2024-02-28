'use client'
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { yupResolver } from "@hookform/resolvers/yup";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { paymentCardSchema } from "@/lib/validations/ProfileSchema";

const PaymentCardForm = () => {
  const [homeAddress, setHomeAddress] = useState(false)
  const form = useForm({
    resolver: yupResolver(paymentCardSchema),
    defaultValues:{
      cardName:"",
      cardNumber:"",
      expiryDate:"",
      cvv:"",
      billingAddress: {
        addressLine1: "",
        addressLine2: "",
        postalCode: "",
        townCity: "",
      }
    },
    mode:"onSubmit",
  })

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <Sheet>
      <SheetTrigger className="inline-flex">Add more <Plus /></SheetTrigger>
      <SheetContent className="sm:max-w-lg max-sm:w-full overflow-y-auto no-scrollbar">
        <SheetHeader>
          <SheetTitle>Add Card</SheetTitle>
          <SheetDescription>
          Kindly add another card to your payment methods to ensure a seamless and reliable alternative during transactions
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <div className="block mb-3">
              <FormField
              className="w-full"
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Name</FormLabel>
                  <FormControl>
                    <Input name="cardName" placeholder="Card Name" {...field} />
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
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input name="cardNumber" placeholder="Card Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
            </div>

            <div className="flex flex-row items-center justify-between">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input name="expiryDate" type="date" placeholder="Expiry Date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input name="cvv" placeholder="Town/City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div onClick={() =>setHomeAddress(!homeAddress)} className="cursor-pointer w-full my-3 flex justify-center items-center py-3 border-2  border-gray-400 rounded-xl" variant={"ghost"}>{homeAddress ? "Cancel" : "Add Billing Address"}</div>
                {homeAddress && 
                <div className="">
                <h6 className="text-sm font-medium">Billing Address</h6>
              <div className="col-span-2 p-4 space-y-3 border-2 border-dashed">
                  <FormField
                    control={form.control}
                    name="billingAddress.addressLine1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address Line 1</FormLabel>
                        <FormControl>
                          <Input name="billingAddress.addressLine1" placeholder="Address Line 1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="billingAddress.addressLine2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address Line 2</FormLabel>
                        <FormControl>
                          <Input name="billingAddress.addressLine2" placeholder="Address Line 2" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
  
                  <div className="flex flex-row items-center justify-between">
                    <FormField
                      control={form.control}
                      name="billingAddress.postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postal Code</FormLabel>
                          <FormControl>
                            <Input name="billingAddress.postalCode" type="text" placeholder="Postal Code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
  
                    <FormField
                      control={form.control}
                      name="billingAddress.townCity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Town/City</FormLabel>
                          <FormControl>
                            <Input name="billingAddress.townCity" placeholder="Town/City" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
  
                </div>
              </div>
                }
                <Button>Submit</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default PaymentCardForm;
