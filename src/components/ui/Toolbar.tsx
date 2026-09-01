import React, { Suspense } from "react";
import SearchBar from "@/src/components/ui/SearchBar";
import CategoryList from "@/src/components/ui/CategoryList";
import Filter from "@/src/components/ui/Filter";
import { DataListProps } from "@/src/type/page-types";

function Toolbar({ module, toolBarProps }: DataListProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-5 mb-3 border-b border-border">
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="flex pl-15">
          <Filter />
        </div>
      </div>
      <Suspense>
        <CategoryList module={module} content={toolBarProps.categoryContent} />
      </Suspense>
    </div>
  );
}

export default Toolbar;
