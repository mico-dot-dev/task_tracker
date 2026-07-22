import React from "react";
import ExpenseAdd from "@/src/components/AddButton/AddButton";
import ExpenseItemCard from "@/src/components/expenses/ExpenseItemCard";

function page() {
  return (
    <div>
      <ExpenseItemCard />
      <ExpenseAdd content="expense" />
    </div>
  );
}

export default page;
