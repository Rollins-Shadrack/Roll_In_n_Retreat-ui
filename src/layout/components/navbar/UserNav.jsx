import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "@/store/apis/auth.api";
import { logOut } from "@/store/features/authSlice";
import { useDispatch } from "react-redux";

const UserNav = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout()
      .unwrap()
      .then(() => {
        dispatch(logOut());
      });
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://media.istockphoto.com/id/1365997131/photo/portrait-of-mid-20s-african-american-man-outdoors-at-dusk.jpg?s=612x612&w=0&k=20&c=ga5_tGoa4-KQfGBrbr997JX_3aMLJcTb8Hw2FJV-neQ="
              className="object-cover"
              alt="rollinscodes.com"
            />
            <AvatarFallback>RC</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-5 mr-5">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="/profile">
              <p className="">Profile</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNav;
