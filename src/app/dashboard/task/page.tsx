import React, { Suspense, use } from "react";
import TaskList from "@/src/components/task/TaskList";
import ToolBar from "@/src/components/ui/Toolbar";
import AddButton from "@/src/components/ui/AddButton";
import { ListParams } from "@/src/type/listParams";

interface TaskPageProps {
  searchParams?: Promise<ListParams>;
}

async function page({ searchParams }: TaskPageProps) {
  const param = await searchParams;

  return (
    <div className="content-container-base">
      <header className="mt-7 mb-3">
        <p className="text-2xl font-bold text-primary-text">Good Morning</p>
        <div>
          <div></div>
        </div>
      </header>
      <div className="flex flex-col flex-1 h-full">
        <div className="mb-7 ">
          <ToolBar module="task" />
        </div>
        <div className="overflow-y-scroll flex-1 h-fit pb-24">
          <Suspense>
            <TaskList searchParams={param} />
          </Suspense>
        </div>
      </div>
      <div className="absolute">
        <AddButton content="task" />
      </div>
    </div>
  );
}

export default page;
