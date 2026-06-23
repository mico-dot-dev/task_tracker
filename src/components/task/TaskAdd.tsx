"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import TaskFormModal from "../modal/TaskFormModal";

function TaskAdd() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div
        className="fixed bottom-5 right-5
            font-semibold text-sm tracking-wide lg:px-6 px-3 py-3 rounded-lg
            flex items-center gap-2
            button-base"
      >
        <button
          className="flex cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <Plus className="" size={20} />
          <p className="hidden lg:block">Add Task</p>
        </button>
      </div>

      <TaskFormModal isOpen={modalOpen} setIsOpen={setModalOpen} />
    </div>
  );
}

export default TaskAdd;
