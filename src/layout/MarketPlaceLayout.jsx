import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUser } from "@/store/features/authSlice";

const MarketPlaceLayout = () => {
  const user = useSelector(currentUser);

  return (
    <div className="flex flex-col min-h-screen main-container">
      <div className="flex flex-col flex-grow overflow-x-hidden">
        <div className="flex-shrink-0 border-b">
          <Navbar user={user} />
        </div>

        <div className="flex-grow py-6 overflow-auto antialiased">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MarketPlaceLayout;
