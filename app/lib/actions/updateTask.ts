import { supabaseClient } from "../services/supabase/client";
import { Task } from "../models/task";

export async function ToggleTask(task: Task) {
  const supabaseClientBrowser = await supabaseClient();
  try {
    const { error } = await supabaseClientBrowser
      .from("tasks")
      .update({ completed: !task.completed })
      .eq("id", task.id);
    if (error) {
      throw new Error(`Failed to update task: ${error.message}`);
    }
    return { ...task, completed: !task.completed };
  } catch (error) {
    console.log("updateTask error:", error);
    throw new Error(`UpdateTaskCompletion failed: ${(error as Error).message}`);
  }
}
