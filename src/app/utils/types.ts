import { AxiosRequestConfig } from "axios";
import { ReactNode } from "react";

export interface recipeProps {
  id: number;

  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  nutrition: {
    nutrients: [
      {
        name: string;
        amount: number;
        unit: string;
      },
    ];
  };
}

export interface recipeType {
  results: [recipeProps];
}

export type activityLevelType =
  | "sedentary"
  | "light"
  | "moderate"
  | "very"
  | "extra";

export interface MacrosState {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  activityLevel: activityLevelType;
}

export interface UseFetchProps {
  url: string | null;
  options?: AxiosRequestConfig;
  dependencies?: unknown[];
}

export type MacroSliderProps = {
  label: string;
  unit: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
  step: number;
  totalCalories: number;
};

export type tabType = "calculator" | "recommendation" | "recipes";

export type mealTypeProps = "breakfast" | "lunch" | "dinner" | "snack";

export type typeCuisinesProps =
  | `African`
  | `Asian`
  | `American`
  | `British`
  | `Cajun`
  | `Caribbean`
  | `Chinese`
  | `Eastern European`
  | `European`
  | `French`
  | `German`
  | `Greek`
  | `Indian`
  | `Irish`
  | `Italian`
  | `Japanese`
  | `Jewish`
  | `Korean`
  | `Latin American`
  | `Mediterranean`
  | `Mexican`
  | `Middle Eastern`
  | `Nordic`
  | `Southern`
  | `Spanish`
  | `Thai`
  | `Vietnamese`;

export type typeIntoleranceProps =
  | `Dairy`
  | `Egg`
  | `Gluten`
  | `Grain`
  | `Peanut`
  | `Seafood`
  | `Sesame`
  | `Shellfish`
  | `Soy`
  | `Sulfite`
  | `Tree Nut`
  | `Wheat`;

export type mailTypeProps =
  | `main course`
  | `side dish`
  | `dessert`
  | `appetizer`
  | `salad`
  | `bread`
  | `breakfast`
  | `soup`
  | `beverage`
  | `sauce`
  | `marinade`
  | `fingerfood`
  | `snack`
  | `drink`;

export type cuisineDataProps = { title: typeCuisinesProps; image: string };

export interface DropDownMenuProps {
  items: string[];
  placeholder: string;
  onSelect?: (value: string) => void;
  value?: string;
}

export interface FilterDataProps {
  cuisine?: typeCuisinesProps;
  mealType?: mailTypeProps;
  intolerance?: typeIntoleranceProps;
}

export interface FilterBlockProps {
  title: string;
  children: ReactNode;
}

export interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

export interface SearchInputProps {
  value: string;
  onChange: (v: string) => void;
  onSearch: () => void;
}
