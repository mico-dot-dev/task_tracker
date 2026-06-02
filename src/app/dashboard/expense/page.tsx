import React from "react";
import ExpenseCard from "@/src/components/expenses/ExpenseCard";

function page() {
  return (
    <div>
      <p>Balance</p>
      <button>Add Income</button>
      <button>Add Expense</button>
      <button>Transaction History</button>

      <div className="mt-5">
        <p className="mb-5">Monthly Expenses</p>
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>

      <div className="mt-5">
        <p className="mb-5">Grocery Expenses</p>
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    </div>
  );
}

export default page;
