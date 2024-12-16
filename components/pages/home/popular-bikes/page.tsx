"use client"
import React, { useEffect } from "react";
import WrapContainer from "@/components/features/WrapContainer";
import PopularBikesCard from "@/components/features/AllCards/PopularBikesCard";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "@/app/redux/features/bikeApiSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { IBike } from "@/lib/interface.bike";

const PopularBikes = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const dispatch = useDispatch<AppDispatch>();
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const { bikes, status, error } = useSelector((state: RootState) => state.bikeApi);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBikes());
    }
  }, [dispatch, status]);
  if (status === "loading") return <p className="text-center">Loading bikes...</p>;
  if (status === "failed") return <p className="text-center">Error: {error}</p>;
  // console.log(bikes.data);

  return (
    <section className="xl:my-12 my-8">
      <WrapContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Most Popular Bikes
        </h2>

        {/* Desktop Buttons on the sides */}
        <div className="hidden md:flex justify-end gap-5 items-center my-4">
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

        <div className="relative">

          <div
            className="overflow-hidden"
            ref={emblaRef}
          >
            <div className="flex">
              {/* {Array.from({ length: 8 }).map((_, index) => ( */}
              {bikes?.data?.map((bike: IBike, index: number) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-2"
                >
                  <PopularBikesCard bike={bike} key={index} />
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



        </div>
      </WrapContainer>
    </section>
  );
};

export default PopularBikes;
