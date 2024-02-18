import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar'
import React from 'react'

const PartnerLayout = () => {
  return (
    <div className="flex w-full main-container">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="lg:ml-60 mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default PartnerLayout