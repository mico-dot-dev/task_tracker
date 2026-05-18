import { z } from "zod";
import { category } from "@/src/generated/prisma";

const TaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters"),
  description: z
    .string()
    .max(255, "Description must be less than 255 characters")
    .optional(),
  completed: z.boolean().default(false),
  category: z.nativeEnum(category).default(category.OTHER),
});

export const TaskListSchema = TaskSchema.partial().extend({
  id: z.string(),
});

export const TaskFormSchema = TaskSchema.partial().extend({
  user_id: z.string(),
});

export type TaskListModel = z.infer<typeof TaskListSchema>;
export type TaskFormModel = z.infer<typeof TaskFormSchema>;

export type ActionResponse<T = void> =
  | { success: true; data: T; message?: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };
