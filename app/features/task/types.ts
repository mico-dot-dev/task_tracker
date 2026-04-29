import { z } from "zod";

export const TaskListSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  completed: z.boolean(),
});

export type TaskListModel = z.infer<typeof TaskListSchema>;
