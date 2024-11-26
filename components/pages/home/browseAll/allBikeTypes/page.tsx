import React from "react";

import WrapContainer from "@/components/features/WrapContainer";
import { bikeTypes } from "@/lib/bikeType";
import BikeTypeCard from "@/components/features/AllCards/BikeTypeCard";

const AllBikeTypes = () => {
  return (
    <WrapContainer>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {bikeTypes.map((bike) => (
          <BikeTypeCard key={bike.id} type={bike.type} />
        ))}
      </div>
    </WrapContainer>
  );
};

export default AllBikeTypes;
