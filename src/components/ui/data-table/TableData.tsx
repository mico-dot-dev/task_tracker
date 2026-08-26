"use client";

import React from "react";
import { ModuleColumns } from "@/src/type/data-table";
import { tableFeatures, useTable, RowData } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

function TableData<T extends RowData>({
  columns,
  data,
}: {
  columns: Array<ColumnDef<{}, T>>;
  data: T[];
}) {
  const features = tableFeatures({});
  const table = useTable({
    data,
    columns,
    features,
  });

  console.log(
    table.getRowModel().rows.map((e) => e.getAllCells().map((c) => c.row)),
  );

  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup, i) => (
            <tr key={i}>
              {headerGroup.headers.map((header, ind) => (
                <th key={ind}>
                  {header.isPlaceholder ? null : (
                    <table.FlexRender header={header} />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getAllCells().map((cell) => (
                <td key={cell.id}>
                  <table.FlexRender cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
