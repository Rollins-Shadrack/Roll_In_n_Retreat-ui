import Container from '@/components/Container'
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { newsletterCards } from '@/constants/data/market/landingpage';
import React, { Fragment } from 'react'

const Newsletter = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold lg:text-5xl text-brandSunset mb-4">Get Latest Updates</h4>
            <p className="text-base leading-none tracking-tight">
              Receive real-time notifications and information on the latest developments, news, and offerings
            </p>
            <div className="border border-brandSunset p-1 rounded-lg my-7">
              <div className="grid grid-cols-3 gap-2">
                <Input className="col-span-2 border-none" placeholder="Email address" />
                <Button className="bg-brandSunset">SubScribe Now</Button>
              </div>
            </div>
            <p className="text-base leading-none tracking-tight text-justify">
              Stay informed and connected with our. Whether it's exclusive promotions, upcoming events, or important announcements, this feature
              ensures you are always in the loop
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {newsletterCards.map((card, idx) => (
              <Fragment key={idx}>
                <Card className="bg-brandShell text-brandMidnight shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <span className="text-4xl font-extrabold ">{card.stats}</span> <br /> <span className="text-xl mt-2 mb-5">{card.title}</span>
                            </CardTitle>
                            <CardDescription className="text-brandFog">{ card.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Newsletter