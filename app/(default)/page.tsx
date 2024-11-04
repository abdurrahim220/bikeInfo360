import AllBrands from "@/components/pages/home/allBrands/page";
import Banner from "@/components/pages/home/banner/page";
import { NewBikes } from "@/components/pages/home/newBikes/page";
import { Footer } from "@/components/shared/footer/page";
import React from "react";

function Home() {
  return (
    <>
      <Banner />
      <AllBrands/>
      <NewBikes/>
      <Footer />
    </>
  );
}

export default Home;
