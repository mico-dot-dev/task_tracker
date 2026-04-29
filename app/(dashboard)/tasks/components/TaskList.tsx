import React from "react";
import { TaskListModel } from "@/app/features/task/types";

function TaskList({ Tasks }: { Tasks: TaskListModel[] }) {
  return (
    <div className="w-1/2  h-full justify-items-center">
      <div className="flex flex-col w-11/12">
        <header className="flex justify-between w-full mb-7">
          <p>Today</p>
          <p>Saturday, April 10, 2026</p>
        </header>

        <div className="flex justify-start gap-4 w-full text-background mb-5">
          <button className="bg-primary p-1.5 rounded-xl">Priority</button>
        </div>

        <div className="overflow-y-scroll overflow-x-hidden">
          <div>
            <p>Priority</p> <hr />
            <ul>
              <li>
                <input type="checkbox" />{" "}
                <label htmlFor=""> Extract data from database</label>
              </li>
              <hr />
              <li>
                <input type="checkbox" />{" "}
                <label htmlFor=""> Extract data from database</label>
              </li>
              <hr />
            </ul>
            <p>Priority</p> <hr />
            <ul>
              <li>
                <input type="checkbox" />{" "}
                <label htmlFor=""> Extract data from database</label>
              </li>
              <hr />
              <li>
                <input type="checkbox" />{" "}
                <label htmlFor=""> Extract data from database</label>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
