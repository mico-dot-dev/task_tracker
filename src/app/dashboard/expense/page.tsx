import React from "react";
import { Suspense } from "react";
import AddButton from "@/src/components/ui/AddButton";
import ExpenseList from "@/src/components/expenses/ExpenseList";
import Toolbar from "@/src/components/ui/Toolbar";

function page() {
  return (
    <div className="content-container-base">
      <div className="flex flex-col flex-1s h-full">
        <div className="mb-7">
          <Toolbar module="expense" />
        </div>
        <div className=" overflow-y-scroll flex-1 h-fit pb-10">
          <Suspense>
            <ExpenseList />
          </Suspense>
        </div>
      </div>
      <div>
        <AddButton content="expense" />
      </div>
    </div>
  );
}

export default page;
