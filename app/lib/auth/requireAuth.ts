"use server";

import { redirect } from "next/navigation";
import getCurrentUser from "./getCurrentUser";

export default async function UserAuth() {
  const user = await getCurrentUser();
  if (!user) {
    console.log("User not authenticated, redirecting to login page.");
    redirect("/");
  }
  return user;
}
