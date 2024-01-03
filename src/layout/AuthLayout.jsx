import { siteContent } from '@/config/site-content';
import React from 'react'
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from '@/assets/Icon.png'

const AuthLayout = () => {
  return (
    <div className="h-screen flex">
      {/* Page content */}
      <div className="lg:w-1/2 w-full h-full relative">
        <Link to="/" className="p-4 absolute top-4 left-4 inline-flex">
          <img src={logo} alt="" className="w-10 inline-block items-center" />
          <span className="text-3xl font-bold text-black  px-3">{siteContent.businessName}</span>
        </Link>

        <div className="absolute left-1/2  p-8 transform -translate-x-1/2 mt-20 w-full flex justify-center">
          <Outlet />
        </div>
      </div>

      {/* page feature image */}
      <div className="w-1/2 max-md:hidden relative p-8">
        <img
          src={siteContent.auth.index.featureImage}
          alt={siteContent.auth.index.featureImageAlt}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default AuthLayout