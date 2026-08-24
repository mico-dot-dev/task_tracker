import { ActionResponse } from "../../schema/auth.schema";
import { GetAuthUser } from "../../actions/auth.action";
import { redirect } from "next/navigation";

export async function authenticateUser<T>(
  actionFn: (userId: string) => Promise<ActionResponse<T>>,
): Promise<ActionResponse<T>> {
  const auth = await GetAuthUser();

  if (!auth.success || !auth.data?.user) {
    redirect("/");
  }

  return actionFn(auth.data.user);
}
