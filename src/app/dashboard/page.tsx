import React from "react";
import { GetAuthUser } from "@/src/actions/auth.action";

async function page() {
  await GetAuthUser();

  return (
    <div>
      <div>Dashboard</div>
    </div>
  );
}

export default page;
