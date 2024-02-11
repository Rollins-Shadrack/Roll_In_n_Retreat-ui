import React from 'react'
import { ChevronRight } from "lucide-react";
import Container from '@/components/Container';
import { cities } from '@/constants/data/market/landingpage';

const Cities = () => {
  return (
    <section className=" py-10">
      <Container>
        <h1 className="mb-10 text-center text-4xl font-semibold text-brandTide lg:text-3xl">Find a hotel near you</h1>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {cities &&
            cities.map((city, index) => (
              <div key={index} className="flex shrink-0 gap-2">
                <ChevronRight className="text-lg text-brandSunset transition-all duration-300 ease-in-out group-hover:text-brandMidnight" />
                <h2 className="text-base">{city.name}</h2>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}

export default Cities