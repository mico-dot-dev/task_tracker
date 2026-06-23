import React from "react";
import { Plus } from "lucide-react";

function TaskAdd() {
  return (
    <div
      className="fixed bottom-5 right-5 
          font-semibold text-sm tracking-wide lg:px-6 px-3 py-3 rounded-lg 
          flex items-center gap-2
          button-base"
    >
      <button
        className="flex cursor-pointer"
        // onClick={() => console.log("Add Task")}
      >
        <Plus className="" size={20} />
        <p className="hidden lg:block">Add Task</p>
      </button>
    </div>
  );
}

export default TaskAdd;
