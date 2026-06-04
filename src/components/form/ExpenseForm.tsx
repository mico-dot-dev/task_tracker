import React from "react";

function ExpenseForm() {
  return (
    <div>
      <form className="flex flex-col gap-4 text-black">
        <label htmlFor="expense-name">Expense Name</label>
        <input id="expense-name" type="text" />

        <label htmlFor="expense-amount">Amount</label>
        <input id="expense-amount" type="text" />

        <label htmlFor="expense-category">Category</label>
        <select id="expense-category">
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </form>
    </div>
  );
}

export default ExpenseForm;
