"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BookingTable from "./BookingTable";
import TransactionsTable from "./TransactionsTable";
import { Button } from "@/components/ui/button";
import instagram from "@/assets/instagram.svg"
import facebook from "@/assets/facebook.svg";
import PaymentMethodsTab from "./PaymentMethodsTab";
import Preferences from "./Preferences";

const TabInfo = () => {
  return (
    <Card>
      <Tabs defaultValue="bookings" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="payments">Payment Methods</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="socials">Socials</TabsTrigger>
        </TabsList>

        <TabsContent value="bookings">
          <Card>
            <CardHeader>
              <CardTitle>My Bookings</CardTitle>
              <CardDescription>
                Effortlessly track and customize your booking details. Edit and manage your reservations confidently with ease.
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[400px] overflow-y-auto no-scrollbar">
              <BookingTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>My Transactions</CardTitle>
              <CardDescription>
                Effortlessly monitor and tailor your transaction details. Edit and confidently manage your reservations with ease under
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[400px] overflow-y-auto no-scrollbar">
              <TransactionsTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>My Payment Methods</CardTitle>
              <CardDescription>
                Effortlessly monitor and tailor your payment methods. Edit and manage your preferred payment options with confidence and convenience.
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[400px] overflow-y-auto no-scrollbar py-5">
              <PaymentMethodsTab />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>My Preferences</CardTitle>
              <CardDescription>
                Effortlessly track and customize your booking details. Edit and manage your reservations confidently with ease.
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[400px] overflow-y-auto no-scrollbar">
              <Preferences />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="socials">
          <Card>
            <CardHeader>
              <CardTitle>My social logins</CardTitle>
              <CardDescription>Link social profiles for easier access to your Open SaaS account.</CardDescription>
            </CardHeader>
            <CardContent className="max-h-[400px] overflow-y-auto no-scrollbar">
              <div className="flex justify-between items-center border-b-2 border-gray-400 py-5">
                <div className=" flex space-x-5 items-center">
                  <img src={instagram} alt="rollinscodes.com" className="w-12 h-12 object-cover " />
                  <p className="font-bold">Instagram</p>
                </div>
                <Button variant={"ghost"}>Connect</Button>
              </div>

              <div className="flex justify-between items-center border-b-2 border-gray-400 py-5">
                <div className=" flex space-x-5 items-center">
                  <img src={facebook} alt="rollinscodes.com" className="w-12 h-12 object-cover " />
                  <p className="font-bold">Facebook</p>
                </div>
                <Button variant={"ghost"}>Connect</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default TabInfo;
