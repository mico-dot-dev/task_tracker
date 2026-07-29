"use server";

import { prisma } from "@/src/lib/prisma-client";
import {
  DynamicFormOutputtModel,
  DynamicFormInputModel,
  DynamicFormSchema,
  DynamicListModel,
  DynamicFormModel,
} from "@/src/types/expense";
import { ActionResponse } from "../types/auth";
import { GetAuthUser } from "./auth.action";
import { DateRepeatType, ExpenseType, Prisma } from "../generated/prisma";

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
      case ExpenseType.HOUSE:
      case ExpenseType.PERSONAL:
        await prisma.bill_expense.create({
          data: {
            expense_id: res.id,
            repeating_type: expense.repeating_type,
            running_bill: expense.running_bill || 0,
          },
        });
        break;
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
      case ExpenseType.GROCERY:
        await prisma.stock.create({
          data: {
            expense_id: res.id,
            min_amount: expense.min_amount,
          },
        });

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

    const expenseQueryInclude = {
      bill_expense: true,
      transportation_expense: true,
      stock: true,
    } satisfies Prisma.expenseInclude;

    type ExpenseWithRelations = Prisma.expenseGetPayload<{
      include: typeof expenseQueryInclude;
    }>;

    function mapPrismaToDomain(item: ExpenseWithRelations): DynamicListModel {
      const common = {
        id: item.id.toString(),
        title: item.name ?? "",
        description: item.description ?? "",
      };

      switch (item.expense_type) {
        case ExpenseType.TRANSPORTATION:
          const rawCosts = item.transportation_expense?.cost_list ?? [];
          return {
            ...common,
            expense_type: ExpenseType.TRANSPORTATION,
            cost_list: rawCosts.map((amount) => ({ amount })),
          };

        case ExpenseType.HOUSE:
        case ExpenseType.PERSONAL:
          return {
            ...common,
            expense_type: item.expense_type,
            // 💡 Correctly access the nested relational object
            repeating_type:
              item.bill_expense?.repeating_type ?? DateRepeatType.MANUAL,
            running_bill: item.bill_expense?.running_bill ?? 0,
          };

        case ExpenseType.GROCERY:
          return {
            ...common,
            expense_type: ExpenseType.GROCERY,
            // 💡 Correctly access the nested relational object
            min_amount: item.stock?.min_amount ?? 0,
          };

        default:
          return {
            ...common,
            expense_type: item.expense_type ?? ExpenseType.MISC,
          };
      }
    }

    const userExpenses = await prisma.expense.findMany({
      where: { user_id: user.data.user },
      include: expenseQueryInclude, // 💡 Bind the constant to the query
      orderBy: { expense_type: "asc" },
    });

    const parsedExpense: DynamicListModel[] =
      userExpenses.map(mapPrismaToDomain);

    return {
      success: true,
      data: parsedExpense,
    };
  } catch (e) {
    console.log("Error fetching user expense:", e);
    throw new Error("Failed to fetch user tasks");
  }
}
