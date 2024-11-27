import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const BrandHeader = ({ brand }: { brand: string }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      <h2 className="text-xl sm:text-2xl font-semibold  mb-2 sm:mb-0">
        <span className="text-red-600 font-semibold uppercase">{brand}</span>{" "}
        Bikes Models And Price In Bangladesh
      </h2>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filter By</SelectLabel>
            <SelectItem value="high-to-low">High-to-low</SelectItem>
            <SelectItem value="low to high">Low to high</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
            <SelectItem value="commuter">Commuter</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BrandHeader;
