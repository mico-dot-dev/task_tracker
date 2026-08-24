"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import AddCategoryModal from "../modal/AddModal";
import { CategoryListModel } from "@/src/schema/category.schema";
import { GetUserCategory } from "@/src/actions/category.action";
import { ExpenseType } from "@/src/generated/prisma";
import { AppModule } from "@/src/type/module";
import { upperCaseString } from "@/src/lib/utils/formatter";

interface ListProps {
  content: string[];
}

function CategoryList({ content }: ListProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <p></p>
      <div className="flex flex-row ">
        <div className="flex flex-row gap-3 text-background">
          {content.map((category, index) => {
            return (
              <button className="button-base p-2 rounded-2xl" key={index}>
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
