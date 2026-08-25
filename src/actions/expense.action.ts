"use server";

import { prisma } from "@/src/lib/prisma-client";
import {
  DynamicFormInputModel,
  DynamicFormSchema,
  DynamicListModel,
  DynamicFormModel,
} from "@/src/schema/expense.schema";
import { ActionResponse } from "../schema/auth.schema";
import { GetAuthUser } from "./auth.action";
import { DateRepeatType, ExpenseType, Prisma } from "../generated/prisma";
import { authenticateUser } from "../lib/utils/validation-wrapper";
import { ListParams } from "@/src/type/page-types";

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
    case ExpenseType.PERSONAL: {
      return {
        ...common,
        expense_type: item.expense_type,
        // 💡 Correctly access the nested relational object
        repeating_type:
          item.bill_expense?.repeating_type ?? DateRepeatType.MANUAL,
        running_bill: item.bill_expense?.running_bill ?? 0,
      };
    }

    case ExpenseType.GROCERY: {
      return {
        ...common,
        expense_type: ExpenseType.GROCERY,
        // 💡 Correctly access the nested relational object
        curr_amount: item.stock?.curr_amount ?? 0,
        min_amount: item.stock?.min_amount ?? 0,
      };
    }

    default: {
      return {
        ...common,
        expense_type: item.expense_type ?? ExpenseType.MISC,
      };
    }
  }
}

export async function CreateExpense(
  data: DynamicFormInputModel,
): Promise<ActionResponse<DynamicFormModel>> {
  const parsedData = DynamicFormSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error("Parse Error");
  }
  try {
    const user = await GetAuthUser();
    if (!user.success) {
      throw new Error("User not authenticated");
    }

    const expense: DynamicFormModel = parsedData.data;

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

        if (expense.repeating_type !== DateRepeatType.MANUAL) {
        }
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

export async function GetUserExpenses({
  category,
  filter,
  groupBy,
  searchText,
}: ListParams): Promise<ActionResponse<DynamicListModel[]>> {
  return authenticateUser(async (userId) => {
    const validType =
      category && Object.values(ExpenseType).includes(category as ExpenseType)
        ? (category as ExpenseType)
        : undefined;

    console.log(category);

    try {
      const userExpenses = await prisma.expense.findMany({
        where: {
          user_id: userId,
          ...(category ? { expense_type: validType } : {}),
        },
        include: expenseQueryInclude,
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
      return {
        success: false,
        error: "e",
      };
    }
  });
}

export async function GetUserExpenseByType(
  type: ExpenseType,
): Promise<ActionResponse<DynamicListModel[]>> {
  const userExpense = await authenticateUser(async (userId) => {
    return {
      success: true,
      data: await prisma.expense.findMany({
        where: { user_id: userId, expense_type: type },
        include: expenseQueryInclude,
        orderBy: { name: "desc" },
      }),
    };
  });

  if (!userExpense.success) return { success: false, error: userExpense.error };
  const mappedExpense: DynamicListModel[] =
    userExpense.data.map(mapPrismaToDomain);

  return {
    success: true,
    data: mappedExpense,
  };
}
