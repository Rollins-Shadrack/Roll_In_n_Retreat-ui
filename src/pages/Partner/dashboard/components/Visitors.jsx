import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


const Visitors = () => {
    const data = [
      {
        time: "10 AM",
        yesterday: 300,
        today: 450,
        visitors: 2400,
      },
      {
        time: "1 PM",
        yesterday: 250,
        today: 400,
        visitors: 2210,
      },
      {
        time: "4 PM",
        yesterday: 180,
        today: 600,
        visitors: 2290,
      },
      {
        time: "7 PM",
        yesterday: 320,
        today: 550,
        visitors: 2000,
      },
      {
        time: "10 PM",
        yesterday: 400,
        today: 700,
        visitors: 2181,
      },
      {
        time: "11:59 PM",
        yesterday: 280,
        today: 600,
        visitors: 2500,
      },

    ];


  return (
    <Card className="bg-brandFog text-gray-600 m-0 p-0" style={{ margin: 0, padding: 0 }}>
      <CardHeader className="p-2 px-4">
        <CardTitle className="text-lg">Visitors Over Time</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart width={300} height={180} data={data} margin={{ left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="yesterday" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="today" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default Visitors