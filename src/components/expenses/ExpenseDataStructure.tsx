"use client";

import React from "react";
import { DynamicListModel } from "@/src/schema/expense.schema";
import { ColumnDef, tableFeatures } from "@tanstack/react-table";
import DataShowcase from "../ui/DataShowcase";
import { upperCaseFormat } from "@/src/lib/utils/formatter";
import { getExpenseListSubContent } from "@/src/lib/utils/expense-mapper";

interface Props {
  data: DynamicListModel[];
}

const taskColumns: Array<ColumnDef<{}, DynamicListModel>> = [
  { accessorKey: "number", header: "No.", cell: ({ row }) => row.id },
  {
    accessorFn: (data) => data.title,
    header: "Title",
    cell: (data) => data.getValue(),
  },
  {
    header: "Expense Type",
    cell: ({ row }) => upperCaseFormat(row.original.expense_type),
  },
  {
    header: "Info 1",
    cell: ({ row }) => getExpenseListSubContent(row.original).primary,
  },
  {
    header: "Info 2",
    cell: ({ row }) => getExpenseListSubContent(row.original).secondary,
  },
];

function ExpenseDataStructure({ data }: Props) {
  return (
    <div>
      <DataShowcase columns={taskColumns} data={data} />
    </div>
  );
}

export default ExpenseDataStructure;
