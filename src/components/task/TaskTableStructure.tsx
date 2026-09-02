"use client";
import { TaskListModel } from "@/src/schema/task.schema";
import { ColumnDef } from "@tanstack/react-table";
import { UpdateTaskCompletion } from "@/src/actions/task.action";
import { Ellipsis } from "lucide-react";

export const taskColumns: Array<ColumnDef<{}, TaskListModel>> = [
  {
    accessorKey: "checkbox",
    header: "",
    cell: ({ row }) => {
      return (
        <button
          type="button"
          className="flex button-base w-5 aspect-square justify-self-center"
          onClick={() => UpdateTaskCompletion(row.original.id)}
        ></button>
      );
    },
  },
  {
    accessorKey: "number",
    header: "No.",
    cell: ({ row }) => row.id,
  },
  {
    accessorFn: (data) => data.title,
    header: "Title",
    cell: (data) => data.getValue(),
  },
  {
    accessorFn: (data) => data.category,
    header: "Category",
    cell: (data) => data.getValue(),
  },
  {
    accessorFn: (data) => data.completed,
    header: "Status",
    cell: (data) => (data.getValue() ? "Completed" : "Pending"),
  },
  {
    accessorFn: (data) => data.due_date,
    header: "Due Date",
    cell: (data) => data.getValue() || "No Due Date",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      return (
        <button>
          <Ellipsis />
        </button>
      );
    },
  },
];
