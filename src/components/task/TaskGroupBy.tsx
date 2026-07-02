"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import TaskFormModal from "../modal/TaskFormModal";

function TaskGroupBy() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between h-10 text-sm  font-medium">
        <div className="flex flex-row gap-3 text-background">
          {/* {CATEGORY_LABELS !== null &&
            Object.entries(CATEGORY_LABELS).map(([cat, label]) => (
              <button key={cat} className=" button-base px-1.5 rounded-xl">
                {label}
              </button>
            ))} */}
          <button
            className="flex text-header-text cursor-pointer items-center "
            onClick={() => setModalOpen(true)}
          >
            {" "}
            <Plus size={20} />
          </button>
        </div>

        <div className="flex flex-row gap-3 text-background">
          <button className="flex flex-row px-1.5 gap-1.5 items-center button-base rounded-xl">
            <p>Group by</p>
            <p className="font-semibold"> Category</p>
          </button>
          <button className="cursor-pointer px-5 button-base rounded-xl">
            Filter
          </button>
        </div>
      </div>
      <TaskFormModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        content="category"
      />
    </>
  );
}

export default TaskGroupBy;
