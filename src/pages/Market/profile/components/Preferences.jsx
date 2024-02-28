'use client'

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { PreferencesSchema } from "@/lib/validations/ProfileSchema";

const Preferences = () => {
  const form = useForm({
    resolver: yupResolver(PreferencesSchema),
    defaultValues: {
      bookingEmail: false,
      bookingSms: false,
      bookingInApp: false,
      marketingEmail: false,
      marketingSms: false,
      marketingInApp: false,
      purchaseEmail: false,
      purchaseSms: false,
      purchaseInApp: false,
    },
    mode: "onSubmit",
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="mb-3">
          <h3 className="mb-3 text-lg font-medium">Bookings</h3>
          <div className="space-y-2 rounded-lg border">
            <FormField
              control={form.control}
              name="bookingEmail"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between  px-4 py-1">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Emails</FormLabel>
                    <FormDescription>Receive emails about new bookings, features, and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bookingSms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between  px-4 py-1">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">SMS</FormLabel>
                    <FormDescription>Receive sms about new bookings, features, and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bookingInApp"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between  px-4 py-1">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">In App</FormLabel>
                    <FormDescription>Receive in app about new bookings, features, and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-3 text-lg font-medium">Marketing</h3>
          <div className="space-y-2 rounded-lg border">
            <FormField
              control={form.control}
              name="marketingEmail"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between  px-4 py-1">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Emails</FormLabel>
                    <FormDescription>Receive emails about marketing and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marketingSms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between  px-4 py-1">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">SMS</FormLabel>
                    <FormDescription>Receive sms about marketing and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marketingInApp"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between  px-4 py-1">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">In App</FormLabel>
                    <FormDescription>Receive in app about marketing and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-3 text-lg font-medium">Purchase</h3>
          <div className="space-y-2 rounded-lg border">
            <FormField
              control={form.control}
              name="purchaseEmail"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between  px-4 py-1">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Emails</FormLabel>
                    <FormDescription>Receive emails about purchases and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="purchaseSms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between  px-4 py-1">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">SMS</FormLabel>
                    <FormDescription>Receive sms about purchases and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="purchaseInApp"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between  px-4 py-1">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">In App</FormLabel>
                    <FormDescription>Receive in app about purchases and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Preferences;
