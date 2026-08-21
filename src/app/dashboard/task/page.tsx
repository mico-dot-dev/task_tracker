"use server";
import React, { Suspense, use } from "react";
import TaskList from "@/src/components/task/TaskList";
import TaskSearch from "@/src/components/ui/SearchBar";
import TaskGroupBy from "@/src/components/ui/GroupByList";
import TaskAdd from "@/src/components/ui/AddButton";

async function page() {
  return (
    <div className="content-container-base">
      <header className="mt-7 mb-3">
        <p className="text-2xl font-bold text-primary-text">Good Morning Aki</p>
        <div>
          <div></div>
        </div>
      </header>
      <div className="flex flex-1 justify-items-center">
        <div className="flex flex-col flex-1">
          <section className="flex flex-col py-5 border-b border-primary mb-4">
            <TaskSearch />
            <TaskGroupBy />
          </section>
          <Suspense>
            <TaskList />
          </Suspense>
        </div>
      </div>
      <TaskAdd content="task" />
    </div>
  );
}

export default page;
