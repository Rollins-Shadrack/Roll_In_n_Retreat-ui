import { CalendarOff, CalendarPlus, ReplaceAll, ShieldX } from "lucide-react";

export const staffStats = [
  {
    number: 4,
    name: "Future Check-Ins",
  },
  {
    number: 10,
    name: "Check-Ins today",
  },
  {
    number: 4,
    name: "Completed tasks",
  },
  {
    number: 6,
    name: "Today's Tasks",
  },
];
export const quickActions = [
  { name: "New Task", icon: CalendarPlus, link: "/staff/task/new" },
  { name: "Maintainance Request", icon: ShieldX, link: "/staff/maintanance/new" },
  { name: "Request Shift Change", icon: ReplaceAll, link: "/staff/shift/new" },
  { name: "Request Leave", icon: CalendarOff, link: "/staff/leave/new" },
];
export const whatHappening = [
  { title: "New tasks", desc: "We've added 2 tasks for you today", link: "/staff/tasks" },
  { title: "Check-in", desc: "Check in 2 guests from 12:00 PM to 1:00 PM", link: "/staff" },
  { title: "Check-out", desc: "Check out 3 guests from 12:00 PM to 1:00 PM", link: "/staff" },
];

