import dynamic from "next/dynamic";
import React from "react";
export type ContentType = "task" | "expense" | "task_category";

interface AddContents {
  label: string;
  AddFormComponent: React.ComponentType<{ closeModal: () => void }>;
}

const TaskForm = dynamic(() => import("@/src/components/form/TaskForm"));
const TaskCategoryForm = dynamic(
  () => import("@/src/components/form/TaskCatForm"),
);
const ExpenseForm = dynamic(() => import("@/src/components/form/ExpenseForm"));

export const FORM_REGISTRY: Record<ContentType, AddContents> = {
  task: {
    label: "Task",
    AddFormComponent: TaskForm,
  },

  task_category: {
    label: "Category",
    AddFormComponent: TaskCategoryForm,
  },

  expense: {
    label: "Expense",
    AddFormComponent: ExpenseForm,
  },
};
