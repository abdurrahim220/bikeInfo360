import BrandCard from "@/components/features/AllCards/BrandCard";
import WrapContainer from "@/components/features/WrapContainer";
import { brandList } from "@/lib/brands";
import React from "react";

const AllBrands = () => {
  return (
    <div>
      <WrapContainer>
       
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4">
          {brandList.map((brand) => (
            <BrandCard key={brand.id} title={brand.title} image={brand.image} />
          ))}
        </div>
      </WrapContainer>
    </div>
  );
};

export default AllBrands;
