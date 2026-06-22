"use client";

import React from "react";
import { TaskListModel } from "@/src/types/task";
import { category } from "@/src/generated/prisma";
import { twJoin } from "tailwind-merge";
import { UpdateTaskCompletion, DeleteTask } from "@/src/actions/task.action";
import { useRouter } from "next/navigation";

import { Circle, CircleCheck, EllipsisVertical } from "lucide-react";

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

  return (
    <li className="bg-foreground border border-border rounded-md w-">
      <div
        className={twJoin(
          "flex flex-row m-5",
          Task.completed && "line-through text-gray-500",
        )}
      >
        <button
          onClick={handleToggleComplete}
          className="cursor-pointer self-start"
        >
          {(Task.completed && <CircleCheck size={20} className="" />) || (
            <Circle size={20} />
          )}
        </button>

        <div className="self-start flex flex-col ml-3 flex-1">
          <p className="text-2xl flex w-full">{Task.title}</p>
          <div className="flex flex-row">
            <p className="text-md flex w-full">Due: June 15, 2026</p>
            <p className="text-md flex w-full">{Task.category}</p>
          </div>
        </div>
        <button className="cursor-pointer self-start">
          <EllipsisVertical size={20} />
        </button>
      </div>
    </li>
  );
}

export default TaskCard;
