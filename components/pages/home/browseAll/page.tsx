import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WrapContainer from "@/components/features/WrapContainer";

import AllBikeTypes from "./allBikeTypes/page";
import AllBrands from "./allbrands/page";
import Budget from "./bugget/page";
import AllDisplacements from "./AllDisplacements/page";

const BrowseAll = () => {
  return (
    <div className="flex items-center justify-center my-5">
      <WrapContainer>
      <h2 className="text-3xl font-bold  text-center my-4">
          Browse All By
        </h2>
        <Tabs defaultValue="brands">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="brands">Brands</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="displacement">Displacement</TabsTrigger>
            <TabsTrigger value="bikeTypes">Bike Types</TabsTrigger>
          </TabsList>

          <TabsContent value="brands">
            <AllBrands/>
          </TabsContent>
          <TabsContent value="budget">
            <Budget />
          </TabsContent>
          <TabsContent value="displacement">
            <AllDisplacements />
          </TabsContent>
          <TabsContent value="bikeTypes">
            <AllBikeTypes />
          </TabsContent>

        </Tabs>
      </WrapContainer>
    </div>
  );
};

export default BrowseAll;
