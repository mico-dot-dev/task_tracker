import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type AuthModel = z.infer<typeof AuthSchema>;
