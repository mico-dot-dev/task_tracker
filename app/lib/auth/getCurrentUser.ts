"use server";

import { cookies } from "next/headers";
import { supabaseService } from "../services/supabase/service";

export default async function getCurrentUser() {
  try {
    const supabaseServ = await supabaseService();

    const cookieStore = await cookies();
    const user_id = cookieStore.get("user_id")?.value;

    if (!user_id) return null;

    const { data: user, error } = await supabaseServ
      .from("users")
      .select("*")
      .eq("id", user_id)
      .single();

    return user;
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
}
