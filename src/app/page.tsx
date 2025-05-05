"use client";
import RecipeCard from "./Components/Recipe/RecipeCard";
import { useFetch } from "./hooks/useFetch";

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
interface recipeType {
  results: [recipeProps];
}
const dummyDataRecipe: recipeProps = {
  id: 610952,
  title: "Crispy Buttermilk-herb fried chicken",
  image: "https://img.spoonacular.com/recipes/637276-312x231.jpg",
  servings: 4,
  readyInMinutes: 60,
  nutrition: {
    nutrients: [{ name: "Calories", amount: 491.09, unit: "kcal" }],
  },
};
export default function Home() {
  const query = `chicken`;
  const { data } = useFetch<recipeType>({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/recipes/complexSearch?query=${query}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&addRecipeInformation=true&addRecipeNutrition=true`,
  });
  console.log(data);
  return (
    <div className="pt-40">
      <RecipeCard recipeData={dummyDataRecipe} />;
    </div>
  );
}
