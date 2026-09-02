import React, { Suspense } from "react";
import AddButton from "@/src/components/ui/AddButton";
import ToolBar from "@/src/components/ui/Toolbar";
import { DataListProps } from "@/src/type/page-types";
import { dataListRegistry } from "@/src/lib/utils/data-list-registry";

function DataListContainer({
  module,
  toolBarProps,
  searchParams,
}: DataListProps) {
  const ListComponent = dataListRegistry[module];

  if (!ListComponent) {
    // Fails loudly in dev instead of a silent blank screen in prod
    if (process.env.NODE_ENV !== "production") {
      throw new Error(`No DataList registered for module "${module}"`);
    }
    return null;
  }
  return (
    <>
      {" "}
      <div className="flex flex-col flex-1 h-full bg-foreground border border-border rounded-2xl p-5">
        <div className="mb-7 ">
          <ToolBar module={module} toolBarProps={toolBarProps} />
        </div>
        <div className="overflow-y-scroll flex-1 h-fit  ">
          <Suspense>
            <ListComponent searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default DataListContainer;
