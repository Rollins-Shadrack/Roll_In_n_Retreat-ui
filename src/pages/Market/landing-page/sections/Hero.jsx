import Container from '@/components/Container'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'
import SearchBar from '../../components/SearchBar';
import Carousel from "nuka-carousel";
import { heroImages } from '@/constants/data/market/landingpage';


const Hero = () => {
  const params = {
    wrapAqound: true,
    slidesToShow: 1,
    autoplay: true,
    autoplayInterval: 5000,
    renderCenterLeftControls: ({ previousSlide }) => null,
    renderCenterRightControls: ({ nextSlide }) => null,
    cellSpacing: 10,
  };
  return (
    <div className="bg-gradient-to-b from-brandFog py-10">
      <Container>
        <div className="lg:flex justify-between items-center space-y-4">
          <div className="lg:w-1/2 space-y-8">
            <h4 className="text-3xl font-bold lg:text-6xl text-brandMidnight">
              Discover your perfect <br /> <span className="text-brandSunset">Retreat.</span>
            </h4>

            <Card className="border-brandTide text-brandMidnight max-w-lg bg-transparent">
              <CardHeader className="p-2">
                <div className="flex justify-between divide-x gap-3 items-center">
                  <CardTitle className="text-base">Are you a hospitality enthusiast or hotelier?</CardTitle>
                  <Button className="bg-brandSunset">Join Us</Button>
                </div>
              </CardHeader>
            </Card>

            <p className="text-sm pt-4 font-semibold text-brandMidnight">More that 250+ hotels and 3300+ Appointments books today</p>
            <SearchBar />
          </div>
          <div className="lg:w-1/2 ">
            <Carousel
              className="w-full "
              {...params}
              renderBottomCenterControls={({ currentSlide, slideCount, goToSlide }) => (
                <ul className="flex flex-wrap items-center justify-center  space-x-2 mt-4">
                  {[...Array(slideCount)].map((_, index) => (
                    <li key={index}>
                      <button
                        className={`h-1 lg:w-8 md:w-5 w-3 rounded-2xl ${index === currentSlide ? "bg-brandSunset" : "bg-gray-400"}`}
                        onClick={() => goToSlide(index)}
                      />
                    </li>
                  ))}
                </ul>
              )}>
              {heroImages.map((image) => (
                <img key={image} src={image} alt="rollinscodes.com" className="w-full lg:h-[500px] h-[400px] rounded-lg object-cover " />
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero