"use server";

import { prisma } from "@/src/lib/prisma-client";
import { ActionResponse } from "@/src/types/auth";
import { GetAuthUser } from "./auth.action";
import { StockModel } from "../types/stock";
import { revalidatePath } from "next/cache";

export async function GetUserStock(): Promise<ActionResponse<StockModel[]>> {
  try {
    const user = await GetAuthUser();
    if (!user.success) {
      throw new Error("User not authenticated");
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
    throw new Error("Error fetching user stock");
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

    await prisma.stock.update({
      where: {
        id: parseInt(stock.id),
      },
      data: {
        curr_amount:
          action === "increment"
            ? stock.curr_amount + 1
            : stock.curr_amount - 1,
      },
    });
  } catch (err) {
    console.log("error updating stock amount:", err);
  }
}
