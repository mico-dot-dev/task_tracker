"use server";

import { prisma } from "../lib/prisma-client";
import { ActionResponse } from "../schema/auth.schema";
import {
  TransactionFormModel,
  TransactionListModel,
} from "@/src/schema/transaction.schema";
import { GetAuthUser } from "@/src/actions/auth.action";
import { authenticateUser } from "@/src/lib/utils/validation-wrapper";
import { TransactionStatus } from "@/src/generated/prisma";
import { error } from "console";

export async function GetUserTransaction(): Promise<
  ActionResponse<TransactionListModel>
> {
  try {
    const user = await GetAuthUser();
    if (!user.success) {
      throw new Error("User auth Error");
    }

    const userTransaction = await prisma.expense.findMany({
      where: {
        user_id: user.data.user,
      },
      select: {
        transaction: true,
      },
    });

    const t: TransactionListModel = {
      name: "",
      expense_type: "GROCERY",
      status: "PENDING",
      amount: 0,
      price: 0,
      expense_id: "0",
    };

    return {
      success: true,
      data: t,
    };
  } catch (e) {
    return {
      success: false,
      error: "Error in transaction service",
    };
  }
}

export async function CreateUserTransaction(
  data: TransactionFormModel,
): Promise<ActionResponse<{ message: boolean }>> {
  try {
    const newUserTransaction = await authenticateUser(async (user_id) => {
      return {
        success: true,
        data: await prisma.transaction.create({
          data: {
            expense_id: Number(data.expense_id),
            amount: data.amount,
            price: data.price,
            status: TransactionStatus.PENDING,
          },
        }),
      };
    });

    if (!newUserTransaction) {
      return {
        success: false,
        error: "error creating transaction",
      };
    }

    return {
      success: true,
      data: { message: true },
    };
  } catch (e) {
    return {
      success: false,
      error: "e",
    };
  }
}
