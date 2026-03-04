"use client";
import React from "react";
import { Task } from "@/app/lib/models/task";
import { ToggleTask } from "../lib/actions/updateTask";

function TaskTable({ tasks }: { tasks: Task[] }) {
  return (
    <div>
      <div className="w-full">
        <table className="w-full table-auto border border-gray-300 dark:border-gray-600">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-600">
                Task
              </th>
              <th className="border border-gray-300 dark:border-gray-600">
                Description
              </th>
              <th className="border border-gray-300 dark:border-gray-600">
                Status
              </th>
              <th className="border border-gray-300 dark:border-gray-600 max-w-fit">
                Check
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="border border-gray-300 dark:border-gray-600">
                  {task.title}
                </td>
                <td className="border border-gray-300 dark:border-gray-600">
                  {task.description}
                </td>
                <td className="border border-gray-300 dark:border-gray-600">
                  {task.completed ? "Completed" : "Pending"}
                </td>
                <td className="border border-gray-300 dark:border-gray-600 max-w-fit">
                  <button
                    className=" cursor-pointer bg-blue-500 text-white"
                    onClick={() => ToggleTask(task.id)}
                  >
                    Check
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskTable;
