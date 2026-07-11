"use server";

import { prisma } from "@/src/lib/prisma-client";
import {
  TaskListModel,
  TaskFormSchema,
  TaskFormModelInput,
  TaskFormModelUpdate,
  TaskFormModelBase,
} from "@/src/types/task";
import { ActionResponse } from "@/src/types/auth";
import { GetAuthUser } from "@/src/actions/auth.action";
import { revalidatePath } from "next/cache";
import { DateRepeatType } from "@/src/generated/prisma";

export async function GetUserTasks(): Promise<ActionResponse<TaskListModel[]>> {
  try {
    const user = await GetAuthUser();

    if (!user.success) {
      return { success: false, error: "User not authenticated" };
    }

    if (!user.success) {
      return {
        success: false,
        error: "User not authenticated",
      };
    }
    const rawTaskData = await prisma.task_category.findMany({
      where: { user_id: user.data.user },
      select: {
        title: true,
        task: true,
      },
      orderBy: {
        title: "asc",
      },
    });

    if (!rawTaskData) {
      return {
        success: false,
        error: "No tasks found for the user",
      };
    }

    const flattenedTasks: TaskListModel[] = rawTaskData.flatMap(
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
    console.log("Error fetching user tasks:", error);
    throw new Error("Failed to fetch user tasks");
  }
}

export async function CreateTask(
  data: TaskFormModelInput,
): Promise<ActionResponse<TaskFormModelBase>> {
  try {
    const user = await GetAuthUser();
    if (!user.success) {
      return {
        success: false,
        error: "User not authenticated",
      };
    }

    const parsedTask = TaskFormSchema.safeParse(data);

    if (!parsedTask.success) {
      console.error("Invalid task data:", parsedTask.error);
      throw new Error("Invalid task data: " + JSON.stringify(parsedTask.error));
    }

    const newTask = await prisma.task.create({
      data: {
        title: parsedTask.data.title!,
        description: parsedTask.data.description!,
        completed: parsedTask.data.completed!,
        task_category_id: parsedTask.data.category_id,
        priority_level: 0,
        repeating_type: DateRepeatType.MANUAL, // Default to Manual if not provided
      },
    });

    revalidatePath("/(dashboard)/tasks");
    return {
      success: true,
      data: {
        title: newTask.title!,
        description: newTask.description!,
        completed: newTask.completed!,
        priority_level: newTask.priority_level!,
        repeating_type: newTask.repeating_type!,
      },
    };
  } catch (error) {
    console.log("Error creating task:", error);
    throw new Error("Failed to create task");
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

export async function DeleteTask(taskID: string) {
  try {
    const tasknum = parseInt(taskID, 10);
    if (isNaN(tasknum)) throw new Error(`Invalid task ID: ${taskID}`);

    const task = await prisma.task.findUnique({
      select: { id: true },
      where: { id: tasknum },
    });

    if (!task) throw new Error(`Task not found: ${taskID}`);

    await prisma.task.delete({
      where: { id: tasknum },
    });
    revalidatePath("/(dashboard)/tasks");

    console.log("Deleting task:", taskID);
  } catch (error) {
    console.error("Error occurred while deleting task:", error);
    throw new Error("Failed to delete task");
  }
}

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

export async function UpdateTask(
  data: TaskFormModelUpdate,
): Promise<ActionResponse<TaskFormModelBase>> {
  try {
    const tasknum = parseInt(data.id, 10);

    if (isNaN(tasknum)) throw new Error(`Invalid task ID: ${data.id}`);

    const updatedTask = await prisma.task.update({
      where: { id: tasknum },
      data: {
        title: data.title,
        description: data.description,
        completed: data.completed,
      },
    });
    revalidatePath("/(dashboard)/tasks");
    return {
      success: true,
      data: {
        title: updatedTask.title!,
        description: updatedTask.description!,
        completed: updatedTask.completed!,
        priority_level: 0,
        repeating_type: DateRepeatType.MANUAL, // Default to Manual if not provided
      },
    };
  } catch (error) {
    throw new Error("Failed to update task");
  }
}
