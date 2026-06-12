"use server";

import React from "react";
import { TaskListModel } from "@/src/types/task";
import { GroupTasksByCategory, CATEGORY_LABELS } from "@/src/lib/task-util";
import { CiSearch } from "react-icons/ci";

import TaskCard from "@/src/components/task/TaskCard";

async function TaskList({ Tasks }: { Tasks: TaskListModel[] }) {
  const byCategory = GroupTasksByCategory(Tasks);
  const today = new Date().toUTCString().split(" ").slice(0, 4).join(" ");

  return (
    <div className="flex flex-1 justify-items-center mt-10 mr-5">
      <div className="flex flex-col flex-1">
        <header className="mb-7">
          <p className="text-2xl font-bold text-primary-text">
            Good Morning Aki
          </p>
          <div>
            <div></div>
          </div>
        </header>

        <section className="flex flex-row">
          <div className="relative w-full max-w-sm">
            {/* 1. Icon Container */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <CiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>

            <input
              type="text"
              placeholder="Search a task..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-900 
                   placeholder-gray-400 transition-colors duration-200
                   focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex flex-row gap-3 ">
            <button className="flex">
              Group by <strong> Category </strong>
            </button>
            <button>Filter</button>
          </div>

          <div>
            <button>Add Task</button>
          </div>
        </section>

        <hr className="my-3" />

        <div className="flex flex-row w-full gap-5 mb-5 text-text-on-button font-medium">
          <button className=" bg-primary p-1.5 rounded-xl cursor-pointer">
            Daily
          </button>
          {CATEGORY_LABELS !== null &&
            Object.entries(CATEGORY_LABELS).map(([cat, label]) => (
              <button
                key={cat}
                className=" bg-primary p-1.5 rounded-xl cursor-pointer"
              >
                {label}
              </button>
            ))}
        </div>

        {/* tasks */}
        <div className="flex flex-col task-list-scrollbar h-[75vh]">
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
