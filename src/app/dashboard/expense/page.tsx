import React from "react";
import ExpenseAdd from "@/src/components/AddButton/AddButton";
import ExpenseList from "@/src/components/expenses/ExpenseList";

function page() {
  return (
    <div>
      <ExpenseList />
      <ExpenseAdd content="expense" />
    </div>
  );
}

export default page;
