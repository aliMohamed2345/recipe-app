"use client";
import React, { useEffect, useState } from "react";
import NotFoundFavorites from "../../Components/Home/NotFoundFavorites";
import RecipeCard from "@/app/Components/Recipe/RecipeCard";
import { ExtendedRecipeProps } from "@/app/utils/types";
import RecipeGridLoadingSkeleton from "@/app/Components/Recipe/RecipeGridLoadingSkeleton";
const recipesList =
  typeof window === "undefined"
    ? []
    : JSON.parse(localStorage.getItem("favorite-recipes") || "[]");

const Favorites = () => {
  const [recipes, setRecipes] = useState<ExtendedRecipeProps[]>(recipesList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem("favorite-recipes") || "[]"));
    setLoading(false);
  }, []);

  return loading ? (
    <div className="py-20">
      <RecipeGridLoadingSkeleton />
    </div>
  ) : recipes && recipes.length === 0 ? (
    <NotFoundFavorites />
  ) : (
    <div className="py-20 ">
      <h1 className="font-bold sm:text-3xl text-lg my-5 text-center sm:text-left container px-2 mx-auto">
        Favorite Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center px-2">
        {recipes?.map((recipe: ExtendedRecipeProps, i: number) => (
          <RecipeCard key={i} recipeData={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
