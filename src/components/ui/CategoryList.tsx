"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import AddCategoryModal from "../modal/AddModal";
import { CategoryListModel } from "@/src/schema/category.schema";
import { GetUserCategory } from "@/src/actions/category.action";

function CategoryList() {
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
      <p></p>
      <div className="flex flex-row ">
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
      </div>
      <AddCategoryModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        content="task_category"
      />
    </>
  );
}

export default CategoryList;
