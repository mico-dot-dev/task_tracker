"use client";

import React, { useState, useEffect, useCallback } from "react";
import { StockModel } from "@/src/types/stock";
import { GetUserStock, ManageStockAmount } from "@/src/actions/stock.action";
import { Plus, Minus } from "lucide-react";

function StockList() {
  const [userStock, setUserStock] = useState<StockModel[]>([]);
  const [err, setErr] = useState<string | null>(null);

  const fetchUserStock = useCallback(async () => {
    const stockData = await GetUserStock();
    if (stockData.success) setUserStock(stockData.data);
    else setErr(stockData.error);
  }, []);

  useEffect(() => {
    fetchUserStock();
  }, [fetchUserStock]);

  function handleStockUpdate(
    method: "increment" | "decrement",
    stock: StockModel,
  ) {
    ManageStockAmount(stock, method).then(() => {
      fetchUserStock();
    });
  }

  if (err) {
    return <div>Error fetching stock data: {err}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Current Amt</th>
          <th>Minimum Amt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userStock.map((stock, i) => (
          <tr key={stock.id}>
            <td>
              {stock.id} {i + 1}
            </td>
            <td className="">
              <p>{stock.name}</p>{" "}
              <p className="text-muted-text">{stock.description}</p>
            </td>
            <td className="">{stock.curr_amount}</td>
            <td> {stock.min_amount}</td>
            <td>
              <div className="flex gap-5">
                <button
                  className="button-base"
                  onClick={() => handleStockUpdate("increment", stock)}
                >
                  <Plus />
                </button>
                <button
                  className="button-base"
                  onClick={() => handleStockUpdate("decrement", stock)}
                >
                  <Minus />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StockList;
