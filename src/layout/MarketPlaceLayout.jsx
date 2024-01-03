import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

const MarketPlaceLayout = () => {
  return (
      <div className="w-screen h-screen flex">
          <div className="flex flex-col flex-grow overflow-x-hidden">
              <div className="flex items-center flex-shrink-0  border-b">
                  <Navbar/>
              </div>

              <div className="flex-grow p-6 overflow-auto antialiased">
                  <Outlet/>
              </div>

              <Footer/>
          </div>
    </div>
  )
}

export default MarketPlaceLayout