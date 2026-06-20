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
  // const statusColors: Record<category, string> = {
  //   [category.PRIORITY]: "bg-amber-500",
  //   [category.TODAY]: "bg-blue-500",
  //   [category.WEEK]: "bg-emerald-500",
  //   [category.OTHER]: "bg-slate-500",
  // };

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
    <li className="bg-foreground border border-border rounded-md w-">
      <div
        className={twJoin(
          "flex flex-row items-center",
          Task.completed && "line-through text-gray-500",
        )}
      >
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
        <div>
          <label
            htmlFor={Task.id}
            className="text-2xl ml-2 cursor-pointer flex w-full"
          >
            {Task.title}
          </label>
          <label htmlFor={Task.id}>{Task.category}</label>
          <label htmlFor={Task.id}>Due: June 15, 2026</label>
        </div>
      </div>
    </li>
  );
}

export default TaskCard;
