import {
  House,
  UserRound,
  Bus,
  ShoppingCart,
  Package,
  LucideIcon,
} from "lucide-react";
import { ExpenseType } from "@/src/generated/prisma";

interface expenseProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const expenseIconMap: Record<ExpenseType, expenseProps> = {
  [ExpenseType.HOUSE]: {
    title: "House",
    description: "Bills from the house",
    icon: House,
  },
  [ExpenseType.PERSONAL]: {
    title: "Personal",
    description: "Personal Expenses",
    icon: UserRound,
  },
  [ExpenseType.TRANSPORTATION]: {
    title: "Transportation",
    description: "",
    icon: Bus,
  },
  [ExpenseType.GROCERY]: {
    title: "Grocery",
    description: "",
    icon: ShoppingCart,
  },
  [ExpenseType.MISC]: {
    title: "Miscellaneous",
    description: "",
    icon: Package,
  },
};

export function getExpenseIcon(type: ExpenseType): LucideIcon {
  return expenseIconMap[type]?.icon || Package;
}
