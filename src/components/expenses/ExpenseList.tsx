import React from "react";
import { GetUserExpenses } from "@/src/actions/expense.action";
import ExpenseItemCard from "@/src/components/expenses/ExpenseItemCard";
import { ListParams } from "@/src/type/page-types";

interface TaskListProps {
  searchParams?: ListParams;
}

async function ExpenseList({ searchParams }: TaskListProps) {
  const expenses = await GetUserExpenses({ ...searchParams });
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
