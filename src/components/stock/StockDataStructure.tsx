"use client";

import React, { useState, useEffect, useCallback } from "react";
import { StockModel } from "@/src/schema/stock.schema";
import { ManageStockAmount } from "@/src/actions/stock.action";
import { Plus, Minus } from "lucide-react";
import DataShowcase from "../ui/DataShowcase";
import { ColumnDef } from "@tanstack/react-table";

interface Props {
  data: StockModel[];
}

function StockDataStructure({ data }: Props) {
  const handleStockUpdate = (
    method: "increment" | "decrement",
    stock: StockModel,
  ) => {
    ManageStockAmount(stock, method);
  };

  const stockColumns: Array<ColumnDef<{}, StockModel>> = [
    { accessorKey: "number", header: "No.", cell: ({ row }) => row.id },
    {
      accessorFn: (data) => data.name,
      header: "Title",
      cell: (data) => data.getValue(),
    },
    {
      accessorFn: (data) => data.curr_amount,
      header: "Current Amount",
      cell: (data) => data.getValue(),
    },
    {
      accessorFn: (data) => data.min_amount,
      header: "Minimum Amount",
      cell: (data) => data.getValue(),
    },
    {
      header: "Action",
      cell: ({ row }) => {
        return (
          <div className="flex gap-5">
            <button
              className="button-base"
              onClick={() => handleStockUpdate("increment", row.original)}
            >
              <Plus />
            </button>
            <button
              className="button-base"
              onClick={() => handleStockUpdate("decrement", row.original)}
            >
              <Minus />
            </button>
          </div>
        );
      },
    },
  ];

  return <DataShowcase data={data} columns={stockColumns} />;
}

export default StockDataStructure;
