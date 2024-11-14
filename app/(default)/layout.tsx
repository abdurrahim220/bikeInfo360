import Footer from "@/components/shared/footer/page";
import React from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grow">
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
