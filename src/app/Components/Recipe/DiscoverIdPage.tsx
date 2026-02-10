import { typeCuisinesProps } from "@/app/utils/types";
import RecipeCard from "./RecipeCard";
const DiscoverIdPage = ({
  cuisineType,
}: {
  cuisineType: typeCuisinesProps;
}) => {
  return (
    <div className="container mx-auto px-2">
      <h1 className="font-bold text-lg sm:text-3xl text-center sm:text-left pt-20">
        {cuisineType} Recipes
      </h1>
      <p className="sm:text-lg text-sm text-muted-foreground my-5">
        Explore our delicious collection of {cuisineType} recipes curated just
        for you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
};

export default DiscoverIdPage;
