import React from "react";
import ExpenseItemCard from "@/src/components/expenses/ExpenseItemCard";
import { GetUserExpenses } from "@/src/actions/expense.action";

async function ExpenseList() {
  const expenses = await GetUserExpenses();
  if (!expenses.success) {
    return <p>Expense Data Not Found</p>;
  }
  return (
    <ul className="card-list-base grid-cols-2">
      {expenses.data.map((expense) => (
        <ExpenseItemCard Expense={expense} key={expense.id} />
      ))}
    </ul>
  );
}

export default ExpenseList;
