import React from "react";
import { Suspense } from "react";
import AddButton from "@/src/components/ui/AddButton";
import ExpenseList from "@/src/components/expenses/ExpenseList";
import Toolbar from "@/src/components/ui/Toolbar";
import { ToolBarProps } from "@/src/type/page-types";
import { ExpenseType } from "@/src/generated/prisma";

function page() {
  const toolBarData: ToolBarProps = {
    module: "expense",
    categoryContent: Object.values(ExpenseType),
  };

  return (
    <div className="content-container-base">
      <div className="flex flex-col flex-1s h-full">
        <div className="mb-7">
          <Toolbar {...toolBarData} />
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
