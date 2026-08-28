import React, { Suspense } from "react";
import StockList from "@/src/components/stock/StockList";
import Toolbar from "@/src/components/ui/Toolbar";

function page() {
  return (
    <div className="content-container-base">
      <div className="flex flex-col flex-1 h-full">
        <div className="overflow-y-scroll flex-1 h-fit pb-24">
          <Suspense>
            <StockList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default page;
