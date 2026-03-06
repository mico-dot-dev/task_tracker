import { supabaseServer } from "./supabase/server";
import { TaskSchema } from "../validator/task";

export async function AddTask(taskInfo: unknown) {
  try {
    const supabaseServerClient = await supabaseServer();
    const parsedTask = TaskSchema.parse(taskInfo);
    const { data, error } = await supabaseServerClient.from("tasks").insert({
      user_id: parsedTask.user_id,
      title: parsedTask.title,
      description: parsedTask.description,
      completed: parsedTask.completed,
    });
    if (error) {
      throw new Error(`Failed to add task: ${error.message}`);
    }

    return new Response("Task added successfully", { status: 200 });
  } catch (error) {
    throw new Error(`AddTask failed: ${(error as Error).message}`);
  }
}

export async function GetTasksByUserId(user_id: string) {
  try {
    const supabaseServerClient = await supabaseServer();
    const { data, error } = await supabaseServerClient
      .from("tasks")
      .select("*")
      .eq("user_id", user_id);
    if (error) {
      throw new Error(`Failed to fetch tasks: ${error.message}`);
    }
    return data;
  } catch (error) {
    throw new Error(`GetTasksByUserId failed: ${(error as Error).message}`);
  }
}

// export async function UpdateTaskCompletion(taskId: number) {
//   try {
//     // Fetch current task to get current completion status
//     const { data: currentTask, error: fetchError } = await supabaseServer
//       .from("tasks")
//       .select("completed")
//       .eq("id", taskId)
//       .single();

//     if (fetchError) {
//       throw new Error(`Failed to fetch task: ${fetchError.message}`);
//     }

//     // Invert the boolean
//     const { data, error } = await supabaseServer
//       .from("tasks")
//       .update({ completed: !currentTask.completed })
//       .eq("id", taskId);

//     if (error) {
//       throw new Error(`Failed to update task: ${error.message}`);
//     }

//     return data;
//   } catch (error) {
//     throw new Error(`UpdateTaskCompletion failed: ${(error as Error).message}`);
//   }
// }
