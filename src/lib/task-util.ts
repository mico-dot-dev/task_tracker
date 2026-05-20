import { category } from "@/src/generated/prisma";
import { TaskListModel } from "@/src/types/task";
import { ca } from "zod/locales";

export const AVAILABLE_CATEGORIES: category[] = Object.values(category);

export const CATEGORY_LABELS: Record<category, string> = {
  [category.OTHER]: "Other",
  [category.PRIORITY]: "Priority",
  [category.TODAY]: "Today",
  [category.WEEK]: "Week",
};

export function GroupTasksByCategory<T extends { category: category }>(
  tasks: T[],
) {
  return Object.values(category).map((cat) => ({
    cat,
    label: CATEGORY_LABELS[cat],
    tasks: tasks.filter((t) => t.category === cat),
  }));
}
