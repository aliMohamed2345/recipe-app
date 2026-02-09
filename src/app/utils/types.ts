import { AxiosRequestConfig } from "axios";
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
      }
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
