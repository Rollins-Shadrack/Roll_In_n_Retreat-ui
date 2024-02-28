import Container from '@/components/Container';
import { featuredHotels } from '@/constants/data/market/landingpage';
import React, { Fragment } from 'react'
import { FeatureCard, FeatureCardDescription, FeatureCardFooter, FeatureCardHeader, FeatureCardImage, FeatureCardRating, FeatureCardReviews, FeatureCardTitle } from '../../components/feature-card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Featured = () => {
  return (
    <Container className="py-10">
      <h1 className="text-4xl font-semibold text-brandSunset lg:text-3xl">Featured Hotels</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
        {!featuredHotels ? (
          <Fragment>
            <FeatureCard>
              <FeatureCardHeader>
                <div className="aspect-auto h-48 w-full animate-pulse rounded-lg bg-gray-200 shadow-md" />
              </FeatureCardHeader>
              <FeatureCardFooter>
                <FeatureCardTitle>
                  <div className="mt-2 h-6 w-3/4 animate-pulse bg-gray-200" />
                </FeatureCardTitle>
                <FeatureCardDescription>
                  <div className="mt-2 h-4 w-1/2 animate-pulse bg-gray-200" />
                </FeatureCardDescription>
              </FeatureCardFooter>
            </FeatureCard>
          </Fragment>
        ) : (
          featuredHotels.map((hotel, idx) => (
            <Fragment key={idx}>
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
            </Fragment>
          ))
        )}
      </div>
      <Link to="" className="flex justify-end">
        <Button className="bg-brandSunset hover:text-brandSunset px-8">View All</Button>
      </Link>
    </Container>
  );
}

export default Featured