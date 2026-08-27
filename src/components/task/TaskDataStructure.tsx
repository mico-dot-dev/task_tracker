"use client";
import DataShowcase from "@/src/components/ui/DataShowcase";
import { TaskListModel } from "@/src/schema/task.schema";
import { ColumnDef, tableFeatures } from "@tanstack/react-table";
import { UpdateTaskCompletion } from "@/src/actions/task.action";

interface Props {
  data: TaskListModel[];
}

const taskColumns: Array<ColumnDef<{}, TaskListModel>> = [
  {
    accessorKey: "number",
    header: "No.",
    cell: ({ row }) => row.id,
  },
  {
    accessorKey: "checkbox",
    header: "Checkbox",
    cell: (data) => {
      return <button type="button">checkbox</button>;
    },
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
        <button
          className="button-base"
          type="button"
          onClick={() => UpdateTaskCompletion(row.original.id)}
        >
          Click me
        </button>
      );
    },
  },
];

function TaskDataView({ data }: Props) {
  return <DataShowcase data={data} columns={taskColumns} />;
}

export default TaskDataView;
