import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { IBike } from "@/lib/interface.bike";

const PopularBikesCard = ({ bike }: { bike: IBike }) => {
  return (
    <div className="flex flex-col items-start border-2 rounded-md p-4 max-w-md mx-auto">
      <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
        <Image
          className="hover:scale-125 transition-transform duration-500 cursor-pointer object-cover"
          src={bike.images.allImages[1]}
          alt="Popular Bike"
          width={500}
          height={300}
        />
      </div>
      <h3 className="text-xl md:text-2xl py-1">{bike.brand.name}</h3>
      <p className="text-lg text-black font-semibold pb-2">{bike.price.BDT} BDT</p>
      <Button
        className="text-center w-full border border-red-400"
        variant={"outline"}
      >
        View Details
      </Button>
    </div>
  );
};

export default PopularBikesCard;
