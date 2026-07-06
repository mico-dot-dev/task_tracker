import { z } from "zod";

export const TaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters"),
  description: z
    .string()
    .max(255, "Description must be less than 255 characters")
    .optional(),
  completed: z.boolean().default(false),
  category_id: z.number().int(),
});

export const TaskListSchema = TaskSchema.extend({
  id: z.string(),
});

export const TaskFormSchema = TaskSchema.extend({
  user_id: z.string(),
});

export type TaskListModel = z.infer<typeof TaskListSchema>;
export type TaskFormModelBase = z.input<typeof TaskSchema>;
export type TaskFormModelInput = z.input<typeof TaskFormSchema>;
export type TaskFormModelOutput = z.output<typeof TaskFormSchema>;
export type TaskFormModelUpdate = z.input<typeof TaskListSchema>;
