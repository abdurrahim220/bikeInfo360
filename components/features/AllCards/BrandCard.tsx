import { IBike } from "@/lib/interface.bike";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// interface BrandCardProps {
//   title: string;
//   image: string;
// }

const BrandCard = ({ bike }: { bike: IBike }) => {
  return (
    <Link href={`/brand/${bike.brand.name}`}>
      <div className="border-2 flex flex-col items-center justify-center p-2 rounded-md w-36 h-16 hover:bg-sky-300">
        <Image src={bike.images.allImages[1]} alt={bike.brand.name} height={50} width={50} />
      </div>
    </Link>
  );
};

export default BrandCard;
