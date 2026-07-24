import z from "zod";
import { ExpenseType } from "@/src/generated/prisma";

const ExpenseSchema = z.object({
  title: z.string(),
  description: z.string(),
  expense_type: z.nativeEnum(ExpenseType),
});

const ManualFormSchema = ExpenseSchema.extend({
  ...ExpenseSchema,
  content: z.literal("misc"),
});

const TranspoFormSchema = ExpenseSchema.extend({
  ...ExpenseSchema,
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
  ManualFormSchema,
  TranspoFormSchema,
]);

//For List/Fetch
export const TranspoListSchema = TranspoFormSchema.extend({
  id: z.string(),
});

export const DynamicListSchema = z.discriminatedUnion("content", [
  TranspoListSchema,
]);

export type TranspoFormModel = z.infer<typeof TranspoFormSchema>;
export type DynamicFormInputModel = z.input<typeof DynamicFormSchema>;
export type DynamicFormOutputtModel = z.infer<typeof DynamicFormSchema>;
export type DynamicListModel = z.infer<typeof DynamicListSchema>;
