import React from "react";

import { bikeBudgets } from "@/lib/budget";
import BudgetCard from "@/components/features/AllCards/BudgetCard";

const Budget = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {bikeBudgets.map((budget) => (
        <BudgetCard key={budget.id} range={budget.range} />
      ))}
    </div>
  );
};

export default Budget;
