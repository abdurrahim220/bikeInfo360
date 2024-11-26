"use client";
import LatestNewsCard from "@/components/features/BlogsCard/LatestNewsCard";
import SliderSection from "@/components/features/ReUseContent/Slider-Section";
import WrapContainer from "@/components/features/WrapContainer";
import React, { useState } from "react";

const LatestBlogs = () => {
  const [activeTab, setActiveTab] = useState("Latest");

  const tabs = [
    "Latest",
    "Offers",
    "User Review",
    "Test Ride Review",
    "Tips & Tricks",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Latest":
        return (
          <SliderSection>
            <LatestNewsCard />
          </SliderSection>
        );
      case "Offers":
        return <div>Explore exciting offers on bikes!</div>;
      case "User Review":
        return <div>Check out reviews from bike owners.</div>;
      case "Test Ride Review":
        return <div>Discover test ride experiences and insights.</div>;
      case "Tips & Tricks":
        return <div>Helpful tips and tricks for bike enthusiasts.</div>;
      default:
        return <div>Welcome to the Latest Bikes section!</div>;
    }
  };

  return (
    <section className="my-10">
      <WrapContainer>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-semibold mb-4">Latest Updates</h1>
        </div>

        {/* Tabs */}
        <nav className="my-4" aria-label="Latest updates tabs">
          <div className="flex items-center justify-start gap-4 lg:gap-8 overflow-x-auto whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`text-xl md:text-2xl font-semibold ${
                  activeTab === tab
                    ? "text-blue-500 underline"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Dynamic Content */}
        <div className="mt-6">{renderContent()}</div>
      </WrapContainer>
    </section>
  );
};

export default LatestBlogs;
