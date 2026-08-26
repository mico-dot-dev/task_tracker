"use client";
import DataShowcase from "@/src/components/ui/DataShowcase";
import TaskCard from "@/src/components/task/TaskCard";
import { ModuleColumns } from "@/src/type/data-table";
import { TaskListModel } from "@/src/schema/task.schema";
import { ColumnDef, tableFeatures } from "@tanstack/react-table";
import { UpdateTaskCompletion } from "@/src/actions/task.action";

interface Props {
  data: TaskListModel[];
}

const features = tableFeatures({});

const taskColumns: Array<ColumnDef<typeof features, TaskListModel>> = [
  {
    accessorKey: "checkbox",
    header: "Checkbox",
    cell: (row) => row.getValue(),
  },
  {
    accessorFn: (row) => row.title,
    header: "Title",
    cell: (row) => row.getValue(),
  },
  {
    accessorFn: (row) => row.category,
    header: "Category",
    cell: (row) => row.getValue(),
  },
  {
    accessorFn: (row) => row.completed,
    header: "Completion",
    cell: (row) => (row.getValue() ? "Completed" : "Pending"),
  },
  {
    accessorFn: (row) => row.due_date,
    header: "Due Date",
    cell: (row) => row.getValue() || "No Due Date",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      return (
        <button onClick={() => UpdateTaskCompletion(row.original.id)}>
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
