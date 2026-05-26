"use server";

import React from "react";
import { TaskListModel } from "@/src/types/task";
import { GroupTasksByCategory, CATEGORY_LABELS } from "@/src/lib/task-util";

import TaskCard from "@/src/components/task/TaskCard";

async function TaskList({ Tasks }: { Tasks: TaskListModel[] }) {
  const byCategory = GroupTasksByCategory(Tasks);
  const today = new Date().toUTCString().split(" ").slice(0, 4).join(" ");

  return (
    <div className="w-1/2 justify-items-center mt-10">
      <div className="flex flex-col w-11/12">
        <header className="flex justify-between w-full mb-7">
          <p>Today</p>
          <p>{today}</p>
        </header>

        <div className="flex flex-row w-full gap-5 mb-5 text-text-on-button font-medium">
          {CATEGORY_LABELS !== null &&
            Object.entries(CATEGORY_LABELS).map(([cat, label]) => (
              <button
                key={cat}
                className=" bg-primary p-1.5 rounded-xl cursor-pointer"
              >
                {label}
              </button>
            ))}
          <button className=" bg-primary p-1.5 rounded-xl cursor-pointer">
            Finished
          </button>
          <button className=" bg-primary p-1.5 rounded-xl cursor-pointer">
            Unfinished
          </button>
        </div>

        {/* tasks */}
        <div className="flex flex-col overflow-y-scroll overflow-x-hidden task-list-scrollbar h-[75vh]">
          {byCategory !== null &&
            byCategory.map(({ cat, label, tasks }) => (
              <ul key={cat} className="flex flex-col">
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
