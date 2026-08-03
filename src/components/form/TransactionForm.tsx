import React from "react";
import { ExpenseType } from "@/src/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";

interface AddFormProps {
  closeModal: () => void;
}

function TransactionForm({ closeModal }: AddFormProps) {
  return (
    <form>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="">Choose an Expense Type</label>
        <select name="" id="" className="input-base p-2">
          {Object.values(ExpenseType).map((type) => {
            const formattedLabel =
              type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
            return (
              <option key={type} value={type}>
                {formattedLabel}
              </option>
            );
          })}
        </select>
      </fieldset>
    </form>
  );
}

export default TransactionForm;
