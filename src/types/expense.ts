import z from "zod";
import { ExpenseType } from "@/src/generated/prisma";

const ExpenseSchema = z.object({
  title: z.string(),
  description: z.string(),
  expense_type: z.nativeEnum(ExpenseType),
});

const ManualExpenseSchema = ExpenseSchema.extend({
  content: z.literal("misc"),
});

const TranspoExpenseSchema = ExpenseSchema.extend({
  content: z.literal("transpo"),
  cost_list: z
    .array(
      z.object({
        amount: z.coerce.number().int("Value must be an integer"),
      }),
    )
    .min(1, "Add at least one cost"),
});

export const DynamicFormSchema = z.discriminatedUnion("content", [
  ManualExpenseSchema,
  TranspoExpenseSchema,
]);

export type TranspoExpenseModel = z.infer<typeof TranspoExpenseSchema>;
export type DynamicFormInputModel = z.input<typeof DynamicFormSchema>;
export type DynamicFormOutputtModel = z.infer<typeof DynamicFormSchema>;
