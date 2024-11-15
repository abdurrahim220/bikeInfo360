import React from "react";

import { bikeBudgets } from "@/lib/budget";
import BudgetCard from "@/components/features/AllCards/BudgetCard";

const Budget = () => {
  return  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
  {bikeBudgets.map((budget) => (
    <BudgetCard key={budget.id} range={budget.range} />
  ))}
</div>;
};

export default Budget;
 