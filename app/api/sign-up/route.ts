import { createUser } from "@/app/lib/services/user";
import { UserInfo } from "@/app/lib/models/user";
import { UserExistsError } from "@/app/lib/models/status-error";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const UserInfo: UserInfo = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const createdUser = await createUser(UserInfo);

    if (createdUser) {
      console.log("User created successfully");
    }

    return new Response("Form data received", { status: 200 });
  } catch (error) {
    if (error instanceof UserExistsError) {
      return Response.json({ error: error.message }, { status: 409 });
    }
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
