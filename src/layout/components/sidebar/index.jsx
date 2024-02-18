import { Input } from "@/components/ui/input";
import { menu } from "@/constants/data/dashboard/Sidebar";
import { LogOut, Search } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useLogoutMutation } from "@/store/apis/auth.api";
import { useDispatch } from "react-redux";
import { logOut } from "@/store/features/authSlice";
const index = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const handleLogout = async () => {
    await logout().unwrap().then(() => {
      dispatch(logOut());
    })
  }
  return (
    <div className="flex flex-col fixed gap-6 h-full border-r w-18 lg:w-60 border-brandSunset">
      <div className="bg-brandFog overflow-y-scroll min-h-screen w-18 lg:w-60 text-brandSunset sticky px-4 top-0 no-scrollbar">
        <div className="my-4 ">
          <h2 className="text-wrap duration-500 font-bold text-2xl  py-5 lg:block hidden">Roll In & Retreat</h2>
          <div className="relative lg:block hidden">
            <Input className="bg-transparent relative" placeholder={`Search`} />
            <Search className="absolute top-2 right-2" />
          </div>
          <div className="mt-4 top-4 flex flex-col relative">
            {menu.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className={`group flex items-center text-md  font-medium p-2  rounded-md ${
                  pathname === item.link && "rounded-2xl  shadow-xl mb-2 bg-brandSunset text-brandFog"
                }`}>
                <div>{React.createElement(item.icon, { size: "20" })}</div>
                <h2 className="whitespace-pre duration-500  ml-4 lg:flex hidden">{item.name}</h2>
              </Link>
            ))}

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="group flex items-center text-md p-2 rounded-md font-medium cursor-pointer">
                  <LogOut className="w-5 h-5" />
                  <h2 className="whitespace-pre duration-500  ml-4 lg:flex hidden">Log Out</h2>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Log Out</AlertDialogTitle>
                  <AlertDialogDescription>Are you sure you want to log out? This action will end your current session.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-brandMidnight text-brandFog">Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-brandSunset text-brandFog" onClick={handleLogout}>
                    Log Out
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
