import React from "react";
import { ResponsiveDataProps } from "@/src/type/data-table";
import DataTable from "./data-table/TableData";
import { RowData } from "@tanstack/react-table";

function DataShowcase<T extends RowData>({
  columns,
  data,
  CardComponent,
}: ResponsiveDataProps<T>) {
  return (
    <>
      <div className="lg:block hidden">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="lg:hidden">
        {data.map((item, i) => (
          <CardComponent data={item} key={i} />
        ))}
      </div>
    </>
  );
}

export default DataShowcase;
