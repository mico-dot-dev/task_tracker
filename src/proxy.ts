import { NextResponse, type NextRequest } from "next/server";
import { supabaseServer } from "@/src/lib/supabase/server";

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;
  const isAuthOrRoot =
    path === "/" || path.includes("/login") || path.includes("/signup");
  if (user && isAuthOrRoot) {
    await supabase.auth.signOut();

    // Return the response with the clearance cookies applied
    return supabaseResponse;
  }
  return supabaseResponse;
}
export const config = {
  matcher: ["/"],
};
