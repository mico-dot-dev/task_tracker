import React from "react";
import { GetUserTasks } from "@/src/actions/task.action";
import TaskCard from "@/src/components/task/TaskCard";
import { ListParams } from "@/src/type/page-types";

interface TaskListProps {
  searchParams?: ListParams;
}

async function TaskList({ searchParams }: TaskListProps) {
  const tasks = await GetUserTasks({ ...searchParams });
  if (!tasks.success) {
    return <p>Task Data Not Found</p>;
  }
  return (
    <ul className="card-list-base">
      {tasks.data.map((task) => (
        <TaskCard Task={task} key={task.id} />
      ))}
    </ul>
  );
}

export default TaskList;
