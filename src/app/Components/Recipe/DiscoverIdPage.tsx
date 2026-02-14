"use client";

import { typeCuisinesProps } from "@/app/utils/types";
import RecipeCard from "./RecipeCard";
import { useFetch } from "@/app/hooks/useFetch";
import { apiEndpoints } from "@/app/utils/axios";
import { useEffect, useState, useCallback } from "react";
import RecipeGridLoadingSkeleton from "./RecipeGridLoadingSkeleton";
import InfiniteScroll from "./InfiniteScroll";
import {
  ExtendedRecipeProps,
  searchRecipesResponseProps,
} from "@/app/utils/types";
import toast from "react-hot-toast";

const PAGE_SIZE = 15;
const DiscoverIdPage = ({
  cuisineType,
}: {
  cuisineType: typeCuisinesProps;
}) => {
  const [recipes, setRecipes] = useState<ExtendedRecipeProps[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const { data, error, loading } = useFetch<searchRecipesResponseProps>({
    url: apiEndpoints.searchRecipes({
      cuisine: cuisineType,
      addRecipeInformation: true,
      number: PAGE_SIZE,
      offset,
    }),
  });

  useEffect(() => {
    if (!data) return;

    setRecipes((prev) =>
      offset === 0 ? data?.results : [...prev, ...data.results],
    );

    if (data?.results?.length < PAGE_SIZE) {
      setHasMore(false);
    }
  }, [data, offset]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setOffset((prev) => prev + PAGE_SIZE);
    }
  }, [loading, hasMore]);

  return (
    <div className="container mx-auto px-2">
      <h1 className="font-bold text-lg sm:text-3xl text-center sm:text-left pt-20">
        {cuisineType} Recipes
      </h1>

      <p className="sm:text-lg text-sm text-muted-foreground my-5">
        Explore our delicious collection of {cuisineType} recipes curated just
        for you.
      </p>

      {offset === 0 && loading && <RecipeGridLoadingSkeleton />}

      {recipes?.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center pt-5 max-w-6xl mx-auto">
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

      {loading && offset > 0 && (
        <div className="py-6 text-center text-muted-foreground text-sm">
          Loading more recipes...
        </div>
      )}

      {!hasMore && recipes?.length > 0 && (
        <div className="py-6 text-center text-muted-foreground text-sm">
          No more recipes found 🍽️
        </div>
      )}

      {error && toast.error("Something went wrong loading recipes.")}
    </div>
  );
};

export default DiscoverIdPage;
