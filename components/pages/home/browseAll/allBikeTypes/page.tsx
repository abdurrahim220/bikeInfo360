import React from "react";

import WrapContainer from "@/components/features/WrapContainer";
import { bikeTypes } from "@/lib/bikeType";
import BikeTypeCard from "@/components/features/AllCards/BikeTypeCard";

const AllBikeTypes = () => {
  return (
    <WrapContainer>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
        {bikeTypes.map((bike) => (
          <BikeTypeCard key={bike.id} type={bike.type} />
        ))}
      </div>
    </WrapContainer>
  );
};

export default AllBikeTypes;
