import { z } from "zod";

export const TaskSchema = z.object({
  user_id: z.number().int().positive(),
  title: z.string(),
  description: z.string(),
  completed: z.boolean().default(false),
});
