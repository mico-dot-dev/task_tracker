"use server";

import { UserInfo } from "@/app/lib/models/user";
import { loginUser } from "@/app/lib/services/user";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const UserInfo: UserInfo = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const user = await loginUser(UserInfo);

    if (!user) {
      return new Response("Invalid username or password", { status: 401 });
    }
    const cookieStore = await cookies();
    cookieStore.set("user_id", user.user.id.toString());

    return new Response("Form data received", { status: 200 });
  } catch (error) {
    // console.error("Error processing form data:", error);
    return new Response("Error processing form data", { status: 500 });
  }
}
