"use client";
import React, { useState } from "react";

import WrapContainer from "@/components/features/WrapContainer";

import AllBikeTypes from "./allBikeTypes/page";
import AllBrands from "./allbrands/page";
import Budget from "./bugget/page";
import AllDisplacements from "./AllDisplacements/page";

const BrowseAll = () => {
  
  const [activeTab, setActiveTab] = useState("brands");

  const renderContent = () => {
    switch (activeTab) {
      case "brands":
        return <AllBrands />;
      case "budget":
        return <Budget />;
      case "displacement":
        return <AllDisplacements />;
      case "bikeTypes":
        return <AllBikeTypes />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center my-5">
      <WrapContainer>
        <h2 className="text-2xl md:text-3xl font-bold text-center my-4">
          Browse All By
        </h2>

        {/* Tabs List */}
        <div className="flex flex-wrap justify-center w-full  mx-auto gap-3 md:gap-5">
          <button
            className={`py-2 px-4 rounded-md text-sm md:text-base ${
              activeTab === "brands"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("brands")}
          >
            Brands
          </button>
          <button
            className={`py-2 px-4 rounded-md text-sm md:text-base ${
              activeTab === "budget"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("budget")}
          >
            Budget
          </button>
          <button
            className={`py-2 px-4 rounded-md text-sm md:text-base ${
              activeTab === "displacement"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("displacement")}
          >
            Displacement
          </button>
          <button
            className={`py-2 px-4 rounded-md text-sm md:text-base ${
              activeTab === "bikeTypes"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("bikeTypes")}
          >
            Bike Types
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-6 w-full">{renderContent()}</div>
      </WrapContainer>
    </div>
  );
};

export default BrowseAll;
