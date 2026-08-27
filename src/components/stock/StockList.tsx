import React from "react";
import { GetUserStock } from "@/src/actions/stock.action";
import StockDataStructure from "./StockDataStructure";

async function StockList() {
  const userStock = await GetUserStock();

  if (!userStock.success) {
    return <p>No Use Stock Available</p>;
  }

  return <StockDataStructure data={userStock.data} />;
}

export default StockList;
