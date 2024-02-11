import Container from "@/components/Container";
import { propertyType } from "@/constants/data/market/landingpage";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  FeatureCard,
  FeatureCardDescription,
  FeatureCardFooter,
  FeatureCardHeader,
  FeatureCardImage,
  FeatureCardRating,
  FeatureCardReviews,
  FeatureCardTitle,
} from "../../components/feature-card";

const PropertyType = () => {
  const [tabs, setTabs] = useState(Object.keys(propertyType));
  const [activeTab, setActiveTab] = useState(Object.keys(propertyType)[0]);
  const activeTabData = propertyType[activeTab];
  return (
    <section className="relative overflow-hidden py-5 ">
      <Container>
        <div className="mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-full space-y-4">
            <h1 class="text-2xl font-semibold text-brandSunset sm:text-3xl dark:text-white">Property Types</h1>

            <div className="-m-2 mb-16 sm:flex flex-wrap items-center justify-between overflow-x-auto no-scrollbar w-full">
              <div className="flex space-x-4 overflow-x-auto no-scrollbar my-5 sm:w-11/12 ">
                {tabs.map((tab, idx) => (
                  <div
                    key={idx}
                    className={`border-b-2 border-brandSunset px-7 py-1 rounded-lg shadow-xl cursor-pointer whitespace-nowrap ${
                      activeTab === tab && "bg-brandSunset text-brandFog"
                    }`}
                    onClick={() => setActiveTab(tab)}>
                    {tab}
                  </div>
                ))}
              </div>
              <div className="space-x-3 sm:w-1/12">
                <CarouselPrevious className="relative inset-0 h-12 w-12 translate-x-0 translate-y-0 border-brandSunset bg-brandShell" />
                <CarouselNext className="relative inset-0 h-12 w-12 translate-x-0 translate-y-0 border-brandSunset bg-brandShell" />
              </div>
            </div>

            <CarouselContent className="-ml-3 md:-ml-2">
              {activeTabData.map((hotel, idx) => (
                <CarouselItem key={idx} className="cursor-pointer pl-2 md:basis-1/2 md:pl-4 lg:basis-1/4">
                  <Link to="">
                    <FeatureCard>
                      <FeatureCardHeader>
                        <FeatureCardImage src={hotel.img} />
                        <FeatureCardRating rating={hotel.rating} />
                        <FeatureCardReviews reviews={hotel.reviews} />
                      </FeatureCardHeader>
                      <FeatureCardFooter>
                        <FeatureCardTitle>
                          <h1 className="text-lg font-semibold text-brandTide">{hotel.name}</h1>
                        </FeatureCardTitle>
                        <FeatureCardDescription>
                          <span className="text-sm text-gray-500">{hotel.type}</span>
                          <span className="text-sm text-gray-500"> - </span>
                          <span className="text-sm text-gray-500">{hotel.location}</span>
                        </FeatureCardDescription>
                      </FeatureCardFooter>
                    </FeatureCard>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default PropertyType;
