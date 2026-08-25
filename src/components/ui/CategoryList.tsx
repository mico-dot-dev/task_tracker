"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import AddCategoryModal from "../modal/AddModal";
import { useRouter, useSearchParams } from "next/navigation";

interface ListProps {
  content: string[];
}

function CategoryList({ content }: ListProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCatgoryFilter = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
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
            onClick={() => handleCatgoryFilter("All")}
          >
            All
          </button>

          {/* Loop for category content */}
          {content.map((category, index) => {
            return (
              <button
                className="button-base p-2 rounded-2xl"
                key={index}
                onClick={() => handleCatgoryFilter(category)}
              >
                {category}
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
