import Container from '@/components/Container'
import React from 'react'
import Header from '../components/Header';
import StatsCards from './components/StatsCards';
import TotalRevenue from './components/TotalRevenue';
import BookingDetails from './components/BookingDetails';
import Visitors from './components/Visitors';
import AmountDetails from './components/AmountDetails';

const index = () => {
  return (
    <div className="pt-6 ">
      <Container>
        <Header title={"Dashboard"} />
        <StatsCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 grid grid-rows-2 gap-5">
            <TotalRevenue/>
            <BookingDetails/>
          </div>
          <div className="grid grid-rows-2 gap-5">
            <Visitors />
            <AmountDetails/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default index