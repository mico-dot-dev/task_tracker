"use server";

import { prisma } from "@/src/lib/prisma-client";
import { supabaseServer } from "@/src/lib/supabase/server";
import {
  TaskListModel,
  TaskFormSchema,
  TaskFormModelInput,
  ActionResponse,
} from "@/src/types/task";
import { category, tasks } from "@/src/generated/prisma";
import { ca } from "zod/locales";
import { revalidatePath } from "next/cache";

async function GetAuthUser(): Promise<ActionResponse<{ user: string }>> {
  try {
    const supabase = await supabaseServer();
    const { data, error } = await supabase.auth.getUser();
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

    return {
      success: true,
      data: parsedTasks,
    };
  } catch (error) {
    console.log("Error fetching user tasks:", error);
    throw new Error("Failed to fetch user tasks");
  }
}

export async function CreateTask(data: TaskFormModelInput) {
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
        title: parsedTask.data.title,
        description: parsedTask.data.description,
        completed: parsedTask.data.completed,
        user_id: user.data.user,
        task_category: parsedTask.data.category,
      },
    });

    revalidatePath("/(dashboard)/tasks");
    return {
      success: true,
      data: newTask,
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

    console.log("Toggling completion for task:", taskID);
  } catch (error) {
    console.error("Error occurred while updating task completion:", error);
    throw new Error("Failed to update task completion");
  }
}
