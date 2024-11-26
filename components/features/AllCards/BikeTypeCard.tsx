import React from "react";

type BikeTypeCardProps = {
  type: string;
};

const BikeTypeCard: React.FC<BikeTypeCardProps> = ({ type }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md flex items-center w-36 h-16 justify-center text-gray-600 hover:bg-sky-100 transition">
      <p>{type}</p>
    </div>
  );
};

export default BikeTypeCard;
