import z from "zod";
import { ExpenseType } from "@/src/generated/prisma";

const ExpenseSchema = z.object({
  title: z.string(),
  description: z.string(),
  expense_type: z.nativeEnum(ExpenseType),
});

const ManualExpenseSchema = ExpenseSchema.extend({
  content: z.literal("manual"),
});

const TranspoExpenseSchema = ExpenseSchema.extend({
  content: z.literal("transpo"),
  cost_list: z.array(z.coerce.number().int("Value must be an integer")),
});

export const DynamicFormSchema = z.discriminatedUnion("content", [
  ManualExpenseSchema,
  TranspoExpenseSchema,
]);

export type DynamicFormModel = z.input<typeof DynamicFormSchema>;
