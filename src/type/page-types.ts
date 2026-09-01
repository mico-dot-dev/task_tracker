import { ReactNode } from "react";
import { AppModule } from "../type/module";
import { ModuleWithModals } from "../type/module";

export interface ListParams {
  category?: string;
  searchText?: string;
  filter?: string;
  groupBy?: string;
}

export interface CategoryFilterModel {
  id: string;
  label: string;
}

export interface ToolBarProps {
  categoryContent: CategoryFilterModel[];
}

export interface DataListProps {
  module: AppModule;
  toolBarProps: ToolBarProps;
}
