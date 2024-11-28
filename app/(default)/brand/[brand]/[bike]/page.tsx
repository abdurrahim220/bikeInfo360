"use client";

import { useParams } from "next/navigation";
import React from "react";
import { bikeModels } from "@/lib/bikeType";

import WrapContainer from "@/components/features/WrapContainer";
import Breadcrumb from "@/components/features/ReUseContent/Breadcrumb";
import BikeDetailsOverview from "@/components/pages/brands/BikeDetailsOverview";

const BikeDetailsPage = () => {
  const { bike, brand } = useParams();

  const brandName = Array.isArray(brand) ? brand[0] : brand;
  const modelName = Array.isArray(bike) ? bike[0] : bike;
  // Find the bike details using the `bike` ID
  const bikeDetails = bikeModels.find((b) => b.id.toString() === bike);

  if (!bikeDetails) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">
          Bike not found for the {brand} brand.
        </h1>
      </div>
    );
  }

  return (
    <div className="my-28">
      <WrapContainer>
      <Breadcrumb
        paths={[
          { name: "brands", href: "/brand" },
          { name: brandName || "unknown", href: `/brand/${brandName}` },
          { name: modelName || "unknown", href: `/brand/${brandName}/${modelName}` },
        ]}
        />
        <BikeDetailsOverview />
      </WrapContainer>
    </div>
  );
};

export default BikeDetailsPage;
