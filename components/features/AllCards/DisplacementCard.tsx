import React from "react";

type DisplacementCardProps = {
  range: string;
};

const DisplacementCard: React.FC<DisplacementCardProps> = ({ range }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md flex items-center justify-center text-gray-600 hover:bg-sky-100 transition">
      <p>{range}</p>
    </div>
  );
};

export default DisplacementCard;
