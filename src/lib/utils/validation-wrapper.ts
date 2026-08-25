import { ActionResponse } from "../../schema/auth.schema";
import { GetAuthUser } from "../../actions/auth.action";

export async function authenticateUser<T>(
  actionFn: (userId: string) => Promise<ActionResponse<T>>,
): Promise<ActionResponse<T>> {
  const auth = await GetAuthUser();

  if (!auth.success || !auth.data?.user) {
    return {
      success: false,
      error: "User not Authenticated",
    };
  }

  return actionFn(auth.data.user);
}
