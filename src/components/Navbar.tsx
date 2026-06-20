import React from "react";

function Navbar() {
  return (
    <div className="drawer lg:drawer-open w-50 bg-transparent text-primary-text ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex lg:hidden">
        {/* Page content here */}
        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden ">
          Open drawer
        </label>
      </div>
      <div className="drawer-side w-full bg-foreground text-primary-text">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu  min-h-full w-45 lg:border-r-[0.01px] lg:border-border bg-foreground">
          {/* Sidebar content here */}
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a href="/dashboard/task">Task</a>
          </li>
          <li>
            <a href="/dashboard/expense">Expense</a>
          </li>
          <li>
            <a href="/dashboard/stock">Stock</a>
          </li>
          <li>
            <a href="/dashboard/transaction">Transaction</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
