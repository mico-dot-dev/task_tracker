"use server";

import { GetAuthUser } from "@/src/actions/auth.action";
import { ActionResponse } from "@/src/types/auth";
import { CategoryModel } from "@/src/types/category";
import { prisma } from "@/src/lib/prisma-client";
export async function CreateTask(
  data: CategoryModel,
): Promise<ActionResponse<CategoryModel>> {
  try {
    const user = await GetAuthUser();
    if (!user.success) {
      throw new Error("User not authenticated");
    }

    const newCategory = await prisma.task_category.create({
      data: {
        title: data.title,
        user_id: user.data.user,
      },
    });

    if (!newCategory.title) {
      throw new Error("Failed to create category");
    }

    return {
      success: true,
      data: { title: newCategory.title },
    };
  } catch (error) {
    console.error("Error creating category:", error);
    throw new Error("Failed to create category");
  }
}
