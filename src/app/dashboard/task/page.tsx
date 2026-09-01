import React, { Suspense, use } from "react";
import { ListParams } from "@/src/type/page-types";
import { GetUserCategory } from "@/src/actions/category.action";
import AddButton from "@/src/components/ui/AddButton";
import DataListContainer from "@/src/components/ui/DataListContainer";

//Extract the search from REST
interface PageProps {
  searchParams?: Promise<ListParams>;
}

async function page({ searchParams }: PageProps) {
  const params = await searchParams;
  const res = await GetUserCategory();
  if (!res.success) {
    return;
  }
  return (
    <div className="content-container-base">
      <header className="mt-7 mb-3">
        <p className="text-2xl font-bold text-primary-text">Good Morning</p>
        <div>
          <DataListContainer
            module="task"
            toolBarProps={{
              categoryContent: res.data.map((c) => ({
                id: c.id.toString(),
                label: c.title,
              })),
            }}
          />
        </div>
        <div>
          <AddButton content="task" />
        </div>
      </header>
    </div>
  );
}

export default page;
