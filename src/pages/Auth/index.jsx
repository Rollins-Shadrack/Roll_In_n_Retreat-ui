import React from 'react'
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-center">Sign up / Log in </h1>

      <div className="flex flex-col justify-center items-center py-5">
        <Link to={"/auth/users"} className="border border-black px-10 py-5 flex justify-between w-4/5 items-center rounded-xl mb-6 ">
          <div className="block">
            <p className="text-lg font-semibold">For Everyone</p>
            <p className="text-md font-medium">Explore and book luxury hotels near you </p>
          </div>
          <ArrowRight size={40} />
        </Link>

        <Link to={"/auth/business"} className="border border-black px-10 py-5 flex justify-between w-4/5 items-center rounded-xl ">
          <div className="block">
            <p className="text-lg font-semibold">For Business</p>
            <p className="text-md font-medium">Manage and Grow your business </p>
          </div>
          <ArrowRight size={40} />
        </Link>
      </div>
    </div>
  );
}

export default index