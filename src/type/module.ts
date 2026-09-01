export type AppModule = "task" | "expense" | "stock" | "transaction" | "income";

export type ModuleWithModals = Exclude<AppModule, "stock"> | "task_category";
// export type ModuleWithList = Exclude<AppModule, "stock">;
