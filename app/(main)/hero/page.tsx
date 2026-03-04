import React from "react";
import TaskForm from "@/app/components/TaskForm";
import TaskTable from "@/app/components/TaskTable";
import UserAuth from "@/app/lib/auth/requireAuth";
import { GetTasksByUserId } from "@/app/lib/services/task";
import { Task } from "@/app/lib/models/task";

async function Hero() {
  const user = await UserAuth();

  const tasksData = await GetTasksByUserId(user.id);
  const tasks: Task[] = tasksData;
  return (
    <div>
      <TaskForm />
      <TaskTable tasks={tasks} />
    </div>
  );
}

export default Hero;
