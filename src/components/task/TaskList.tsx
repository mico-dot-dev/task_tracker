import React from "react";
import { TaskListModel } from "@/src/types/task";
import { GetUserTasks } from "@/src/actions/task.action";
import TaskCard from "@/src/components/task/TaskCard";

async function TaskList() {
  const tasks = await GetUserTasks();
  console.dir(tasks);

  if (!tasks.success) {
    return <p>Task Data Not Found</p>;
  }
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {tasks.data.map((task) => (
        <TaskCard Task={task} key={task.id} />
      ))}

      {/* {byCategory !== null &&
        byCategory.map(({ cat, label, tasks }) => (
          <ul
            key={cat}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {tasks.map((task) => (
              <TaskCard Task={task} key={task.id} />
            ))}
          </ul>
        ))} */}
    </ul>
  );
}

export default TaskList;
