import React, { use } from "react";
import TaskList from "@/src/components/task/TaskList";
import TaskForm from "@/src/components/task/TaskForm";
import { GetUserTasks } from "@/src/actions/task.action";

async function page() {
  const res = await GetUserTasks();
  const tasks = res.success ? res.data : [];

  return (
    <div className="flex flex-row justify-between min-h-full min-w-full ">
      <TaskList Tasks={tasks} />
      <TaskForm />
    </div>
  );
}

export default page;
