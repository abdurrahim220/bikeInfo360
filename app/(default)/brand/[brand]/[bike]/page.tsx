"use client";

import { useParams } from "next/navigation";
import React from "react";
import { bikeModels } from "@/lib/bikeType";
import Image from "next/image";
import WrapContainer from "@/components/features/WrapContainer";
import Breadcrumb from "@/components/features/ReUseContent/Breadcrumb";

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
        <h1 className="text-3xl font-bold text-gray-200 mb-4">
          {bikeDetails.name}
        </h1>
        <div className="relative mb-8">
          <Image
            src={bikeDetails.image}
            alt={bikeDetails.name}
            width={400}
            height={300}
            className="rounded-lg w-full"
          />
        </div>
        <div className="text-lg text-gray-400">
          <p>
            <strong>CC:</strong> {bikeDetails.specs.cc}
          </p>
          <p>
            <strong>KM/L:</strong> {bikeDetails.specs.kmpl}
          </p>
          <p>
            <strong>Category:</strong> {bikeDetails.specs.category}
          </p>
          <p>
            <strong>Ex-Showroom Price:</strong> $
            {bikeDetails.pricing.exShowroom}
          </p>
          <p>
            <strong>EMI Starts at:</strong> ₹{bikeDetails.pricing.emiStarts}
          </p>
        </div>
      </WrapContainer>
    </div>
  );
};

export default BikeDetailsPage;
