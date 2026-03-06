// import { supabaseServer } from "./supabase/server";
// import { cookies } from "next/headers";

// export default async function getCurrentUser() {
//   try {
//     const cookieStore = await cookies();
//     const user_id = cookieStore.get("user_id")?.value;
//     console.log("cookie user_id:", user_id);

//     const { data: user, error } = await supabaseServer
//       .from("users")
//       .select("*")
//       .eq("id", user_id)
//       .single();

//     console.log("supabase response:", { user, error });
//     return user; // may be null
//   } catch (err) {
//     console.error("getCurrentUser failed", err);
//     return null;
//   }
// }
