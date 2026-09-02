"use client";
import { TaskListModel } from "@/src/schema/task.schema";
import { ColumnDef } from "@tanstack/react-table";
import { UpdateTaskCompletion } from "@/src/actions/task.action";
import { Ellipsis } from "lucide-react";

export const taskColumns: Array<ColumnDef<{}, TaskListModel>> = [
  {
    accessorKey: "Title",
    header: () => null,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {" "}
        <button
          type="button"
          className="flex button-base w-5 aspect-square justify-self-center rounded-full"
          onClick={() => UpdateTaskCompletion(row.original.id)}
        ></button>
        <span>{row.original.title}</span>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: () => null,
    cell: (data) => data.getValue(),
  },
  {
    accessorKey: "completed",
    header: () => null,
    cell: (data) => (data.getValue() ? "Completed" : "Pending"),
  },
  {
    accessorKey: "due_date",
    header: () => null,
    cell: (data) => data.getValue() || "No Due Date",
  },
  {
    id: "actions",
    header: () => null,
    cell: ({ row }) => {
      return (
        <button>
          <Ellipsis />
        </button>
      );
    },
  },
];
