import {
  BadgePercent,
  BedDouble,
  BellRing,
  CalendarDays,
  LayoutDashboard,
  Library,
  ListChecks,
  MessageCircleHeart,
  MessageSquareWarning,
  Settings,
  TrendingUp,
  UserCog,
  Users,
} from "lucide-react";
export const menu = [
  { name: "Dashboard", link: "/dashboard", icon: LayoutDashboard },
  { name: "Reservation", link: "/reservation", icon: CalendarDays },
  { name: "Manage Rooms", link: "/rooms", icon: BedDouble },
  { name: "Staff Section", link: "/staff", icon: Users },
  { name: "Analytics", link: "/analytics", icon: TrendingUp },
  { name: "Reports", link: "/reports", icon: Library },
  { name: "Guest Reviews", link: "/guests", icon: MessageCircleHeart },
  { name: "Notification", link: "/notification", icon: BellRing },
  { name: "Inventory", link: "/inventory", icon: ListChecks },
  { name: "Promotions", link: "/promotions", icon: BadgePercent },
  { name: "Complains", link: "/complains", icon: MessageSquareWarning },
  { name: "Settings", link: "/settings", icon: Settings },
  { name: "Profile", link: "/profile", icon: UserCog },
];