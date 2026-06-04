"use server";
import React, { Suspense, use } from "react";
import TaskList from "@/src/components/task/TaskList";
import TaskForm from "@/src/components/form/TaskForm";
import { GetUserTasks } from "@/src/actions/task.action";

async function page() {
  const res = await GetUserTasks();
  const tasks = res.success ? res.data : [];

  return (
    <div className="flex flex-row justify-between min-h-full min-w-full overflow-hidden">
      <Suspense>
        <TaskList Tasks={tasks} />
        <TaskForm />
      </Suspense>
    </div>
  );
}

export default page;
