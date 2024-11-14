import React from "react";

const WrapContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-0">
      {children}
    </div>
  );
};

export default WrapContainer;
