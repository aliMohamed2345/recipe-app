import { useFetch } from "@/app/hooks/useFetch";
import { apiEndpoints } from "@/app/utils/axios";
import { allMealTypeData } from "@/app/utils/mealTypeUtility";
import {
  ExtendedRecipeProps,
  mailTypeProps,
  mealTypeProps,
  searchRecipesResponseProps,
} from "@/app/utils/types";
import { useState, useEffect, useCallback } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import RecipeCard from "./RecipeCard";
import RecipeGridLoadingSkeleton from "./RecipeGridLoadingSkeleton";
import InfiniteScroll from "./InfiniteScroll";
import { mealTypeDataConvert } from "@/app/utils/data";
import toast from "react-hot-toast";

const MealTypePage = ({ mealType }: { mealType: mealTypeProps }) => {
  const { description, Icon, style } = allMealTypeData(mealType);
  const PAGE_SIZE = 15;

  const [recipes, setRecipes] = useState<ExtendedRecipeProps[]>([]);
  const [totalRecipes, setTotalRecipes] = useState<number>(0);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const { data, error, loading } = useFetch<searchRecipesResponseProps>({
    url: apiEndpoints.searchRecipes({
      addRecipeInformation: true,
      number: PAGE_SIZE,
      offset,
      type: mealTypeDataConvert[mealType] as mailTypeProps,
    }),
  });

  const calculateAverageServings = (recipes: ExtendedRecipeProps[]) => {
if (!recipes ||recipes?.length===0) return 0;
    let totalServings = 0;
    recipes.forEach((recipe) => {
      totalServings += recipe.servings;
    });
    return Math.round(totalServings / recipes.length);
  };

  const calculateAverageTime = (recipes: ExtendedRecipeProps[]) => {
    if (!recipes ||recipes?.length===0) return 0;
    let totalTime = 0;
    recipes.forEach((recipe) => {
      totalTime += recipe.readyInMinutes;
    });
    return Math.round(totalTime / recipes.length);
  };

  useEffect(() => {
    setTotalRecipes(data?.totalResults ?? 0);
  }, [data]);

  useEffect(() => {
    if (!data) return;
    if (error) toast.error(`SomeThing went Wrong :${error}`);
    setRecipes((prev) =>
      offset === 0 ? data?.results : [...prev, ...data.results],
    );

    if (data?.results?.length < PAGE_SIZE) {
      setHasMore(false);
    }
  }, [data, offset, error]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setOffset((prev) => prev + PAGE_SIZE);
    }
  }, [loading, hasMore]);
  return (
    <div className="container mx-auto px-2 pt-25">
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <div className="flex gap-5 items-center">
            <h1 className="text-lg sm:text-4xl font-bold">
              {mealType} Recipes
            </h1>
            <span
              className={`${style} rounded-full p-2 flex items-center gap-1`}
            >
              <Icon />
              {mealType}
            </span>
          </div>
          <p className="text-muted-foreground text-center sm:text-left">
            {description}
          </p>
        </div>
        <div className="flex gap-3 items-center pt-2 flex-wrap justify-center">
          <div className="flex items-center gap-2 p-4 rounded-xl border border-border">
            <CiForkAndKnife size={20} className="text-destructive" />
            <div className="flex flex-col text-xs">
              <p className="font-bold">{totalRecipes}</p>
              <p className="text-muted-foreground">Recipes</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-4 rounded-xl border border-border">
            <GoPeople size={20} className="text-destructive" />
            <div className="flex flex-col text-xs">
              <p className="font-bold">
                {calculateAverageServings(recipes) ?? 0}
              </p>
              <p className="text-muted-foreground">Servings</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-4 rounded-xl border border-border">
            <FaClock size={20} className="text-destructive" />
            <div className="flex flex-col text-xs">
              <p className="font-bold">{calculateAverageTime(recipes) ?? 0}</p>
              <p className="text-muted-foreground">Time</p>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <RecipeGridLoadingSkeleton />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-5 justify-items-center">
            {recipes?.map((recipe, i) => (
              <RecipeCard key={i} recipeData={recipe} />
            ))}
          </div>
          <InfiniteScroll
            onLoadMore={loadMore}
            hasMore={hasMore}
            loading={loading}
          />
        </>
      )}
    </div>
  );
};

export default MealTypePage;
