"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import AddCategoryModal from "../AddFormModal/AddFormModal";
import { CategoryListModel } from "@/src/types/category";
import { GetUserCategory } from "@/src/actions/category.action";

function TaskGroupBy() {
  const [modalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryListModel[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const userCategories = await GetUserCategory();
      if (userCategories.success) {
        setCategories(userCategories.data);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between h-10 text-sm  font-medium">
        <div className="flex flex-row gap-3 text-background">
          {categories.map((category) => {
            return (
              <button className="button-base p-2 rounded-2xl" key={category.id}>
                {category.title}
              </button>
            );
          })}
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
            <p className="font-bold"> Category</p>
          </button>
          <button className="cursor-pointer px-5 button-base rounded-xl">
            Filter
          </button>
        </div>
      </div>
      <AddCategoryModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        content="task_category"
      />
    </>
  );
}

export default TaskGroupBy;
