"use server";

import { prisma } from "@/src/lib/prisma-client";
import { supabaseServer } from "@/src/lib/supabase/server";
import {
  TaskListModel,
  TaskFormSchema,
  TaskFormModelInput,
  TaskFormModelUpdate,
  ActionResponse,
  TaskFormModelBase,
} from "@/src/types/task";
import { category, tasks } from "@/src/generated/prisma";
import { revalidatePath } from "next/cache";

async function GetAuthUser(): Promise<ActionResponse<{ user: string }>> {
  try {
    const supabase = await supabaseServer();
    const { data, error } = await supabase.auth.getUser();
    console.log(data);
    if (error || !data.user) {
      return {
        success: false,
        error: "User not authenticated",
      };
    }

    return {
      success: true,
      data: { user: data.user.id },
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to authenticate user",
    };
  }
}

export async function GetUserTasks(): Promise<ActionResponse<TaskListModel[]>> {
  try {
    const user = await GetAuthUser();
    console.log("user: " + user);
    if (!user.success) {
      return {
        success: false,
        error: "User not authenticated",
      };
    }
    const userTasks = await prisma.tasks.findMany({
      where: {
        user_id: user.data.user,
      },
      orderBy: { completed: "asc" },
    });

    const parsedTasks: TaskListModel[] = userTasks.map((task: tasks) => ({
      id: task.id!.toString(),
      title: task.title!,
      description: task.description!,
      completed: task.completed!,
      category: task.task_category as category,
    }));
    console.dir(parsedTasks);

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

    const newTask = await prisma.tasks.create({
      data: {
        title: parsedTask.data.title!,
        description: parsedTask.data.description!,
        completed: parsedTask.data.completed!,
        user_id: user.data.user,
        task_category: parsedTask.data.category,
      },
    });

    revalidatePath("/(dashboard)/tasks");
    return {
      success: true,
      data: {
        title: newTask.title!,
        description: newTask.description!,
        completed: newTask.completed!,
        category: newTask.task_category as category,
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

    const task = await prisma.tasks.findUnique({
      select: { completed: true },
      where: { id: tasknum },
    });

    if (!task) throw new Error(`Task not found: ${taskID}`);

    const res = await prisma.tasks.update({
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

    const task = await prisma.tasks.findUnique({
      select: { id: true },
      where: { id: tasknum },
    });

    if (!task) throw new Error(`Task not found: ${taskID}`);

    await prisma.tasks.delete({
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

    const task = await prisma.tasks.findUnique({
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
        category: task.task_category as category,
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

    const updatedTask = await prisma.tasks.update({
      where: { id: tasknum },
      data: {
        title: data.title,
        description: data.description,
        completed: data.completed,
        task_category: data.category,
      },
    });
    revalidatePath("/(dashboard)/tasks");
    return {
      success: true,
      data: {
        title: updatedTask.title!,
        description: updatedTask.description!,
        completed: updatedTask.completed!,
        category: updatedTask.task_category as category,
      },
    };
  } catch (error) {
    throw new Error("Failed to update task");
  }
}
