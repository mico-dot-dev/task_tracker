import React from "react";
import TrancsactionTable from "@/src/components/transaction/TransactionTable";
import AddButton from "@/src/components/ui/AddButton";

function page() {
  return (
    <div>
      <TrancsactionTable />
      <AddButton content="transaction" />
    </div>
  );
}

export default page;
