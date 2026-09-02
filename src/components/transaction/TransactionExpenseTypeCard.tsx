"use client";

import { twJoin } from "tailwind-merge";
import { expenseIconProps } from "@/src/lib/utils/expense-mapper";
import { ExpenseType } from "@/src/generated/prisma";

type expenseButtonProps = {
  isSelected: boolean;
  expenseType: ExpenseType;
  iconConfig: expenseIconProps;
  onSelectType: (type: ExpenseType) => void;
};

function ExpenseTypeCard({
  isSelected,
  expenseType,
  iconConfig,
  onSelectType,
}: expenseButtonProps) {
  const IconComponent = iconConfig.icon;

  return (
    <button
      className={twJoin(
        "border border-border w-full cursor-pointer flex mb-3 py-3.5",
        isSelected && "border-primary",
      )}
      type="button"
      onClick={() => onSelectType(expenseType)}
    >
      <div className=" mx-3 p-2">
        <IconComponent />
      </div>
      <div className="flex flex-col text-start">
        <p className="p-0 m-0 ">{iconConfig.title}</p>
        <p className="text-xs text-muted-text">{iconConfig.description}</p>
      </div>
    </button>
  );
}

export default ExpenseTypeCard;
