import React from 'react'
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold text-center">Sign up / Log in </h1>

      <div className="flex flex-col justify-center items-center py-5">
        <Link to={"/auth/users"} className="border border-black px-5 py-5 flex justify-between w-full md:w-4/5 items-center rounded-xl mb-6 ">
          <div className="block">
            <p className="text-lg font-semibold">For Everyone</p>
            <p className="md:text-base text-sm whitespace-nowrap font-medium">Explore and book luxury hotels near you </p>
          </div>
          <ArrowRight className="lg:w-8 lg:h-8 h-6 w-6" />
        </Link>

        <Link to={"/onboard/login"} className="border border-black px-5 py-5 flex justify-between  w-full md:w-4/5 items-center rounded-xl ">
          <div className="block">
            <p className="text-lg font-semibold">For Business</p>
            <p className=" md:text-base text-sm whitespace-nowrap font-medium">Manage and Grow your business </p>
          </div>
          <ArrowRight className="lg:w-8 lg:h-8 h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}

export default index