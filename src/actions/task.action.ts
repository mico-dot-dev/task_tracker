"use server";

import { prisma } from "@/src/lib/prisma-client";
import {
  TaskListModel,
  TaskFormSchema,
  TaskFormModelInput,
  TaskFormModelUpdate,
  TaskFormModelBase,
} from "@/src/schema/task.schema";
import { ActionResponse } from "@/src/schema/auth.schema";
import { authenticateUser } from "@/src/lib/utils/validation-wrapper";
import { revalidatePath } from "next/cache";
import { DateRepeatType, Prisma } from "@/src/generated/prisma";
import { ReturnErrorMessage } from "@/src/hook/ReturnErrorMessage";
import { ListParams } from "../type/page-types";

export async function GetUserTasks({
  category,
  searchText,
  filter,
  groupBy,
}: ListParams): Promise<ActionResponse<TaskListModel[]>> {
  try {
    const rawTaskData = await authenticateUser(async (userId) => {
      const data = await prisma.task_category.findMany({
        where: {
          user_id: userId,
          ...(category ? { id: Number(category) } : {}),
        },
        select: {
          title: true,
          task: {
            orderBy: {
              completed: "asc",
            },
          },
        },
      });

      return {
        success: true,
        data: data,
      };
    });

    if (!rawTaskData.success) {
      return {
        success: false,
        error: rawTaskData.error || "Failed to fetch tasks",
      };
    }

    const flattenedTasks: TaskListModel[] = rawTaskData.data.flatMap(
      (TaskListModel) =>
        TaskListModel.task.map((task) => {
          const isValidEnum = Object.values(DateRepeatType).includes(
            task.repeating_type as DateRepeatType,
          );
          return {
            id: task.id!.toString()!,
            title: task.title!,
            description: task.description!,
            completed: task.completed!,
            category: TaskListModel.title!,
            priority_level: 0,
            repeating_type: isValidEnum
              ? (task.repeating_type as DateRepeatType)
              : DateRepeatType.MANUAL, // Default to Manual if not valid
          };
        }),
    );

    const parsedTasks: TaskListModel[] = flattenedTasks.map(
      (task: TaskListModel) => ({
        id: task.id!.toString(),
        title: task.title!,
        description: task.description!,
        completed: task.completed!,
        category: task.category!,
        priority_level: task.priority_level!,
        repeating_type: task.repeating_type,
      }),
    );

    return {
      success: true,
      data: parsedTasks,
    };
  } catch (error) {
    const e = ReturnErrorMessage(error);

    return {
      success: false,
      error: e,
    };
  }
}

export async function CreateTask(
  data: TaskFormModelInput,
): Promise<ActionResponse<TaskFormModelBase>> {
  const { data: parsedTask, error } = TaskFormSchema.safeParse(data);

  if (error) {
    return { success: false, error: "Invalid task data" };
  }
  try {
    const authResult = await authenticateUser(async (user_id) => {
      const category = await prisma.task_category.findFirst({
        where: {
          user_id: user_id,
        },
        select: {
          id: true,
        },
      });

      if (!category) {
        return { success: false, error: "Unauthorized or invalid category." };
      }

      const newTask = await prisma.task.create({
        data: {
          title: parsedTask.title ?? "",
          description: parsedTask.description ?? "",
          completed: parsedTask.completed!,
          task_category_id: parsedTask.category_id,
          priority_level: parsedTask.priority_level,
          repeating_type: parsedTask.repeating_type!,
          due_date: parsedTask.due_date,
        },
      });
      return {
        success: true,
        data: newTask,
      };
    });

    if (!authResult.success) {
      return {
        success: false,
        error: authResult.error || "Authentication failed",
      };
    }

    revalidatePath("/(dashboard)/tasks");

    return {
      success: true,
      data: {
        title: authResult.data.title ?? "",
        description: authResult.data.description ?? "",
        completed: authResult.data.completed!,
        priority_level: parsedTask.priority_level,
        repeating_type: parsedTask.repeating_type!,
        due_date: parsedTask.due_date,
      },
    };
  } catch (error) {
    const e = ReturnErrorMessage(error);
    return {
      success: false,
      error: e,
    };
  }
}

export async function UpdateTaskCompletion(taskID: string) {
  try {
    const tasknum = parseInt(taskID, 10);
    if (isNaN(tasknum)) throw new Error(`Invalid task ID: ${taskID}`);

    const task = await prisma.task.findUnique({
      select: { completed: true },
      where: { id: tasknum },
    });

    if (!task) throw new Error(`Task not found: ${taskID}`);

    const res = await prisma.task.update({
      where: { id: tasknum },
      data: { completed: !task.completed },
    });
    revalidatePath("/(dashboard)/tasks");
  } catch (error) {
    console.error("Error occurred while updating task completion:", error);
    throw new Error("Failed to update task completion");
  }
}

// export async function DeleteTask(taskID: string) {
//   try {
//     const tasknum = parseInt(taskID, 10);
//     if (isNaN(tasknum)) throw new Error(`Invalid task ID: ${taskID}`);

//     const task = await prisma.task.findUnique({
//       select: { id: true },
//       where: { id: tasknum },
//     });

//     if (!task) throw new Error(`Task not found: ${taskID}`);

//     await prisma.task.delete({
//       where: { id: tasknum },
//     });
//     revalidatePath("/(dashboard)/tasks");

//     console.log("Deleting task:", taskID);
//   } catch (error) {
//     console.error("Error occurred while deleting task:", error);
//     throw new Error("Failed to delete task");
//   }
// }

export async function GetTaskByID(
  taskID: string,
): Promise<ActionResponse<TaskListModel>> {
  try {
    const tasknum = parseInt(taskID, 10);
    if (isNaN(tasknum)) throw new Error(`Invalid task ID: ${taskID}`);

    const task = await prisma.task.findUnique({
      where: { id: tasknum },
    });

    if (!task) throw new Error(`Task not found: ${taskID}`);

    return {
      success: true,
      data: {
        id: task.id!.toString(),
        title: task.title!,
        description: task.description!,
        completed: task.completed!,
        category: "",
        priority_level: 0,
        repeating_type: DateRepeatType.MANUAL, // Default to Manual if not provided
      },
    };
  } catch (error) {
    console.error("Error occurred while fetching task by ID:", error);
    throw new Error("Failed to fetch task by ID");
  }
}

// export async function UpdateTask(
//   data: TaskFormModelUpdate,
// ): Promise<ActionResponse<TaskFormModelBase>> {
//   try {
//     const tasknum = parseInt(data.id, 10);

//     if (isNaN(tasknum)) throw new Error(`Invalid task ID: ${data.id}`);

//     const updatedTask = await prisma.task.update({
//       where: { id: tasknum },
//       data: {
//         title: data.title,
//         description: data.description,
//         completed: data.completed,
//       },
//     });
//     revalidatePath("/(dashboard)/tasks");
//     return {
//       success: true,
//       data: {
//         title: updatedTask.title!,
//         description: updatedTask.description!,
//         completed: updatedTask.completed!,
//         priority_level: 0,
//         repeating_type: DateRepeatType.MANUAL, // Default to Manual if not provided
//       },
//     };
//   } catch (error) {
//     throw new Error("Failed to update task");
//   }
// }
