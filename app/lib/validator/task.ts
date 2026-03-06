import { z } from "zod";

export const TaskSchema = z.object({
  user_id: z.string(),
  title: z.string(),
  description: z.string(),
  completed: z.boolean().default(false),
});
