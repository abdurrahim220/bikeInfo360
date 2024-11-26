import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center my-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-gray-900">
        {children}
      </h1>
    </div>
  );
};

export default SectionTitle;
