import PopularCompareBikeCard from "@/components/features/AllCards/PopularCompareBikeCard";
import SectionTitle from "@/components/features/AllCards/SectionTitle";
import SliderSection from "@/components/features/ReUseContent/Slider-Section";
import WrapContainer from "@/components/features/WrapContainer";
import React from "react";

const CompareBikes = () => {
  return (
    <div>
      <WrapContainer>
        {/* Section Title */}
        <SectionTitle>Popular Compare Bikes</SectionTitle>

        <div>
          <SliderSection>
            <PopularCompareBikeCard />
          </SliderSection>
        </div>
      </WrapContainer>
    </div>
  );
};

export default CompareBikes;
