"use client"
import React from "react";
import WrapContainer from "@/components/features/WrapContainer";
import PopularBikesCard from "@/components/features/AllCards/PopularBikesCard";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const PopularBikes = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="xl:my-12 my-8">
      <WrapContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Most Popular Bikes
        </h2>

        {/* Slider Container */}
        <div className="relative">
          {/* Slider Content */}
          <div
            className="overflow-hidden"
            ref={emblaRef} // Embla Carousel Reference
          >
            <div className="flex">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-2" // Controls card width
                >
                  <PopularBikesCard />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* Mobile/Tablet Arrows in the middle */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-300 rounded-full shadow-md hover:bg-gray-400 focus:outline-none md:hidden"
          >
            <FaArrowLeft className="text-lg" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-300 rounded-full shadow-md hover:bg-gray-400 focus:outline-none md:hidden"
          >
            <FaArrowRight className="text-lg" />
          </button>

          {/* Desktop Buttons on the sides */}
          <div className="hidden md:flex justify-between items-center mt-4">
            <button
              onClick={scrollPrev}
              className="px-4 py-2 bg-gray-300 rounded-md shadow-md hover:bg-gray-400 focus:outline-none"
            >
              Prev
            </button>
            <button
              onClick={scrollNext}
              className="px-4 py-2 bg-gray-300 rounded-md shadow-md hover:bg-gray-400 focus:outline-none"
            >
              Next
            </button>
          </div>
        </div>
      </WrapContainer>
    </section>
  );
};

export default PopularBikes;
