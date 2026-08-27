import { ComponentType, ReactNode } from "react";
import { RowData } from "@tanstack/react-table";
import { ColumnDef, tableFeatures } from "@tanstack/react-table";

export interface ModuleCardProps<T> {
  data: T;
}

export interface ResponsiveDataProps<T extends RowData> {
  data: T[];
  columns: Array<ColumnDef<{}, T>>;
  CardComponent: ComponentType<ModuleCardProps<T>>;
}
