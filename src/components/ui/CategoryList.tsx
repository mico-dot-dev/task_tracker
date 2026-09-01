"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import AddCategoryModal from "../modal/AddModal";
import { useRouter, useSearchParams } from "next/navigation";
import { CategoryFilterModel } from "@/src/type/page-types";
import { AppModule } from "@/src/type/module";

interface ContentProps {
  module: AppModule;
  content: CategoryFilterModel[];
}
function CategoryList({ content, module }: ContentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCatgoryFilter = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      params.delete("category");
    } else {
      params.set("category", id);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <p></p>
      <div className="flex flex-row ">
        <div className="flex flex-row gap-3 text-background">
          <button
            className="button-base p-2 rounded-2xl"
            onClick={() => handleCatgoryFilter("all")}
          >
            All
          </button>

          {/* Loop for category content */}
          {content.map((category) => {
            return (
              <button
                className="button-base p-2 rounded-2xl"
                key={category.id}
                onClick={() => handleCatgoryFilter(category.id)}
              >
                {category.label}
              </button>
            );
          })}
          {module === "task" && (
            <button
              className="flex text-header-text cursor-pointer items-center "
              onClick={() => setModalOpen(true)}
            >
              {" "}
              <Plus size={20} />
            </button>
          )}
        </div>
      </div>
      {module === "task" && (
        <AddCategoryModal
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
          content="task_category"
        />
      )}
    </>
  );
}

export default CategoryList;
