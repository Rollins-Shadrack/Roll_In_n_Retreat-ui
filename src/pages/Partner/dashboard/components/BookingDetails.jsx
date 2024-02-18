import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownToLine, RefreshCcw } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { PureComponent } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const BookingDetails = () => {
  return (
    <Card className="bg-brandFog text-gray-600">
      <CardHeader className="p-2 px-4">
        <div className=" flex items-center  justify-between">
          <CardTitle className="text-lg flex">
            Booking Details{" "}
            <span className="text-sm flex items-center text-gray-400">
              <RefreshCcw className="w-5 h-5 mx-2" /> last updated 1m ago
            </span>
          </CardTitle>
          <Select>
            <SelectTrigger className="w-[140px] bg-transparent">
              <SelectValue className="text-xs" placeholder="Last 7 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter</SelectLabel>
                <SelectItem value="apple">Last 7 days</SelectItem>
                <SelectItem value="banana">Last 2 weeks</SelectItem>
                <SelectItem value="blueberry">Last 1 Month</SelectItem>
                <SelectItem value="grapes">Last 1 years</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart width={300} height={100} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#23303D" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#23303D" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#23303D" fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default BookingDetails