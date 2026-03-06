import { CreateTaskDTO } from "@/app/lib/models/task";
import { cookies } from "next/headers";
import { AddTask, GetTasksByUserId } from "@/app/lib/services/task";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const cookieStore = await cookies();
    const task: CreateTaskDTO = {
      user_id: cookieStore.get("user_id")?.value as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      completed: false,
    };

    const result = await AddTask(task);
    if (!result) {
      return new Response("Failed to add task", { status: 500 });
    }
    return new Response("Task added successfully", { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}

// export async function GET(request: Request) {
//   try {
//     const cookieStore = await cookies();
//     const user_id = Number(cookieStore.get("user_id")?.value);
//     if (!user_id) {
//       return new Response("Unauthorized", { status: 401 });
//     }

//     const tasks = await GetTasksByUserId(user_id);
//     if (!tasks) {
//       return new Response("Failed to fetch tasks", { status: 500 });
//     }
//     return new Response(JSON.stringify(tasks), { status: 200 });
//   } catch (error) {
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }
