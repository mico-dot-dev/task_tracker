"use client";

import React from "react";
import { TaskListModel } from "@/src/types/task";
import { category } from "@/src/generated/prisma";
import { twJoin } from "tailwind-merge";
import { MdEditNote, MdDeleteOutline } from "react-icons/md";
import { UpdateTaskCompletion, DeleteTask } from "@/src/actions/task.action";
import { useRouter } from "next/navigation";

function TaskCard({ Task }: { Task: TaskListModel }) {
  const router = useRouter();
  const statusColors: Record<category, string> = {
    [category.PRIORITY]: "bg-amber-500",
    [category.TODAY]: "bg-blue-500",
    [category.WEEK]: "bg-emerald-500",
    [category.OTHER]: "bg-slate-500",
  };

  function handleToggleComplete() {
    try {
      const res = UpdateTaskCompletion(Task.id);
      // if(res)
    } catch (error) {
      console.error("Error occurred while toggling task completion:", error);
    }
  }

  function handleDeleteTask() {
    try {
      const res = DeleteTask(Task.id);
      // if(res)
    } catch (error) {
      console.error("Error occurred while deleting task:", error);
    }
  }

  function handleEditTask() {
    try {
      router.replace(`tasks/?id=${Task.id}`);
    } catch (error) {}
  }

  return (
    <li className="flex flex-row justify-between mt-5">
      <div
        className={twJoin(
          "flex flex-row items-center py-2.5 pl-3 min-w-4/5 hover:border hover:border-primary",
          Task.completed && "line-through text-gray-500",
        )}
      >
        <span
          className={twJoin(
            "w-1 h-5",
            statusColors[Task.category] ?? "bg-gray-500",
          )}
        ></span>
        <input
          type="checkbox"
          className="
          appearance-none
          aspect-square h-5 rounded-full
          border-2 border-primary
          cursor-pointer
          ml-3
        
          checked:bg-active"
          checked={Task.completed}
          onChange={handleToggleComplete}
          value={Task.id}
          id={Task.id}
        />
        <label
          htmlFor={Task.id}
          className="text-2xl ml-2 cursor-pointer flex w-full"
        >
          {Task.title}
        </label>
      </div>
      <div className="flex flex-row gap-8 text-3xl items-center mr-4 text-text-on-button">
        <MdEditNote
          className="cursor-pointer bg-primary rounded-md h-8 aspect-square"
          onClick={handleEditTask}
        />
        <MdDeleteOutline
          className="cursor-pointer bg-primary rounded-md h-8 aspect-square"
          onClick={handleDeleteTask}
        />
      </div>
    </li>
  );
}

export default TaskCard;
