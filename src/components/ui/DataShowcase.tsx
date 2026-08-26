import React from "react";
import { ResponsiveDataProps } from "@/src/type/data-table";
import DataTable from "./data-table/TableData";
import { RowData } from "@tanstack/react-table";

function DataShowcase<T extends RowData>({
  columns,
  data,
}: ResponsiveDataProps<T>) {
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}

export default DataShowcase;
