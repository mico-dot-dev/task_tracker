import React from "react";
import AddButton from "@/src/components/ui/AddButton";

async function page() {
  return (
    <div>
      <div>Dashboard</div>
      <AddButton content="income" />
    </div>
  );
}

export default page;
