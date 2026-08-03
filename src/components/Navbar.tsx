import React from "react";
import {
  Trophy,
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
            <div className="rounded-lg bg-primary text-background p-1">
              <Trophy className="" size={32} strokeWidth={1.5} />
            </div>
            <span className="text-header-text font-semibold tracking-wider text-2xl ">
              TaskTracker
            </span>
          </div>

          <div className="flex flex-col gap-3 w-full items-start">
            <a href="/dashboard" className="nav-item-base">
              <LayoutDashboard size={20} />
              <p>Dashboard</p>
            </a>
            <a href="/dashboard/task" className="nav-item-base">
              <Clipboard size={20} />
              <p>Task</p>
            </a>
            <a href="/dashboard/expense" className="nav-item-base">
              <Package size={20} />
              <p>Expense</p>
            </a>
            <a href="/dashboard/transaction" className="nav-item-base">
              <Landmark size={20} />
              <p>Transaction</p>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
