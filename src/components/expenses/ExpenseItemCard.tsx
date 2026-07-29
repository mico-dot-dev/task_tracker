import React, { ReactElement } from "react";
import { DynamicListModel } from "@/src/types/expense";
import { ExpenseType } from "@/src/generated/prisma";
import { House, UserRound, Bus, ShoppingCart, Package } from "lucide-react";

interface ExpenseItemProps {
  Expense: DynamicListModel;
}

function ExpenseItemCard({ Expense }: ExpenseItemProps) {
  const expenseIcon: Record<ExpenseType, ReactElement> = {
    [ExpenseType.HOUSE]: <House />,
    [ExpenseType.PERSONAL]: <UserRound />,
    [ExpenseType.TRANSPORTATION]: <Bus />,
    [ExpenseType.GROCERY]: <ShoppingCart />,
    [ExpenseType.MISC]: <Package />,
  };

  return (
    <li className="card-container-base">
      <div className="flex flex-row m-5">
        {expenseIcon[Expense.expense_type]}
        <div className="flex-1">
          <p>{Expense.title}</p>
          <p className="text-sm text-muted-text">{Expense.description}</p>
        </div>
        <div className="">
          <p>Expense Info</p>
          <p className="text-sm text-muted-text">Expense Info</p>
        </div>
      </div>
    </li>
  );
}

export default ExpenseItemCard;
