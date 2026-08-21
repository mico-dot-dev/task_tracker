// import { ExpenseType } from "@/src/generated/prisma";
// import { DynamicListModel } from "@/src/schema/expense.schema";

// export interface ExpenseSubContent {
//   primary: string;
//   secondary: string;
// }

// export function getExpenseSubContent(
//   expense: DynamicListModel,
// ): ExpenseSubContent {
//   let subContent: ExpenseSubContent = {
//     primary: "",
//     secondary: "",
//   };
//   switch (expense.expense_type) {
//     case ExpenseType.HOUSE:
//     case ExpenseType.PERSONAL:
//       const type = expense.repeating_type;
//       const formattedLabel =
//         type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
//       subContent = {
//         primary: formattedLabel,
//         secondary: "Repeating Cost: " + "₱" + expense.running_bill.toString(),
//       };
//       break;
//     case ExpenseType.TRANSPORTATION:
//       break;
//     case ExpenseType.GROCERY:
//       subContent = {
//         primary:
//           "Current Amount: " +
//           (expense.curr_amount ? expense.curr_amount.toString() : "0"),
//         secondary: "Minimum Amount: " + expense.min_amount.toString(),
//       };
//       break;
//     case ExpenseType.MISC:
//     default:
//   }

//   return subContent;
// }
