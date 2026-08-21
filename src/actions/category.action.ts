"use server";

import { GetAuthUser } from "@/src/actions/auth.action";
import { ActionResponse } from "@/src/schema/auth.schema";
import {
  CategoryFormModel,
  CategoryListModel,
} from "@/src/schema/category.schema";
import { prisma } from "@/src/lib/prisma-client";

export async function GetUserCategory(): Promise<
  ActionResponse<CategoryListModel[]>
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
      orderBy: {
        title: "asc",
      },
    });

    if (categories[0] === undefined) {
      return {
        success: true,
        data: [],
      };
    }

    const parsedCategories: CategoryListModel[] = categories.map(
      (category) => ({
        id: Number(category.id),
        title: category.title || "",
      }),
    );

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
  data: CategoryFormModel,
): Promise<ActionResponse<CategoryFormModel>> {
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
