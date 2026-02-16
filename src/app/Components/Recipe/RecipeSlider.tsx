"use client";
import { useRef, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RecipeCard from "./RecipeCard";
import {
  ExtendedRecipeProps,
  mailTypeProps,
  nutritionProps,
  searchRecipesResponseProps,
} from "@/app/utils/types";
import { useFetch } from "@/app/hooks/useFetch";
import { apiEndpoints } from "@/app/utils/axios";

const RecipeSlider = ({
  RecipesData,
  mealType,
  nutrition
}: {
  RecipesData?: ExtendedRecipeProps[];
  mealType?: string;
  nutrition:nutritionProps
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const url = useMemo(() => {
    if (!mealType) return null;
    return apiEndpoints.searchRecipes({
      type: mealType as mailTypeProps,
      addRecipeInformation:true,
      minCarbs:10, 
      maxCarbs:nutrition?.carbs, 
      minFat:10, 
      maxFat:nutrition?.fat, 
      minProtein:10 , 
      maxProtein:nutrition?.protein, 
      minCalories:50, 
      maxCalories:nutrition?.calories
    });
  }, [mealType, nutrition]);

  const { data: mealTypeRecipes, loading } =
    useFetch<searchRecipesResponseProps>({
      url,
    
    });

  const recipesToRender =
    mealTypeRecipes?.results || RecipesData || [];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  if (loading) return null;

  if (!recipesToRender.length) return null;

  return (
    <div className="p-2 relative mx-auto container">
      <button
        onClick={() => scroll("left")}
        className="absolute left-5 top-1/2 -translate-y-1/2 shadow-md p-3 rounded-full z-10 bg-green cursor-pointer flex items-center justify-center"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-5 top-1/2 -translate-y-1/2 shadow-md p-3 rounded-full z-10 bg-green cursor-pointer flex items-center justify-center"
      >
        <FaChevronRight />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scrollbar-hide pb-3 scroll-smooth snap-x snap-mandatory rounded-lg p-2"
      >
        {recipesToRender.map((recipeData, index) => (
          <div
            key={index}
            className="min-w-[250px] flex-shrink-0 snap-start"
          >
            <RecipeCard recipeData={recipeData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSlider;
