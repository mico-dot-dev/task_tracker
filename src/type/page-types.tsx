import { AppModule } from "./module";

export interface ListParams {
  category?: string;
  searchText?: string;
  filter?: string;
  groupBy?: string;
}

export interface ToolBarProps {
  module: AppModule;
  categoryContent: string[];
}
