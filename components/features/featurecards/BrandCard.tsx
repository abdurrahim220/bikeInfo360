import Image from "next/image";
import React from "react";

interface BrandCardProps {
  title: string;
  image: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ title, image }) => {
  return (
    <div className="border-2 flex flex-col items-center justify-center p-2 rounded-md hover:bg-sky-300">
      <Image src={image} alt={title} height={50} width={50} />
    </div>
  );
};

export default BrandCard;
