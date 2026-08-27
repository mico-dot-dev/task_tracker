"use server";

import { prisma } from "@/src/lib/prisma-client";
import { ActionResponse } from "@/src/schema/auth.schema";
import { GetAuthUser } from "./auth.action";
import { StockModel } from "../schema/stock.schema";
import { TaskFormModelOutput } from "@/src/schema/task.schema";
import { CategoryListModel } from "@/src/schema/category.schema";
import { revalidatePath } from "next/cache";

export async function GetUserStock(): Promise<ActionResponse<StockModel[]>> {
  try {
    const user = await GetAuthUser();
    if (!user.success) {
      return {
        success: false,
        error: "User not authenticated",
      };
    }

    const userStock = await prisma.expense.findMany({
      where: {
        user_id: user.data.user,
        stock: {
          isNot: null,
        },
      },
      include: {
        stock: true,
      },
    });

    const parsedStock: StockModel[] = userStock.map((stock) => {
      if (stock.stock === null) {
        throw new Error("Stock data is null");
      }
      return {
        id: stock.stock?.id.toString(),
        name: stock.name!,
        description: stock.description!,
        curr_amount: stock.stock?.curr_amount || 0,
        min_amount: stock.stock?.min_amount || 0,
      };
    });

    return {
      success: true,
      data: parsedStock,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: "Get Stock Error",
    };
  }
}

export async function ManageStockAmount(
  stock: StockModel,
  action: "increment" | "decrement",
) {
  try {
    if (action === "decrement" && stock.curr_amount <= 0) {
      throw new Error("Current amount cannot be less than 0");
    }

    const updatedStock = await prisma.stock.update({
      where: {
        id: parseInt(stock.id),
      },
      select: {
        curr_amount: true,
        min_amount: true,
        expense: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      data: {
        curr_amount:
          action === "increment"
            ? stock.curr_amount + 1
            : stock.curr_amount - 1,
      },
    });

    if (!updatedStock || updatedStock.curr_amount === null) {
      throw new Error("Failed to update stock amount");
    }

    const stockTaskCategory = await prisma.task_category.findUnique({
      where: {
        title: "Home",
      },
    });

    if (!stockTaskCategory) throw new Error("Stock task category not found");

    const updateTask: TaskFormModelOutput = {
      title: "Buy " + updatedStock.expense.name,
      description: "",
      category_id: Number(stockTaskCategory.id),
      completed: false,
      priority_level: 0,
      repeating_type: "MANUAL",
      expense_id: Number(updatedStock.expense.id),
    };

    const existingTask = await prisma.task.findFirst({
      where: {
        expense_id: Number(updatedStock.expense.id),
        completed: false,
      },
    });

    if (existingTask && updatedStock.curr_amount >= updatedStock.min_amount) {
      await prisma.task.updateMany({
        where: {
          id: existingTask.id,
        },
        data: {
          completed: true,
        },
      });
    } else if (
      !existingTask &&
      updatedStock.curr_amount < updatedStock.min_amount
    ) {
      await prisma.task.create({
        data: {
          title: updateTask.title,
          description: updateTask.description,
          task_category_id: updateTask.category_id,
          completed: updateTask.completed,
          priority_level: updateTask.priority_level,
          repeating_type: updateTask.repeating_type,
          expense_id: updateTask.expense_id,
        },
      });
    }
    revalidatePath("/(dashboard)/stock");
  } catch (err) {
    console.error("[ManageStockAmount Failure]:", {
      message: err instanceof Error ? err.message : "Unknown error",
      stack: err instanceof Error ? err.stack : undefined,
      stockId: stock.id,
      action,
    });
  }
}
