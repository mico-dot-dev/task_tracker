import React from "react";
import { twJoin } from "tailwind-merge";
import { DynamicListModel } from "@/src/schema/expense.schema";

interface TransactionExpenseCardProps {
  data: DynamicListModel;
  isSelected: boolean;
  onSelectType: (type: number) => void;
}

function TransactionExpenseCard({
  data,
  isSelected,
  onSelectType,
}: TransactionExpenseCardProps) {
  return (
    <button
      key={data.id}
      type="button"
      className={twJoin(
        "border border-border w-full cursor-pointer flex py-3.5",
        isSelected && "border-primary",
      )}
      onClick={() => {
        onSelectType(Number(data.id));
      }}
    >
      {data.title}
    </button>
  );
}

export default TransactionExpenseCard;
