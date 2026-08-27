"use server";

import { prisma } from "../lib/prisma-client";
import { ActionResponse } from "../schema/auth.schema";
import {
  TransactionFormModel,
  TransactionListModel,
} from "@/src/schema/transaction.schema";
import { authenticateUser } from "@/src/lib/utils/validation-wrapper";
import { TransactionStatus } from "@/src/generated/prisma";

export async function GetUserTransaction(): Promise<
  ActionResponse<TransactionListModel[]>
> {
  return authenticateUser(async (userId) => {
    try {
      const userTransaction = await prisma.expense.findMany({
        where: {
          user_id: userId,
        },
        select: {
          transaction: true,
          expense_type: true,
          name: true,
        },
      });

      const parsedData: TransactionListModel[] = userTransaction.flatMap(
        (transactionArray) =>
          transactionArray.transaction.map((transaction) => {
            return {
              name: transactionArray.name!,
              expense_type: transactionArray.expense_type!,
              status: transaction.status!,
              amount: transaction.amount,
              price: transaction.price ?? 0,
              date_added: transaction.created_at!,
              due_date: transaction.repeat_at!,
              expense_id: transaction.expense_id!.toString(),
            };
          }),
      );

      return {
        success: true,
        data: parsedData,
      };
    } catch (e) {
      return { success: false, error: "" };
    }
  });

  // try {

  //   const userTransaction = await prisma.expense.findMany({
  //     where: {
  //       user_id: user.data.user,
  //     },
  //     select: {
  //       transaction: true,
  //     },
  //   });

  //   const t: TransactionListModel[] = [
  //     {
  //       name: "",
  //       expense_type: "GROCERY",
  //       status: "PENDING",
  //       amount: 0,
  //       price: 0,
  //       expense_id: "0",
  //       date_added: new Date(Date.now()),
  //     },
  //   ];

  //   return {
  //     success: true,
  //     data: t,
  //   };
  // } catch (e) {
  //   return {
  //     success: false,
  //     error: "Error in transaction service",
  //   };
  // }
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
