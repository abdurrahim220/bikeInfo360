import Image from "next/image";
import React from "react";

const LatestNewsCard = () => {
  return (
    <a href="#" className="block">
      <Image
        alt="Latest news"
        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        width={870} // Set the width of the image
        height={480} // Set the height of the image
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
      />

      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        Lorem, ipsum dolor.
      </h3>

      <p className="mt-2 max-w-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        reiciendis sequi ipsam incidunt.
      </p>
    </a>
  );
};

export default LatestNewsCard;
