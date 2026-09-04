"use client";
import { TaskListModel } from "@/src/schema/task.schema";
import { ColumnDef, tableFeatures } from "@tanstack/react-table";
import { UpdateTaskCompletion } from "@/src/actions/task.action";
import { Ellipsis } from "lucide-react";

export const taskColumns: Array<ColumnDef<{}, TaskListModel>> = [
  {
    id: "button",
    cell: ({ row }) => (
      <button
        type="button"
        className="flex button-base w-5 aspect-square justify-self-center rounded"
        onClick={() => UpdateTaskCompletion(row.original.id)}
      ></button>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div>
        <p>{row.original.title}</p>
        <p className="text-muted-text text-sm">{row.original.description}</p>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: (data) => data.getValue() || "No Due Date",
  },
  {
    accessorKey: "completed",
    header: "Completed",
    cell: (data) => (data.getValue() ? "Completed" : "Pending"),
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
