import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type AuthModel = z.infer<typeof AuthSchema>;

export type ActionResponse<T = void> =
  | { success: true; data: T; message?: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };
