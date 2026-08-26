import { ComponentType, ReactNode } from "react";
import { RowData } from "@tanstack/react-table";
import { ColumnDef, tableFeatures } from "@tanstack/react-table";

export interface ModuleCardProps<T> {
  data: T;
}

export type DataColumn<T> = {
  type: "data";
  header: string;
  accessor: (row: T) => string;
};

export type ActionColumn<T> = {
  type: "action";
  header: string;
  actions: (row: T) => ReactNode;
};

export type TableColumn<T> = DataColumn<T> | ActionColumn<T>;

export type ModuleColumns<T> = TableColumn<T>[];

export interface ResponsiveDataProps<T extends RowData> {
  data: T[];
  columns: Array<ColumnDef<{}, T>>;
  CardComponent?: ComponentType<ModuleCardProps<T>>;
}
