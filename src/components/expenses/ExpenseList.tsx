import React from "react";
import { GetUserExpenses } from "@/src/actions/expense.action";
import ExpenseItemCard from "@/src/components/expenses/ExpenseItemCard";

async function ExpenseList() {
  const expenses = await GetUserExpenses();
  if (!expenses.success) {
    return <p>Expense Data Not Found</p>;
  }
  return (
    <ul className="flex flex-col gap-5">
      {expenses.data.map((expense) => (
        <ExpenseItemCard Expense={expense} key={expense.id} />
      ))}
    </ul>
  );
}

export default ExpenseList;
