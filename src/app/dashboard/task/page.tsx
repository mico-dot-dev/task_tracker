"use server";
import React, { Suspense, use } from "react";
import TaskList from "@/src/components/task/TaskList";
import { GetUserTasks } from "@/src/actions/task.action";

async function page() {
  const res = await GetUserTasks();
  const tasks = res.success ? res.data : [];

  return (
    <div className="flex flex-1 flex-row justify-between min-h-full overflow-hidden">
      <Suspense>
        <TaskList Tasks={tasks} />
      </Suspense>
    </div>
  );
}

export default page;
