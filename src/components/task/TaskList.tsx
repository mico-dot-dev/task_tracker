import React from "react";
import { TaskListModel } from "@/src/types/task";
import { AVAILABLE_CATEGORIES } from "@/src/constants/categories";

function TaskList({ Tasks }: { Tasks: TaskListModel[] }) {
  const byCategory = {
    PRIORITY: Tasks.filter((t) => t.category === "PRIORITY"),
    TODAY: Tasks.filter((t) => t.category === "TODAY"),
    WEEK: Tasks.filter((t) => t.category === "WEEK"),
    OTHER: Tasks.filter((t) => t.category === "OTHER"),
  };

  console.dir(byCategory);

  return (
    <div className="w-1/2 justify-items-center mt-10">
      <div className="flex flex-col w-11/12">
        <header className="flex justify-between w-full mb-7">
          <p>Today</p>
          <p>Saturday, April 10, 2026</p>
        </header>

        <div className="flex flex-row w-full gap-5">
          {AVAILABLE_CATEGORIES !== null &&
            AVAILABLE_CATEGORIES.map((cat) => (
              <div key={cat} className="flex text-background mb-5">
                <button className="bg-primary p-1.5 rounded-xl cursor-pointer">
                  {cat}
                </button>
              </div>
            ))}
        </div>

        {/* tasks */}
        <div className="overflow-y-scroll overflow-x-hidden">
          {(["PRIORITY", "TODAY", "WEEK", "OTHER"] as const).map(
            (cat) =>
              byCategory[cat].length > 0 && (
                <div key={cat}>
                  <p>{cat}</p> <hr />
                  <ul>
                    {byCategory[cat].map((task) => (
                      <li key={task.id} className="cursor-pointer">
                        <input type="checkbox" value={task.id} id={task.id} />{" "}
                        <label htmlFor={task.id}> {task.title}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
