import { supabaseClient } from "../services/supabase/client";

export async function ToggleTask(taskId: number) {
  try {
    // Fetch current task to get current completion status
    const { data: currentTask, error: fetchError } = await supabaseClient
      .from("tasks")
      .select("completed")
      .eq("id", taskId)
      .single();

    if (fetchError) {
      throw new Error(`Failed to fetch task: ${fetchError.message}`);
    }

    // Invert the boolean
    const { data, error } = await supabaseClient
      .from("tasks")
      .update({ completed: !currentTask })
      .eq("id", taskId);

    if (error) {
      throw new Error(`Failed to update task: ${error.message}`);
    }

    console.log("Updated task data:");
    console.log(data);

    return data;
  } catch (error) {
    throw new Error(`UpdateTaskCompletion failed: ${(error as Error).message}`);
  }
}
