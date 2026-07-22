"use server";
import { supabaseServer } from "../lib/supabase/server";
import { AuthModel, ActionResponse } from "@/src/types/auth";

export async function GetAuthUser(): Promise<ActionResponse<{ user: string }>> {
  try {
    const supabase = await supabaseServer();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      return {
        success: false,
        error: "User not authenticated",
      };
    }

    return {
      success: true,
      data: { user: data.user.id },
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to authenticate user",
    };
  }
}

export async function LoginUser(data: AuthModel) {
  try {
    const supabase = await supabaseServer();
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (!user.user)
      return {
        ok: false,
        message: "Invalid email or password.",
      };

    return {
      ok: true,
      message: "Login successful.",
    };
  } catch (error) {
    console.error("Login failed:", error);
    return {
      ok: false,
      error: "Internal Server Error",
    };
  }
}

export async function SignUpUser(data: AuthModel) {}
