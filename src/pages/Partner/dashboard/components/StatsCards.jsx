import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, CalendarCheck, CalendarDays, CalendarMinus, CalendarOff, CalendarPlus, CalendarX, CreditCard, Hotel, MoreHorizontal, User } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const StatsCards = () => {
  const cards = [
    {
      title: "Reservation Details",
      stats: [
        {
          icon: CalendarDays,
          number: 50,
          link:"",
          name: "Booking",
        },
        {
          icon: CalendarPlus,
          number: 20,
          link:"",
          name: "Check-in",
        },
        {
          icon: CalendarMinus,
          number: 18,
          link:"",
          name: "Check-out",
        },
        {
          icon: Building,
          number: 31,
          link:"",
          name: "Stay Now",
        },
      ],
    },
    {
      title: "Available Rooms",
      stats: [
        {
          icon: Hotel,
          number: 90,
          link:"",
          name: "Rooms",
        },
        {
          icon: CalendarCheck,
          number: 37,
          link:"",
          name: "Available",
        },
        {
          icon: CalendarX,
          number: 27,
          link:"",
          name: "Occupied",
        },
        {
          icon: CalendarOff,
          number: 32,
          link:"",
          name: "Not Ready",
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
      {cards.map((card, idx) => (
        <Card key={idx} className="bg-brandFog  text-gray-600">
          <CardHeader className="p-2 px-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg text-gray-600">{card.title}</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MoreHorizontal />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 items-center">
              {card.stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div>{React.createElement(stat.icon, { size: "18" })}</div>
                  <p className="text-2xl font-bold">{stat.number}</p>
                  <Link className="text-sm">{stat.name}</Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
