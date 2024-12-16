import BrandCard from "@/components/features/AllCards/BrandCard";

// import { brandList } from "@/lib/brands";
import { IBike } from "@/lib/interface.bike";

import React from "react";

const AllBrands = ({ bikes }: { bikes: IBike[] }) => {
  // console.log(bikes);
  return (
    <>
      <div className="flex flex-wrap justify-center  gap-4">
        {bikes?.map((bike: IBike, index: number) => (
          <BrandCard key={index} bike={bike} />
        ))}
      </div>
    </>
  );
};

export default AllBrands;
