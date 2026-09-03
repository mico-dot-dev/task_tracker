"use client";
import { TaskListModel } from "@/src/schema/task.schema";
import { ColumnDef } from "@tanstack/react-table";
import { UpdateTaskCompletion } from "@/src/actions/task.action";
import { Ellipsis } from "lucide-react";

export const taskColumns: Array<ColumnDef<{}, TaskListModel>> = [
  {
    id: "button",
    cell: ({ row }) => (
      <button
        type="button"
        className="flex button-base w-5 aspect-square justify-self-center rounded-full"
        onClick={() => UpdateTaskCompletion(row.original.id)}
      ></button>
    ),
  },
  {
    accessorKey: (data) => data.title,
    header: "Title",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: (data) => data.category,
    header: "Category",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: (data) => data.completed,
    header: "Completed",
    cell: (data) => (data.getValue() ? "Completed" : "Pending"),
  },
  {
    accessorKey: (data) => data.due_date,
    header: "Due Date",
    cell: (data) => data.getValue() || "No Due Date",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <button>
          <Ellipsis />
        </button>
      );
    },
  },
];
