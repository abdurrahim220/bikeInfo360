import BrandCard from "@/components/features/AllCards/BrandCard";

import { brandList } from "@/lib/brands";

import React from "react";

const AllBrands = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center  gap-4">
        {brandList.map((brand) => (
          <BrandCard key={brand.id} title={brand.title} image={brand.image} />
        ))}
      </div>
    </>
  );
};

export default AllBrands;
