import React from "react";

type BudgetCardProps = {
  range: string;
};

const BudgetCard: React.FC<BudgetCardProps> = ({ range }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md flex items-center justify-center text-gray-600 hover:bg-sky-100 transition">
      <p>{range}</p>
    </div>
  );
};

export default BudgetCard;
