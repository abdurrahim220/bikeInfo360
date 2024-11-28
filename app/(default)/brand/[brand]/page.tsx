"use client";
import Breadcrumb from "@/components/features/ReUseContent/Breadcrumb";
import WrapContainer from "@/components/features/WrapContainer";
import HeroBikesSection from "@/components/pages/brands/page";
import { useParams } from "next/navigation";
import React from "react";

const BrandPage = () => {
  const { brand } = useParams();

  const brandName = Array.isArray(brand) ? brand[0] : brand || "unknown";

  return (
    <div className="p-6 my-28 ">
      <WrapContainer>
        <Breadcrumb
          paths={[
            { name: "brands", href: "/brand" },
            { name: brandName || "unknown", href: `/brand/${brandName}` },
          ]}
        />
        <h1 className="text-2xl font-bold capitalize">
          Welcome to{" "}
          <span className="text-red-600 font-semibold">{brandName}</span> brand
          page!
        </h1>
        <p className="mt-4">
          Here you can find all the details about the {brandName} brand.
        </p>

        <section className="my-10 ">
          <HeroBikesSection brand={brandName} />
        </section>
      </WrapContainer>
    </div>
  );
};

export default BrandPage;
