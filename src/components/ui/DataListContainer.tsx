import React, { Suspense } from "react";
import AddButton from "@/src/components/ui/AddButton";
import ToolBar from "@/src/components/ui/Toolbar";
import { ToolBarProps, DataListProps } from "@/src/type/page-types";

function DataListContainer({ module, toolBarProps, dataList }: DataListProps) {
  return (
    <>
      {" "}
      <div className="flex flex-col flex-1 h-full">
        <div className="mb-7 ">
          <ToolBar {...toolBarProps} />
        </div>
        <div className="overflow-y-scroll flex-1 h-fit pb-24">
          <Suspense>{dataList}</Suspense>
        </div>
      </div>
      <div className="absolute">
        <AddButton content={module} />
      </div>
    </>
  );
}

export default DataListContainer;
