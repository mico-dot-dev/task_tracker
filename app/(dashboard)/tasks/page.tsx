import React, { use } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { getUserTasks } from "@/app/features/task/actions/get-task";
import { TaskListModel } from "@/app/features/task/types";


function page() {
  const tasks: = getUserTasks();

  return (
    <div className="flex flex-row justify-between min-h-full mt-5">
      <TaskList Tasks={[]} />
      <TaskForm />
    </div>
  );
}

export default page;
