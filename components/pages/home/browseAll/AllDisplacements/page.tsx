import React from "react";

import WrapContainer from "@/components/features/WrapContainer";
import { displacementRanges } from "@/lib/displacement";
import DisplacementCard from "@/components/features/AllCards/DisplacementCard";


const AllDisplacements = () => {
  return (
    <WrapContainer>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
        {displacementRanges.map((displacement) => (
          <DisplacementCard key={displacement.id} range={displacement.range} />
        ))}
      </div>
    </WrapContainer>
  );
};

export default AllDisplacements;
