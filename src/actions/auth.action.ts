"use server";
import { prisma } from "@/src/lib/prisma-client";
import { AuthModel } from "@/src/types/auth";

export async function LoginUser(data: AuthModel) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user)
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
