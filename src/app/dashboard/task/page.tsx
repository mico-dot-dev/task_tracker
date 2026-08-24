"use server";
import React, { Suspense, use } from "react";
import TaskList from "@/src/components/task/TaskList";
import ToolBar from "@/src/components/ui/Toolbar";
import TaskAdd from "@/src/components/ui/AddButton";

async function page() {
  return (
    <div className="content-container-base">
      <header className="mt-7 mb-3">
        <p className="text-2xl font-bold text-primary-text">Good Morning</p>
        <div>
          <div></div>
        </div>
      </header>
      <div className="flex flex-col flex-1s h-full">
        <div className="mb-7 ">
          <ToolBar module="task" />
        </div>
        <div className="overflow-y-scroll flex-1 h-fit pb-24">
          <TaskList />
        </div>
      </div>
      <div className="absolute">
        <TaskAdd content="task" />
      </div>
    </div>
  );
}

export default page;
