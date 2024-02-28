import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { quickActions, staffStats, whatHappening } from '@/constants/data/dashboard/staff';
import { ArrowRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {staffStats.map((stat, idx) => (
          <Card key={idx} className="bg-brandFog border border-brandMidnight shadow-sm">
            <CardHeader className="text-center text-brandMidnight">
              <h3 className="font-bold text-2xl">{stat.number}</h3>
              <p className="font-medium text-base whitespace-nowrap">{stat.name}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
      <h4 className="text-brandSunset text-lg my-3 font-bold"> Quick Actions</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {quickActions.map((actions, idx) => (
          <Link to={actions.link} key={idx} className="mx-auto flex flex-col items-center justify-center space-y-2 ">
            <div className="h-[90px] w-[90px] rounded-full border-2 border-brandSunset bg-brandShell bg-opacity-40 text-brandSunset flex items-center justify-center relative">
              {React.createElement(actions.icon, { size: "40" })}
            </div>
            <p className="text-sm font-medium text-brandSunset">{actions.name}</p>
          </Link>
        ))}
      </div>
      <h4 className="text-brandSunset text-lg my-3 font-bold"> What's happening</h4>
      {whatHappening.map((happening, idx) => (
        <Card className="mb-3" key={idx}>
          <CardHeader className="py-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg text-brandMidnight">{happening.title}</CardTitle>
                <CardDescription>{happening.desc}</CardDescription>
              </div>
              <Link to={happening.link} className="flex items-center space-x-2">
                <p className="font-semibold">View</p>
                <ArrowRight />
              </Link>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default index