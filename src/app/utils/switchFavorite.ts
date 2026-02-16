import { ExtendedRecipeProps, RecipeInformationResponseProps } from "./types";
export const switchFavorite = (
  e: React.MouseEvent<HTMLButtonElement>,
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>,
  recipeData: ExtendedRecipeProps | RecipeInformationResponseProps,
) => {
  e.preventDefault();
  e.stopPropagation();

  setIsFavorite((prev) => {
    const nextIsFavorite = !prev;

    if (typeof window === "undefined") return prev;

    // ⭐ ALWAYS READ FRESH STORAGE
    const favoriteRecipeList: ExtendedRecipeProps[] = JSON.parse(
      localStorage.getItem("favorite-recipes") || "[]",
    );

    if (nextIsFavorite) {
      const exists = favoriteRecipeList.some(
        (recipe) => recipe.id === recipeData?.id,
      );

      if (!exists) {
        const image = recipeData?.image?.includes("https")
          ? recipeData?.image
          : `https://spoonacular.com/recipeImages/${recipeData?.image}`;

        const favoriteRecipeData: ExtendedRecipeProps = {
          isFavorite: true,
          title: recipeData?.title,
          image,
          id: recipeData?.id,
          glutenFree: recipeData?.glutenFree,
          vegan: recipeData?.vegan,
          cheap: recipeData?.cheap,
          healthScore: recipeData?.healthScore,
          readyInMinutes: recipeData?.readyInMinutes,
          dishTypes: recipeData?.dishTypes,
          servings: recipeData?.servings,
          nutrition: recipeData?.nutrition || { nutrients: [] },
        } as ExtendedRecipeProps;

        localStorage.setItem(
          "favorite-recipes",
          JSON.stringify([...favoriteRecipeList, favoriteRecipeData]),
        );
      }
    } else {
      if (!recipeData?.id) return prev;

      const updatedList = favoriteRecipeList.filter(
        (recipe) => recipe.id !== recipeData.id,
      );

      localStorage.setItem("favorite-recipes", JSON.stringify(updatedList));
    }

    return nextIsFavorite;
  });
};
