import React from "react";
import { Search } from "lucide-react";

function TaskSearch() {
  return (
    <div className="flex relative mb-4 ">
      {/* 1. Icon Container */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-5 w-5 text-muted-icon" aria-hidden="true" />
      </div>

      <input
        type="text"
        placeholder="Search a task..."
        id="task-search"
        name="task-search"
        className=" w-full 
              py-2 pl-10 pr-4 text-sm 
              input-base"
      />
    </div>
  );
}

export default TaskSearch;
