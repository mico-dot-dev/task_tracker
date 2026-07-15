import React from "react";

interface AddFormProps {
  closeModal: () => void;
}

function ExpenseForm({ closeModal }: AddFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="expense-name">Expense Name</label>
        <input
          id="expense-name"
          name="expense-name"
          type="text"
          className="input-base p-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="expense-category">Category</label>
        <select
          id="expense-category"
          name="expense-category"
          className="input-base p-2"
        >
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>

      {/* <div>
        <label htmlFor="expense-amount">Amount</label>
        <input id="expense-amount" type="text" />
      </div>
      <div>
        <label htmlFor="expense-amount">Fare List</label>
        <input id="expense-amount" type="text" />
      </div> */}
    </form>
  );
}

export default ExpenseForm;
