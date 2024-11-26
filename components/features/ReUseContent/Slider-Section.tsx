"use client";
import React from "react";
import WrapContainer from "@/components/features/WrapContainer";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SliderSection = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="xl:my-8 my-4">
      <WrapContainer>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-2"
                >
                  {children}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-300 rounded-full shadow-md hover:bg-gray-400 focus:outline-none "
          >
            <FaArrowLeft className="text-lg" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-300 rounded-full shadow-md hover:bg-gray-400 focus:outline-none "
          >
            <FaArrowRight className="text-lg" />
          </button>
        </div>
      </WrapContainer>
    </section>
  );
};

export default SliderSection;
