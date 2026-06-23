import React from "react";
import { TaskListModel } from "@/src/types/task";
import { GroupTasksByCategory, CATEGORY_LABELS } from "@/src/lib/task-util";

import TaskCard from "@/src/components/task/TaskCard";
import { Search } from "lucide-react";

function TaskList({ Tasks }: { Tasks: TaskListModel[] }) {
  const byCategory = GroupTasksByCategory(Tasks);
  const today = new Date().toUTCString().split(" ").slice(0, 4).join(" ");

  return (
    <div className="flex flex-1 justify-items-center mt-10 mx-3">
      <div className="flex flex-col flex-1">
        <header className="mb-7">
          <p className="text-2xl font-bold text-primary-text">
            Good Morning Aki
          </p>
          <div>
            <div></div>
          </div>
        </header>

        <section className="flex flex-col py-5 border-b border-primary mb-4">
          <div className="flex relative flex-1 mb-4 ">
            {/* 1. Icon Container */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-muted-icon" aria-hidden="true" />
            </div>

            <input
              type="text"
              placeholder="Search a task..."
              className=" w-full 
              py-2 pl-10 pr-4 text-sm 
              input-base"
            />
          </div>

          <div className="flex flex-row justify-between h-10 text-sm  font-medium">
            <div className="flex flex-row gap-3 text-background">
              {CATEGORY_LABELS !== null &&
                Object.entries(CATEGORY_LABELS).map(([cat, label]) => (
                  <button key={cat} className=" button-base px-1.5 rounded-xl">
                    {label}
                  </button>
                ))}
            </div>

            <div className="flex flex-row gap-3 text-background">
              <button className="flex flex-row px-1.5 gap-1.5 items-center button-base rounded-xl">
                <p>Group by</p>
                <p className="font-semibold"> Category</p>
              </button>
              <button className="cursor-pointer px-5 button-base rounded-xl">
                Filter
              </button>
            </div>
          </div>
        </section>

        {/* tasks */}
        <div className="flex flex-col ">
          {byCategory !== null &&
            byCategory.map(({ cat, label, tasks }) => (
              <ul
                key={cat}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {tasks.map((task) => (
                  <TaskCard Task={task} key={task.id} />
                ))}
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
