import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowDownToLine } from 'lucide-react'
import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TotalRevenue = () => {
    const data = [
      {
        month: "January",
        revenue: 2400,
        amt: 2400,
      },
      {
        month: "February",
        revenue: 1398,
        amt: 2210,
      },
      {
        month: "March",
        revenue: 9800,
        amt: 2290,
      },
      {
        month: "April",
        revenue: 3908,
        amt: 2000,
      },
      {
        month: "May",
        revenue: 4800,
        amt: 2181,
      },
      {
        month: "June",
        revenue: 3800,
        amt: 2500,
      },
      {
        month: "July",
        revenue: 4300,
        amt: 2100,
      },
      {
        month: "August",
        revenue: 3000, 
        amt: 1800, 
      },
      {
        month: "September",
        revenue: 3500, 
        amt: 2800, 
      },
      {
        month: "October",
        revenue: 4200, 
        amt: 3200, 
      },
      {
        month: "November",
        revenue: 5000, 
        amt: 4000, 
      },
      {
        month: "December",
        revenue: 5800, 
        amt: 4800, 
      },
    ];

  return (
    <Card className="bg-brandFog text-gray-600">
      <CardHeader className="p-2 px-4">
        <div className=" flex items-center  justify-between">
          <CardTitle className="text-lg">Total Revenue</CardTitle>
          <div className="flex items-center">
            <ArrowDownToLine className="ml-3 w-6 h-6" /> Export
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              left: 0,
            }}
            barSize={20}>
            <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="revenue" fill="#23303D" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default TotalRevenue