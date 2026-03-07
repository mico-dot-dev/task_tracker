import { GetTasksByUserId } from "@/app/lib/services/task";
import { cookies } from "next/headers";
export async function GET() {
  try {
    const cookieStore = await cookies();
    const user_id = cookieStore.get("user_id")?.value;
    if (!user_id) {
      return new Response("Unauthorized", { status: 401 });
    }

    const tasks = await GetTasksByUserId(user_id);
    return new Response(JSON.stringify(tasks));
  } catch (error) {
    console.log("update-task:", error);
  }
}
