"use server";

import { prisma } from "@/src/lib/prisma-client";
import {
  DynamicFormOutputtModel,
  DynamicFormInputModel,
  DynamicFormSchema,
  DynamicListModel,
} from "@/src/types/expense";
import { ActionResponse } from "../types/auth";
import { GetAuthUser } from "./auth.action";
import { id } from "zod/v4/locales";
import { ExpenseType } from "../generated/prisma";

export async function CreateExpense(
  data: DynamicFormInputModel,
): Promise<ActionResponse<DynamicFormOutputtModel>> {
  try {
    const user = await GetAuthUser();
    if (!user.success) {
      throw new Error("User not authenticated");
    }

    const parsedData = DynamicFormSchema.safeParse(data);
    if (!parsedData.success) {
      throw new Error("Parse Error");
    }

    const expense: DynamicFormOutputtModel = parsedData.data;

    const res = await prisma.expense.create({
      data: {
        name: expense.title,
        description: expense.description,
        expense_type: expense.expense_type,
        user_id: user.data.user,
      },
    });

    switch (expense.expense_type) {
      case ExpenseType.TRANSPORTATION:
        const costList: number[] = expense.cost_list.map(
          (item: { amount: number }) => item.amount,
        );
        await prisma.transportation_expense.create({
          data: {
            expense_id: res.id,
            cost_list: costList,
          },
        });

        break;
      default:
    }

    return {
      success: true,
      data: expense,
    };
  } catch (e) {
    const message =
      e instanceof Error ? e.message : "An unknown error occurred";

    return {
      success: false,
      error: message,
    };
  }
}

export async function GetUserExpenses(): Promise<
  ActionResponse<DynamicListModel[]>
> {
  try {
    const user = await GetAuthUser();
    if (!user.success) {
      throw new Error("User not authenticated");
    }

    const userExpense = await prisma.expense.findMany({
      where: {
        user_id: user.data.user,
      },
      orderBy: {
        name: "asc",
      },
    });

    const groupedExpense = Object.groupBy(
      userExpense,
      (item) => item.expense_type ?? "MISC",
    );

    const parsedExpense: DynamicListModel[] = Object.entries(
      groupedExpense,
    ).flatMap(([category, expenses]) => {
      return (expenses ?? []).map((item) => ({
        id: item.id.toString(),
        title: item.name!,
        description: item.description!,
        expense_type: ExpenseType.TRANSPORTATION,
        cost_list: [],
      }));
    });

    return {
      success: true,
      data: parsedExpense,
    };
  } catch (e) {
    console.log("Error fetching user expense:", e);
    throw new Error("Failed to fetch user tasks");
  }
}
