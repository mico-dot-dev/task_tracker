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
import { task } from "@/src/generated/prisma";
import { revalidatePath } from "next/cache";

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
        task: true,
      },
    });

    const flattenedTasks: task[] = rawTaskData.flatMap((row) => row.task);

    const parsedTasks: TaskListModel[] = flattenedTasks.map((task: task) => ({
      id: task.id!.toString(),
      title: task.title!,
      description: task.description!,
      completed: task.completed!,
      category_id: Number(task.task_category_id!),
    }));

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
      return {
        success: false,
        error: "Validation failed.",
        fieldErrors: parsedTask.error.flatten().fieldErrors as Record<
          string,
          string[]
        >,
      };
    }

    const newTask = await prisma.task.create({
      data: {
        title: parsedTask.data.title!,
        description: parsedTask.data.description!,
        completed: parsedTask.data.completed!,
      },
    });

    revalidatePath("/(dashboard)/tasks");
    return {
      success: true,
      data: {
        title: newTask.title!,
        description: newTask.description!,
        completed: newTask.completed!,
        category_id: Number(newTask.task_category_id!),
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
    console.log("Fetching task by ID:", taskID);
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
        category_id: Number(task.task_category_id!),
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
        category_id: Number(updatedTask.task_category_id!),
      },
    };
  } catch (error) {
    throw new Error("Failed to update task");
  }
}
