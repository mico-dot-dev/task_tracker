import React from "react";
import { GetUserStock } from "@/src/actions/stock.action";
import { stockColumns } from "./StockTableStructure";
import StockItemCard from "./StockItemCard";
import DataShowcase from "../ui/DataShowcase";

async function StockList() {
  const userStock = await GetUserStock();

  if (!userStock.success) {
    return <p>No Use Stock Available</p>;
  }

  return (
    <DataShowcase
      columns={stockColumns}
      data={userStock.data}
      CardComponent={StockItemCard}
      module="stock"
    />
  );
}

export default StockList;
