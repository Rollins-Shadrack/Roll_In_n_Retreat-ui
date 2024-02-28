import Container from "@/components/Container";
import React from "react";
import Header from "../components/Header";
import { useStaffMembersQuery } from "@/store/apis/staff.api";
import Greetings from "@/components/Greetings";
import FeaturedButton from "@/components/FeaturedButton";
import { BarChart4, ListChecks, Pen, ShieldCheck, User, UserPlus } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useAuth from "@/hooks/useAuth";
import { staffMemberResources } from "@/constants/data/dashboard/Sidebar";
import { Link, Outlet } from "react-router-dom";
import EditProfile from "./components/EditProfile";
import { quickActions, staffStats, whatHappening } from "@/constants/data/dashboard/staff";

const layout = () => {
  const { staffMembers } = useStaffMembersQuery();
  const { user } = useAuth();
  return (
    <div className="pt-6 ">
      <Container>
        <Header title={"Staff Member"} />
        <div className="md:flex items-center justify-between my-5">
          <Greetings />
          <div className="flex items-center space-x-4">
            <Link>
              <FeaturedButton name="Check-in/out" icon={ListChecks} />
            </Link>

            <Link to="/reports">
              <FeaturedButton name="Reports" icon={BarChart4} />
            </Link>
            {user.staff.is_super_admin && (
              <Link to="/staff/new">
                <FeaturedButton name="New Staff" icon={UserPlus} />
              </Link>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="">
            <Card className="relative bg-brandFog">
              <CardHeader>
                <div className="mx-auto">
                  <div className="h-[160px] w-[160px] rounded-full border-4 border-brandTide flex items-center justify-center relative">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
                      alt="rollinscodes"
                      className="h-[140px] w-[140px] object-cover rounded-full relative"
                    />
                    <label
                      htmlFor="image"
                      className="bg-brandSunset text-brandFog shadow-lg h-8 w-8 rounded-full flex items-center justify-center absolute bottom-5 right-1">
                      <Pen className="w-4 h-4" />
                      <input type="file" id="image" className="hidden" onChange={(e) => {}} />
                    </label>
                  </div>
                </div>
                <CardTitle className="text-brandSunset text-lg">Info:</CardTitle>
                <div className="px-4">
                  <p className="text-brandTide text-sm mb-2">
                    <b className="text-brandMidnight">Position:</b> Hotel Owner
                  </p>
                  <p className="text-brandTide mb-2">
                    <b className="text-brandMidnight">Full Name:</b> {user?.staff?.first_name} {user?.staff?.last_name}
                  </p>
                  <p className="text-brandTide whitespace-nowrap text-sm mb-2">
                    <b className="text-brandMidnight">Email:</b> {user?.staff?.email}
                  </p>
                </div>
                <CardTitle className="text-brandSunset text-lg">Resources</CardTitle>
                {staffMemberResources.map((resources, idx) => (
                  <Link key={idx} to={resources.link} className={`group flex items-center text-sm font-medium p-1 px-4`}>
                    <div>{React.createElement(resources.icon, { size: "20" })}</div>
                    <h2 className="whitespace-pre duration-500  ml-2 lg:flex hidden">{resources.name}</h2>
                  </Link>
                ))}
              </CardHeader>
              {user.staff.is_super_admin && (
                <div className="absolute top-0 left-0 ">
                  <div className="h-8 w-10 bg-brandTide flex items-center justify-center rounded-lg">
                    <ShieldCheck className="text-brandFog" />
                  </div>
                </div>
              )}

              <div className="absolute top-0 right-0 ">
                <EditProfile user={user.staff} />
              </div>
              <Link to="/staff/profile" className="absolute bottom-0 right-0 ">
                <div className="h-8 w-fit  bg-brandMidnight flex items-center justify-center space-x-1 px-2 rounded-lg text-brandFog">
                  <User className="w-5 h-5" />
                  <p className="font-semibold">View </p>
                </div>
              </Link>
            </Card>
          </div>

          <div className="col-span-2">
            <Outlet/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default layout;
