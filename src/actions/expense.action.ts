"use server";

import { prisma } from "@/src/lib/prisma-client";
import {
  DynamicFormOutputtModel,
  DynamicFormInputModel,
  DynamicFormSchema,
} from "@/src/types/expense";
import { ActionResponse } from "../types/auth";
import { GetAuthUser } from "./auth.action";

export async function CreateExpense(
  data: DynamicFormInputModel,
): Promise<ActionResponse<DynamicFormOutputtModel>> {
  try {
    const parsedData = DynamicFormSchema.parse(data);
    const user = await GetAuthUser();

    if (!user.success) {
      throw new Error("User not authenticated");
    }

    const res = await prisma.expense.create({
      data: {
        name: parsedData.title,
        description: parsedData.description,
        expense_type: parsedData.expense_type,
        user_id: user.data.user,
      },
    });

    switch (parsedData.content) {
      case "transpo":
        console.log("Transpo Case");
        const costList: number[] = parsedData.cost_list.map(
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
      data: parsedData,
    };
  } catch (e) {
    return {
      success: false,
      error: e as string,
    };
  }
}

export async function GetUserExpenses(): Promise<
  ActionResponse<DynamicFormOutputtModel[]>
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

    const parsedExpense: DynamicFormOutputtModel[] = Object.entries(
      groupedExpense,
    ).flatMap(([category, expenses]) =>
      (expenses ?? []).map((item) => ({
        title: item.name!,
        description: item.description!,
        expense_type: item.expense_type!,
        content: "misc",
      })),
    );

    return {
      success: true,
      data: parsedExpense,
    };
  } catch (e) {
    console.log("Error fetching user expense:", e);
    throw new Error("Failed to fetch user tasks");
  }
}
