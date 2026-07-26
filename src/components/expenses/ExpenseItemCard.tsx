import React from "react";
import { DynamicListModel } from "@/src/types/expense";

interface ExpenseItemProps {
  Expense: DynamicListModel;
}

function ExpenseItemCard({ Expense }: ExpenseItemProps) {
  console.log(Expense.title);
  return (
    <li className="card-container-base">
      <p>{Expense.title}</p>
    </li>
  );
}

export default ExpenseItemCard;
