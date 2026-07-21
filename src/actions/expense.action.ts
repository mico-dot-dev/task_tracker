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
