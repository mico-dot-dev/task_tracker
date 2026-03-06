"use client";
import React, { useState } from "react";
import { Task } from "@/app/lib/models/task";
import { ToggleTask } from "@/app/lib/actions/updateTask";
import { set } from "zod";

function TaskTable({ tasks }: { tasks: Task[] }) {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  async function handleToggleTaskCompletion(task: Task) {
    // Implementation for handling task completion toggle
    try {
      setTaskList((prevTasks) =>
        prevTasks.map((t) =>
          t.id === task.id ? { ...t, completed: !t.completed } : t,
        ),
      );
      await ToggleTask(task);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="w-full">
        <ul className="gap-5 flex flex-col">
          {tasks.map((task) => (
            <li
              className="flex items-center bg-input py-3 rounded-xl hover:bg-foreground focus:bg-foreground cursor-pointer"
              key={task.id}
            >
              <input
                type="checkbox"
                className="ms-2 w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium"
                name=""
                id={`bordered-checkbox-${task.id}`}
                checked={task.completed}
                onChange={handleToggleTaskCompletion.bind(null, task)}
              />
              <label
                className="select-none w-full ms-2 text-heading"
                htmlFor={`bordered-checkbox-${task.id}`}
              >
                {task.title}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskTable;
