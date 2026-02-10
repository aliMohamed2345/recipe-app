import { mealTypeProps } from "./types";
import { FiCoffee } from "react-icons/fi";
import { LuSandwich } from "react-icons/lu";
import { CiForkAndKnife } from "react-icons/ci";
import { LuCookie } from "react-icons/lu";

export const mealTypeDescription = (mealType: mealTypeProps) => {
  switch (mealType) {
    case "breakfast":
      return `Start your day right with these delicious breakfast recipes. From quick and easy options to weekend brunch favorites.`;
    case "lunch":
      return `Perfect midday meals for home or work. These lunch recipes are satisfying, nutritious, and won't weigh you down.`;
    case "dinner":
      return `End your day with these delicious dinner recipes that are perfect for family meals or entertaining guests.`;
    case "snack":
      return `Keep hunger at bay between meals with these tasty snack recipes. Quick, easy, and perfect for any time of day.`;
    default:
      return "";
  }
};

export const mealTypeStyleAndIcon = (mealType: mealTypeProps) => {
  switch (mealType) {
    case "breakfast":
      return {
        style: "bg-primary text-primary-foreground",
        icon: FiCoffee,
      };
    case "lunch":
      return {
        style: "bg-secondary text-secondary-foreground",
        icon: LuSandwich,
      };
    case "dinner":
      return {
        style: `bg-green text-accent-foreground`,
        icon: CiForkAndKnife,
      };
    case "snack":
      return {
        style: `bg-destructive text-destructive-foreground`,
        icon: LuCookie,
      };
      default:
       throw new Error(`Unhandled meal type: ${mealType}`);
  }
};

export const allMealTypeData = (mealType: mealTypeProps) => {
  const {style, icon}= mealTypeStyleAndIcon(mealType)
  return {
    description: mealTypeDescription(mealType),
    style,
    Icon: icon,
  };
};
