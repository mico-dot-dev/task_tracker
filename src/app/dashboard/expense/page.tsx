"use client";

import React, { useState } from "react";
import ExpenseCard from "@/src/components/expenses/ExpenseCard";
import ExpensesModal from "@/src/components/modal/ExpensesModal";

function page() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <p>Balance</p>
      <button>Add Income</button>
      <button className="cursor-pointer" onClick={() => setModalOpen(true)}>
        Add Expense
      </button>
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

      <ExpensesModal isOpen={modalOpen} setIsOpen={setModalOpen} />
    </div>
  );
}

export default page;
