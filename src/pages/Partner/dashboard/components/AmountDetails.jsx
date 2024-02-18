import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Paid Amount", value: 33520 },
  { name: "Unpaid Amount", value: 25120 },
  { name: "Promo code", value: 10300 },
  { name: "Card Amount", value: 11700 },
];
const COLORS = ["#90A3A7", "#23303D", "#935430", "#CBA688"];
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AmountDetails = () => {
  return (
    <Card className="bg-brandFog text-gray-600">
      <CardHeader className="p-2 px-4">
        <CardTitle className="text-lg">Amount Details</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <PieChart width={280} height={300}>
          <Pie data={data} cx={120} cy={100} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
            {data.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[data.indexOf(entry) % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default AmountDetails;
