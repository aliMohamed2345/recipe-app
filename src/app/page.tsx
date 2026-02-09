"use client";
import RecipeSlider from "./Components/Recipe/RecipeSlider";
// import { useFetch } from "./hooks/useFetch";



export default function Home() {
  // const query = `chicken`;
  // const { data: responseRecipes } = useFetch<recipeType>({
    // url: `/recipes/complexSearch?query=${query}&addRecipeInformation=true&addRecipeNutrition=true`,
  // });
  // console.log({ data: responseRecipes?.results || {} });
  return (
    <div className="pt-20">
      <RecipeSlider meal="breakfast" />
    </div>
  );
}
