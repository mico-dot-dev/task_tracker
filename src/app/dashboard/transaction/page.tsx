import React from "react";
import AddButton from "@/src/components/ui/AddButton";
import TransactionList from "@/src/components/transaction/TransactionList";

function page() {
  return (
    <div>
      <TransactionList />
      <AddButton content="transaction" />
    </div>
  );
}

export default page;
