import React from "react";
import TaskTable from "@/app/components/TaskTable";
import UserAuth from "@/app/lib/auth/requireAuth";
import { GetTasksByUserId } from "@/app/lib/services/task";
import { Task } from "@/app/lib/models/task";
import { TaskButton } from "@/app/components/TaskComponents";

async function Hero() {
  const user = await UserAuth();

  const tasksData = await GetTasksByUserId(user.id);
  const tasks: Task[] = tasksData;
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="h-[90%] w-[90%] relative">
        <p className="mb-3">Task Tracker</p>
        <TaskTable tasks={tasks} />
        <div className="absolute bottom-0 flex justify-end w-full ">
          <TaskButton></TaskButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
