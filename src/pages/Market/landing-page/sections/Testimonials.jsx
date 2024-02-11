import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Container from "@/components/Container";
import { testimonials } from "@/constants/data/market/landingpage";
import RatingStars from "@/components/ui/rating-stars";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-18 lg:py-20 lg:pb-36">
      <Container>
        <div className="mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-full space-y-4">
            <div className="mb-4 text-4xl font-semibold tracking-tighter text-brandSunset">What our clients say</div>

            <div className="-m-2 mb-16 flex flex-wrap items-center justify-between">
              <div className="w-auto p-2">
                <p className="max-w-2xl text-xl tracking-tight text-muted-foreground">
                  Our clients are very happy to use our application. They can easily book an appointment to their favourite hotels
                </p>
              </div>
              <div className="space-x-3">
                <CarouselPrevious className="relative inset-0 h-12 w-12 translate-x-0 translate-y-0 border-brandSunset bg-brandShell" />
                <CarouselNext className="relative inset-0 h-12 w-12 translate-x-0 translate-y-0 border-brandSunset bg-brandShell" />
              </div>
            </div>

            <CarouselContent className="-ml-3 md:-ml-2">
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="cursor-pointer pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3">
                  <div className="rounded-lg border bg-brandShell p-6 transition duration-200">
                    <div className="-m-0.5 mb-6 flex flex-wrap">
                      <RatingStars rating={testimonial.rating} size={"lg"} className="fill-brandFog" />
                    </div>
                    <p className="mb-6 tracking-tight text-brandMidnight">{testimonial.review}</p>
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="w-auto p-1.5">
                                  <h3 className="font-semibold tracking-tight text-brandMidnight">{ testimonial.name}</h3>
                                  <span className="text-sm tracking-tight text-brandTide">{ testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
