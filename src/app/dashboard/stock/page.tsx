import React, { Suspense } from "react";
import StockList from "@/src/components/stock/StockList";
import Toolbar from "@/src/components/ui/Toolbar";

function page() {
  return (
    <div>
      <Suspense>
        <StockList />
      </Suspense>
    </div>
  );
}

export default page;
