import React from "react";
import DataListContainer from "@/src/components/ui/DataListContainer";
import AddButton from "@/src/components/ui/AddButton";
import { ExpenseType } from "@/src/generated/prisma";
import { upperCaseFormat } from "@/src/lib/utils/formatter";
import { ListParams } from "@/src/type/page-types";

interface PageProps {
  searchParams?: Promise<ListParams>;
}

async function page({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div className="content-container-base">
      <div className="flex flex-col flex-1s h-full">
        <DataListContainer
          module="expense"
          toolBarProps={{
            categoryContent: Object.values(ExpenseType).map((e) => ({
              id: e,
              label: upperCaseFormat(e),
            })),
          }}
        />
      </div>
      <div>
        <AddButton content="expense" />
      </div>
    </div>
  );
}

export default page;
