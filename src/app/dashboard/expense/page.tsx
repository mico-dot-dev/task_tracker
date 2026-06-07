"use client";

import React, { useState } from "react";
import ExpenseItemCard from "@/src/components/expenses/ExpenseItemCard";
import ExpensesModal from "@/src/components/modal/ExpensesModal";

function page() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <p>Expense List</p>
      <div className="mt-5">
        <p className="mb-5">Monthly Expenses</p>
        <ExpenseItemCard />
        <ExpenseItemCard />
        <ExpenseItemCard />
      </div>

      <div className="mt-5">
        <p className="mb-5">Grocery Expenses</p>
        <ExpenseItemCard />
        <ExpenseItemCard />
        <ExpenseItemCard />
      </div>

      <ExpensesModal isOpen={modalOpen} setIsOpen={setModalOpen} />
    </div>
  );
}

export default page;
