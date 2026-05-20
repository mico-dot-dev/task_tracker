import React from "react";
import { TaskListModel } from "@/src/types/task";
import { category } from "@/src/generated/prisma";

function TaskCard({ Task }: { Task: TaskListModel }) {
  const statusColors: Record<category, string> = {
    [category.PRIORITY]: "bg-amber-500",
    [category.TODAY]: "bg-blue-500",
    [category.WEEK]: "bg-emerald-500",
    [category.OTHER]: "bg-slate-500",
  };

  return (
    <li className="flex items-center">
      <span className={statusColors[Task.category] ?? "bg-gray-500"}></span>
      <input
        type="checkbox"
        className="
        appearance-none
        aspect-square h-4.5 rounded-full 
        border-2 border-primary 
        cursor-pointer 
        
        checked:bg-active"
        value={Task.id}
        id={Task.id}
      />
      <label htmlFor={Task.id} className="text-xl ml-2">
        {Task.title}
      </label>
    </li>
  );
}

export default TaskCard;
