import React from "react";
import { Suspense } from "react";
import ExpenseAdd from "@/src/components/ui/AddButton";
import ExpenseList from "@/src/components/expenses/ExpenseList";
import SearchBar from "@/src/components/ui/SearchBar";
import GroupByList from "@/src/components/ui/GroupByList";

function page() {
  return (
    <div className="content-container-base">
      <SearchBar />
      <GroupByList />
      <div className="mt-5 overflow-scroll">
        <Suspense>
          <ExpenseList />
        </Suspense>
      </div>
      <ExpenseAdd content="expense" />
    </div>
  );
}

export default page;
