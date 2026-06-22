import React from "react";
import {
  LayoutDashboard,
  Clipboard,
  Package,
  ShoppingBasket,
  Landmark,
} from "lucide-react";

function Navbar() {
  return (
    <div className="drawer lg:drawer-open w-64 bg-transparent text-primary-text ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex lg:hidden">
        {/* Page content here */}
        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden ">
          Open drawer
        </label>
      </div>
      <div className="drawer-side w-full h-screen flex">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <nav className="menu h-full w-64 lg:border-r lg:border-border bg-side-nav-background pl-5 pt-8 ">
          {/* Sidebar content here */}
          <div className="flex items-center gap-3 mb-6">
            {/* Decorative Velvet Theme Logo Mark */}
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-background font-bold text-lg shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              V
            </div>
            <span className="text-header-text font-semibold tracking-wide text-md">
              TaskTracker
            </span>
          </div>

          <div className="flex flex-col gap-3 w-full items-start">
            <button className="nav-item-base">
              <LayoutDashboard size={20} />
              <a href="/dashboard">Dashboard</a>
            </button>
            <button className="nav-item-base">
              <Clipboard size={20} />
              <a href="/dashboard/task">Task</a>
            </button>
            <button className="nav-item-base">
              <Package size={20} />
              <a href="/dashboard/expense">Expense</a>
            </button>
            <button className="nav-item-base">
              <ShoppingBasket size={20} />
              <a href="/dashboard/stock">Stock</a>
            </button>
            <button className="nav-item-base">
              <Landmark size={20} />
              <a href="/dashboard/transaction">Transaction</a>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
