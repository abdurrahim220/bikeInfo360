import React from "react";

import WrapContainer from "@/components/features/WrapContainer";
import { displacementRanges } from "@/lib/displacement";
import DisplacementCard from "@/components/features/AllCards/DisplacementCard";


const AllDisplacements = () => {
  return (
    <WrapContainer>
     <div className="flex flex-wrap justify-center items-center gap-4">
        {displacementRanges.map((displacement) => (
          <DisplacementCard key={displacement.id} range={displacement.range} />
        ))}
      </div>
    </WrapContainer>
  );
};

export default AllDisplacements;
