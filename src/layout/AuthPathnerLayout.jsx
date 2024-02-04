import { siteContent } from "@/config/site-content";
import React from "react";
import logo from "@/assets/logo.png";
import { Link, Outlet } from "react-router-dom";

const AuthPartnerLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden main-container">
      {/* Page content */}
      <div className="lg:w-1/2 w-full h-full relative">
        <Link to="/" className="p-3 absolute top-4 left-4 inline-flex ">
          <img src={logo} alt="" className="w-[80px] inline-block items-center" />
        </Link>

        <div className="absolute left-1/2  p-2 transform -translate-x-1/2 mt-24 w-full flex justify-center">
          <Outlet />
        </div>
      </div>

      {/* page feature image */}
      <div className="w-1/2 max-md:hidden relative ">
        <img src={siteContent.auth.login.featureImage} alt={siteContent.auth.login.featureImageAlt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default AuthPartnerLayout;
