import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { currentUser } from '@/store/features/authSlice'

const MarketPlaceLayout = () => {
    const user = useSelector(currentUser);
    // console.log(user)
  return (
    <div className=" h-screen flex main-container">
      <div className="flex flex-col flex-grow overflow-x-hidden">
        <div className="flex items-center flex-shrink-0  border-b">
          <Navbar user={user} />
        </div>

        <div className="flex-grow p-6 overflow-auto antialiased">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default MarketPlaceLayout