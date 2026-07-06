"use server";

import { GetAuthUser } from "@/src/actions/auth.action";
import { ActionResponse } from "@/src/types/auth";
import { CategoryModel } from "@/src/types/category";
import { prisma } from "@/src/lib/prisma-client";

export async function GetUserCategory(): Promise<
  ActionResponse<CategoryModel[]>
> {
  try {
    const user = await GetAuthUser();
    if (!user.success) {
      throw new Error("User not authenticated");
    }

    const categories = await prisma.task_category.findMany({
      where: {
        user_id: user.data.user,
      },
    });

    if (categories[0] === undefined) {
      return {
        success: true,
        data: [],
      };
    }

    const parsedCategories: CategoryModel[] = categories.map((category) => ({
      title: category.title || "",
    }));

    return {
      success: true,
      data: parsedCategories,
    };
  } catch (error) {
    console.error("Error fetching user categories:", error);
    throw new Error("Failed to fetch user categories");
  }
}

export async function CreateCategory(
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
