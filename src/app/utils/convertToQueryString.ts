import {
  complexSearchProps,
  getRecipeInformationProps,
  searchRecipesByIngredientsProps,
  getRandomRecipesProps,
  computeIngredientAmountProps,
  getIngredientsInformationProps,
  convertAmountProps,
} from "./types";

export const convertToQueryString = (
  filters:
    | complexSearchProps
    | searchRecipesByIngredientsProps
    | getRecipeInformationProps
    | getRandomRecipesProps
    | getIngredientsInformationProps
    | computeIngredientAmountProps
    | convertAmountProps,
) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;

    if (typeof value === "boolean") {
      params.append(key, value.toString());
      return;
    }

    if (typeof value === "number") {
      params.append(key, value.toString());
      return;
    }

    if (typeof value === "string") {
      params.append(key, value);
      return;
    }

    params.append(key, String(value));
  });

  return params.toString();
};
