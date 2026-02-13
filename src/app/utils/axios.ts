import axios from "axios";
import { convertToQueryString } from "./convertToQueryString";
import {
  complexSearchProps,
  searchRecipesByIngredientsProps,
  getRecipeInformationProps,
  getRandomRecipesProps,
  IngredientSearchProps,
  getIngredientsInformationProps,
  computeIngredientAmountProps,
  convertAmountProps,
} from "./types";
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export const apiEndpoints = {
  searchRecipes: (filters: complexSearchProps) =>
    `/recipes/complexSearch?${convertToQueryString(filters)}`,

  searchRecipesByNutrients: (
    filter: complexSearchProps & { random: boolean },
  ) => `/recipes/findByNutrients?${convertToQueryString(filter)}`,

  searchRecipesByIngredients: (filter: searchRecipesByIngredientsProps) =>
    `/recipes/findByIngredients?${convertToQueryString(filter)}`,

  getRecipeInformation: (id: number, filter: getRecipeInformationProps) =>
    `/recipes/${id}/information?${convertToQueryString(filter)}`,

  getSimilarRecipes: (id: number, { number }: { number?: number }) =>
    `/recipes/${id}/similar${number && `?number=${number}`}`,

  getRandomRecipes: (filters: getRandomRecipesProps) =>
    `/recipes/random?${convertToQueryString(filters)}`,

  getTasteById: (id: number, normalize?: boolean) =>
    `/recipes/${id}/tasteWidget${normalize && `?normalize=${normalize}`}.json`,

  getEquipmentById: (id: number) => `/recipes/${id}/equipmentWidget.json`,

  getIngredientsById: (id: number) => `/recipes/${id}/ingredientWidget.json`,

  getNutritionById: (id: number) => `/recipes/${id}/nutritionWidget.json`,

  getAnalyzedRecipeInstructions: (id: number, stepBreakdown?: boolean) =>
    `/recipes/${id}/analyzedInstructions${stepBreakdown && `?stepBreakdown=${stepBreakdown}`}`,

  summarizeRecipe: (id: number) => `/recipes/${id}/summary`,

  estimateNutritionByDishName: (title: string) =>
    `/recipes/guessNutrition${title && `?title=${title}`}`,

  IngredientSearch: (filters: IngredientSearchProps) =>
    `/food/ingredients/search?${convertToQueryString(filters)}`,

  getIngredientsInformation: (
    id: number,
    filters: getIngredientsInformationProps,
  ) => `/food/ingredients/${id}/information?${convertToQueryString(filters)}`,

  computeIngredientAmount: (
    id: number,
    filters: computeIngredientAmountProps,
  ) => `/food/ingredients/${id}/amount?${convertToQueryString(filters)}`,

  convertAmounts: (filters: convertAmountProps) =>
    `/recipes/convert?${convertToQueryString(filters)}`,
};
