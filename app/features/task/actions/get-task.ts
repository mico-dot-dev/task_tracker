import { prisma } from "@/app/lib/prisma-client";
import { supabaseServer } from "@/app/lib/supabase/server";
import { TaskListModel } from "../types";

export async function getUserTasks() {
  try {
    const supabase = await supabaseServer();
    const { data, error } = await supabase.auth.getUser();
    const userTasks = await prisma.tasks.findMany({
      where: {
        user_id: data.user?.id, //
      },
    });

    const parsedTasks: TaskListModel[] = userTasks.map((task) => ({
      id: task.id.toString(),
      title: task.title!,
      description: task.description!,
      completed: task.completed!,
    }));

    return {
      ok: true,
      data: parsedTasks,
    };
  } catch (error) {
    // throw new Error("Failed to fetch user tasks");
    // console.log("Error fetching user tasks:", error);
  }
}
