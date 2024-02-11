import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Offers = () => {
  return (
    <Container className="py-10 bg-brandFog">
      <h4 className="text-xl font-bold lg:text-2xl text-brandSunset">Offers</h4>
      <p className="text-base text-brandShell mb-2">Promotions, deals, and special offers for you.</p>
      <div className="grid grid-cols lg:grid-cols-2 gap-5">
        <Card className="w-full bg-[url('https://media.istockphoto.com/id/1136247293/photo/child-with-mother-in-swimming-pool-holiday-resort.jpg?s=612x612&w=0&k=20&c=zAFudOmgoSbmvitRn-Xi1h1hyvhUyjF-OWWpkFidPS0=')] bg-cover">
          <CardHeader>
            <CardTitle className="lg:text-lg font-bold text-brandFog">Welcome the New Year with Exciting Escapades!</CardTitle>
            <CardDescription>Save 15% or more when you book and stay before May 1, 2024</CardDescription>
            <Button className="bg-brandSunset w-fit mt-3">Find Early 2024 Deals</Button>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2">
                <CardTitle className="lg:text-lg text-base  font-bold">Embark on Your Ultimate Getaway Adventure</CardTitle>
                <CardDescription className="lg:text-base text-xs">Browse properties offering long-term stays, many at reduced monthly rates</CardDescription>
                <Button className="bg-brandSunset w-fit mt-3">Find a stay</Button>
              </div>
              <img
                src="https://media.istockphoto.com/id/1300988656/photo/portrait-of-family-with-young-son-having-fun-on-summer-vacation-splashing-in-outdoor-swimming.jpg?s=612x612&w=0&k=20&c=mhsCBpbh1ddisHdcGef7HCMim8G2Hx5XThVYECScz9g=" className="rounded-lg"
                alt="rollinscodes.com"
              />
            </div>
          </CardHeader>
        </Card>
      </div>
    </Container>
  );
};

export default Offers;
