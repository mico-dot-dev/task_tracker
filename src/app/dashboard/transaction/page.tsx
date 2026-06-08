import React from "react";
import TransactionItemCard from "@/src/components/transaction/TransactionItemCard";

function page() {
  return (
    <div>
      <h1>Transaction Page</h1>
      <button>Add Transaction</button>
      <button>Transaction History</button>
      <p>Transaction List</p>
      <TransactionItemCard />
      <TransactionItemCard />
      <TransactionItemCard />
    </div>
  );
}

export default page;
