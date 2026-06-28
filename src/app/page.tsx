import { GetAuthUser } from "@/src/actions/task.action";
import AccountForm from "@/src/components/form/AuthForm";

export const dynamic = "force-dynamic";
export default async function Home() {
  const auth = await GetAuthUser();

  return (
    <>
      <AccountForm />
    </>
  );
}
