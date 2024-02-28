import React from "react";
import { Pen, CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EditProfile from "./EditProfile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const UserInfo = () => {
  return (
    <Card className="bg-gray-100 px-5 pt-10 relative">
      <div className="flex items-center justify-center ">
        <div className="w-4/12 mx-auto">
          <div className="h-[160px] w-[160px] rounded-full border-4 border-black flex items-center justify-center relative">
            <img
              src="https://media.istockphoto.com/id/1365997131/photo/portrait-of-mid-20s-african-american-man-outdoors-at-dusk.jpg?s=612x612&w=0&k=20&c=ga5_tGoa4-KQfGBrbr997JX_3aMLJcTb8Hw2FJV-neQ="
              alt="rollinscodes"
              className="h-[140px] w-[140px] object-cover rounded-full relative"
            />
            <label htmlFor="image" className="bg-white h-8 w-8 rounded-full flex items-center justify-center absolute bottom-5 right-1">
              <Pen />
              <input type="file" id="image" className="hidden" onChange={(e) => {}} />
            </label>
          </div>
        </div>

        <div className="w-8/12 mx-auto ">
          <CardHeader className="text-gray-600">
            <CardTitle className="whitespace-nowrap">Rollins Shadrack</CardTitle>
          </CardHeader>
          <CardContent className="font-semibold text-gray-600 text-xs">
            <p>Nairobi, Kenya</p>
            <p>rshadrackochieng@gmail.com</p>
            <p>+254746179246</p>
          </CardContent>
        </div>
      </div>
      <div className="w-4/5 mx-auto my-3">
        <h3 className="font-bold text-md">Upcoming Appointments</h3>
        <Card className="shadow-sm">
          <CardContent className="flex items-center justify-between space-x-2 py-2">
            <div className="inline-flex flex-col items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>OpenSaaS</AvatarFallback>
              </Avatar>
              <span className="text-xs whitespace-nowrap">Rollins Shadrack</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Body Massage</h4>
              <div className="flex items-center pt-2">
                <CalendarDays size={18} />
                <span className="text-xs text-muted-foreground">Dec 07, 2023, 03:30AM-03:49AM</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-4/5 mx-auto my-3">
        <h3 className="font-bold text-md">Favourite Partner</h3>
        <Card className="shadow-sm relative">
          <CardContent className="flex p-2">
            {/* <Image src="/images/about.png" width={120} height={90} className=" rounded-xl object-fill" /> */}
            <div className="mx-auto">
              <h4 className="text-sm font-semibold">Clip & Style Studio</h4>
              <CardDescription className="flex items-center justify-center">
                {/* <Image src="/images/star.svg" width={16} height={16} />
                <Image src="/images/star.svg" width={16} height={16} />
                <Image src="/images/star.svg" width={16} height={16} />
                <Image src="/images/star.svg" width={16} height={16} />
                <Image src="/images/star.svg" width={16} height={16} /> */}
                <span className="px-1">4.7</span>
              </CardDescription>
            </div>
          </CardContent>
          <Button variant="ghost" className="absolute right-0 bottom-0 ">
            Book Now
          </Button>
        </Card>
      </div>


      <div className="absolute top-0 right-0">
        <EditProfile />
      </div>
    </Card>
  );
};

export default UserInfo;
