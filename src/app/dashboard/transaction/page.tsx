import React, { Suspense } from "react";
import AddButton from "@/src/components/ui/AddButton";
import TransactionList from "@/src/components/transaction/TransactionList";

function page() {
  return (
    <div className="content-container-base">
      <div className="flex flex-col flex-1 h-full">
        <div className="overflow-y-scroll flex-1 h-fit pb-24">
          <Suspense>
            <TransactionList />
          </Suspense>
        </div>
      </div>
      <div className="absolute">
        <AddButton content="transaction" />
      </div>
    </div>
  );
}

export default page;
