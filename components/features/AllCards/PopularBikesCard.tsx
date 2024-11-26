import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const PopularBikesCard = () => {
  return (
    <div className="flex flex-col items-start border-2 rounded-md p-4 max-w-md mx-auto">
      <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
        <Image
          className="hover:scale-125 transition-transform duration-500 cursor-pointer object-cover"
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Popular Bike"
          width={500}
          height={300}
        />
      </div>
      <h3 className="text-xl md:text-2xl py-1">Title</h3>
      <p className="text-lg text-black font-semibold pb-2">Price</p>
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
