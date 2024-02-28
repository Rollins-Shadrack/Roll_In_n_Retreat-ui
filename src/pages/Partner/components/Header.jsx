import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellRing, LogOut, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { menu } from '@/constants/data/dashboard/Sidebar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, logOut } from '@/store/features/authSlice';
import { useLogoutMutation } from '@/store/apis/auth.api';

const Header = ({ title }) => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const user = useSelector(currentUser);

  const handleLogout = async () => {
    await logout()
      .unwrap()
      .then(() => {
        dispatch(logOut());
      });
  };
  return (
    <div className="flex  items-center justify-between text-brandSunset">
      <h2 className="font-bold text-xl md:text-2xl lg:text-4xl">{title}</h2>
      <div className="flex space-x-2 items-center">
        <div className="p-3 rounded-full flex items-center justify-center bg-brandFog relative">
          <BellRing />
          <div className="absolute -top-1 w-fit h-fit px-1 rounded-full -right-2.5 font-semibold bg-red-500 text-brandFog flex items-center justify-center">
            12
          </div>
        </div>
        <div className="bg-brandFog rounded-l-full text-brandSunset">
          <Link to='/staff/profile' className="flex items-center space-x-3 px-5 py-2">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
                alt="@shadcn"
                className="object-cover"
              />
              <AvatarFallback>R&R</AvatarFallback>
            </Avatar>
            <div className="md:flex flex-col  hidden">
              <p className="font-semibold text-lg">
                {user?.staff?.first_name} {user?.staff?.last_name}
              </p>
              <p className="text-sm font-medium ">{user?.staff?.email}</p>
            </div>
            <div className="md:hidden">
              <DropdownMenu className="md:hidden">
                <DropdownMenuTrigger asChild>
                  <Menu size={32} strokeWidth={2.5} className=" text-brandSunset" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>
                    <h2 className="text-wrap duration-500 font-bold text-lg   text-brandSunset">Roll In & Retreat</h2>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {menu.map((item, idx) => (
                      <DropdownMenuItem key={idx}>
                        <Link to={item.link}>{item.name}</Link>
                        <DropdownMenuShortcut>{React.createElement(item.icon, { size: "20" })}</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem onClick={handleLogout}>
                      Log Out
                      <DropdownMenuShortcut>
                        <LogOut />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header