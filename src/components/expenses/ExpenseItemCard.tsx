"use client";

import { DynamicListModel } from "@/src/schema/expense.schema";
import { EllipsisVertical } from "lucide-react";
import {
  expenseCardSubContent,
  getExpenseListSubContent,
  expenseIconMap,
} from "@/src/lib/utils/expense-mapper";
import { twJoin } from "tailwind-merge";

interface ExpenseItemProps {
  Expense: DynamicListModel;
}

function ExpenseItemCard({ Expense }: ExpenseItemProps) {
  const expenseIconInfo = expenseIconMap[Expense.expense_type];
  const IconComponent = expenseIconInfo.icon;
  const subInfo: expenseCardSubContent = getExpenseListSubContent(Expense);

  return (
    <li className="card-container-base flex flex-col p-5">
      <div className="flex flex-row pb-3 border-b border-border">
        <div
          className={twJoin(
            "self-center justify-items-center content-center w-10 h-10 mr-3 rounded-md bg-",
            expenseIconInfo.bg,
          )}
        >
          {" "}
          <IconComponent size={25} strokeWidth={1.5} />
        </div>

        <div className="flex-1">
          {" "}
          <p>{Expense.title}</p>
          <p className="text-sm text-muted-text">{Expense.description}</p>
        </div>
        <div className="">
          <EllipsisVertical size={20} />
        </div>
      </div>

      <div className="flex flex-row items-end justify-between pt-3">
        <p>{subInfo.primary}</p>
        <p className="text-sm text-muted-text">{subInfo.secondary}</p>
      </div>
    </li>
  );
}

export default ExpenseItemCard;
