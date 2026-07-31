import React, { ReactElement } from "react";
import { DynamicListModel } from "@/src/types/expense";
import { ExpenseType } from "@/src/generated/prisma";
import {
  House,
  UserRound,
  Bus,
  ShoppingCart,
  Package,
  LucideIcon,
  EllipsisVertical,
} from "lucide-react";
import {
  ExpenseSubContent,
  getExpenseSubContent,
} from "@/src/lib/formatter/expense";

interface ExpenseItemProps {
  Expense: DynamicListModel;
}

const expenseIconMap: Record<ExpenseType, LucideIcon> = {
  [ExpenseType.HOUSE]: House,
  [ExpenseType.PERSONAL]: UserRound,
  [ExpenseType.TRANSPORTATION]: Bus,
  [ExpenseType.GROCERY]: ShoppingCart,
  [ExpenseType.MISC]: Package,
};

function ExpenseItemCard({ Expense }: ExpenseItemProps) {
  const IconComponent = expenseIconMap[Expense.expense_type];
  const subInfo: ExpenseSubContent = getExpenseSubContent(Expense);

  return (
    <li className="card-container-base">
      <div className="flex flex-row m-5">
        <div className="self-center justify-items-center content-center w-10 h-10 mr-3 text-muted-icon rounded-md bg-foreground">
          {" "}
          <IconComponent size={25} strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <p>{Expense.title}</p>
          <p className="text-sm text-muted-text">{Expense.description}</p>
          <div className="flex flex-row items-end justify-between">
            <p>{subInfo.primary}</p>
            <p className="text-sm text-muted-text">{subInfo.secondary}</p>
          </div>
        </div>
        <div>
          <EllipsisVertical size={20} />
        </div>
      </div>
    </li>
  );
}

export default ExpenseItemCard;
