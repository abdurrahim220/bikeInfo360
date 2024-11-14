"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { sliders } from "@/lib/sliders";

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const selectHandler = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", selectHandler);
    selectHandler();

    return () => {
      emblaApi.off("select", selectHandler);
    };
  }, [emblaApi]);

  
  return (
    <div className="embla mt-20 relative" ref={emblaRef}>
      <div className="embla__container">
        {sliders.map((slider) => (
          <div className="embla__slide" key={slider.id}>
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
              <Image
                src={slider.image}
                alt={slider.title}
                fill
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          {sliders.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`p-2 rounded-full ${
                index === selectedIndex ? "bg-blue-500" : "bg-red-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
