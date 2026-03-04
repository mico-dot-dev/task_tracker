"use server";
import { supabaseServer } from "./supabase/server";
import { UserSchema } from "../validator/user";
import { LoginError, UserExistsError } from "../models/status-error";

// Checks if email exists and returns user data if found
export async function getUserByEmail(email: string) {
  try {
    // Implementation for user login
    const { data, error } = await supabaseServer
      .from("users")
      .select("*")
      .eq("email", email)
      .single();
    if (error) {
      if (error.code === "PGRST116") {
        // No rows found
        return null;
      }
    }
    return data;
  } catch (error) {
    throw new Error(`getUserByUsername failed: ${(error as Error).message}`);
  }
}

// Creates a new user in the database
export async function createUser(user: unknown) {
  // Implementation for creating a user
  const parsedUser = UserSchema.parse(user);

  //Layer of protection to check if email exists in database
  await getUserByEmail(parsedUser.email).then((existingUser) => {
    if (existingUser && existingUser != null) {
      throw new UserExistsError();
    }
  });
  try {
    const { data, error } = await supabaseServer.auth.signUp({
      email: parsedUser.email,
      password: parsedUser.password,
    });

    if (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`createUser failed: ${(error as Error).message}`);
  }
}

//Login function
export async function loginUser(user: unknown) {
  try {
    const parsedUser = UserSchema.parse(user);
    const loggedUser = await getUserByEmail(parsedUser.email);

    const { data, error } = await supabaseServer.auth.signInWithPassword({
      email: parsedUser.email,
      password: parsedUser.password,
    });

    if (error) {
      throw new LoginError();
    }

    return data;
  } catch (error) {
    console.log("Login error:", error);
    throw new Error(`loginUser failed: ${(error as Error).message}`);
  }
}

// Validates user credentials during login
export async function validateUserCredentials(
  username: string,
  password: string,
) {
  try {
    const user = await getUserByEmail(username);

    return user;
  } catch (error) {
    throw new Error(
      `validateUserCredentials failed: ${(error as Error).message}`,
    );
  }
}
