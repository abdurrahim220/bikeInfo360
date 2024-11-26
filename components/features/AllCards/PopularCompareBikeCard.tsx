import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const PopularCompareBikeCard = () => {
  return (
    <div className="border p-2 rounded-lg">
      <div className="flex items-center justify-center gap-1">
        <div>
          <Image
            src={"/yamaha/mt-15.png"}
            alt="mt-15"
            width={140}
            height={140}
          />
          <h2 className="text-lg font-bold">Yamaha MT-15</h2>
        </div>

        <div className="grid justify-items-center">
          <p className="w-px bg-red-300 h-10"></p>
          <h1>vs</h1>
          <p className="w-px h-10 bg-red-300"></p>
        </div>

        <div>
          <Image src={"/yamaha/r3.png"} alt="mt-15" width={140} height={140} />

          <h2 className="text-lg font-bold">Yamaha R3</h2>
        </div>
      </div>

      <div className="flex items-center justify-center my-2">
        <Button
          variant={"outline"}
          className="hover:bg-blue-300 hover:shadow-md"
        >
          Compare
        </Button>
      </div>
    </div>
  );
};

export default PopularCompareBikeCard;
