import React from "react";
import { Suspense } from "react";
import ExpenseAdd from "@/src/components/ui/AddButton";
import ExpenseList from "@/src/components/expenses/ExpenseList";

function page() {
  return (
    <div className="content-container-base">
      <Suspense>
        <ExpenseList />
      </Suspense>
      <ExpenseAdd content="expense" />
    </div>
  );
}

export default page;
