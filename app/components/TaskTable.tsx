"use client";
import React, { useState } from "react";
import { Task } from "@/app/lib/models/task";
import { ToggleTask } from "@/app/lib/actions/updateTask";
import { useRouter } from "next/navigation";

function TaskTable({ tasks }: { tasks: Task[] }) {
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/update-task");
      const data: Task[] = await response.json();
      setTaskList(data);
    } catch (error) {
      console.log("Task Table Fetch:", error);
    }
  };
  async function handleToggleTaskCompletion(task: Task) {
    // Implementation for handling task completion toggle
    setLoading(true);
    try {
      await ToggleTask(task);
      await fetchTasks();
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
          {loading && <p className="text-sm text-gray-500">Updating...</p>}
        </ul>
      </div>
    </div>
  );
}

export default TaskTable;
