import z from "zod";

export const CategorySchema = z.object({
  title: z
    .string()
    .min(2, { message: "Category name must be at least 2 characters long" })
    .max(100, { message: "Category name must be at most 100 characters long" }),
});

export type CategoryModel = z.input<typeof CategorySchema>;
