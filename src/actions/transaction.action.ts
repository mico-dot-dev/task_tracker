import { prisma } from "../lib/prisma-client";
import { ActionResponse } from "../schema/auth.schema";
import { TransactionListModel } from "@/src/schema/transaction.schema";
import { GetAuthUser } from "@/src/actions/auth.action";

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
      type: "GROCERY",
      status: "PENDING",
      amount: 0,
      price: 0,
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
