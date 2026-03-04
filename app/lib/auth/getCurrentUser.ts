"use server";

import { cookies } from "next/headers";
import { supabaseServer } from "../services/supabase/server";

export default async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const user_id = cookieStore.get("user_id")?.value;
    const { data: user, error } = await supabaseServer
      .from("users")
      .select("*")
      .eq("id", user_id)
      .single();

    return user;
  } catch (error) {}
}
