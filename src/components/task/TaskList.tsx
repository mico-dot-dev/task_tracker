import React from "react";
import { TaskListModel } from "@/src/types/task";
import { GroupTasksByCategory } from "@/src/lib/task-util";
import { GetUserTasks } from "@/src/actions/task.action";
import TaskCard from "@/src/components/task/TaskCard";

async function TaskList() {
  const Tasks = await GetUserTasks();
  console.log(Tasks);

  if (!Tasks.success) {
    return <p>Task Data Not Found</p>;
  }
  const byCategory = await GroupTasksByCategory(Tasks.data);
  return (
    <div className="flex flex-col ">
      {byCategory !== null &&
        byCategory.map(({ cat, label, tasks }) => (
          <ul
            key={cat}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {tasks.map((task) => (
              <TaskCard Task={task} key={task.id} />
            ))}
          </ul>
        ))}
    </div>
  );
}

export default TaskList;
