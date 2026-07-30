import { ExpenseType } from "@/src/generated/prisma";
import { DynamicFormModel } from "@/src/types/expense";

export interface ExpenseSubContent {
  primary: string;
  secondary: string;
}

export function getExpenseSubContent(
  expense: DynamicFormModel,
): ExpenseSubContent {
  let subContent: ExpenseSubContent = {
    primary: "",
    secondary: "",
  };
  switch (expense.expense_type) {
    case ExpenseType.HOUSE:
    case ExpenseType.PERSONAL:
      const type = expense.repeating_type;
      const formattedLabel =
        type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
      subContent = {
        primary: formattedLabel,
        secondary: "₱" + expense.running_bill.toString(),
      };
      break;
    case ExpenseType.TRANSPORTATION:
      break;
    case ExpenseType.GROCERY:
      subContent = {
        primary: expense.min_amount.toString(),
        secondary: "",
      };
      break;
    case ExpenseType.MISC:
    default:
  }

  return subContent;
}
