import { ReactNode } from "react";
import { AppModule } from "./module";
import { ModuleWithModals } from "../components/modal/AddModal.config";

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
  module: ModuleWithModals;
  toolBarProps: ToolBarProps;
  dataList: ReactNode;
}
