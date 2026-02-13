"use client";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RecipeCard from "./RecipeCard";
import { ExtendedRecipeProps } from "@/app/utils/types";
const RecipeSlider = ({
  RecipesData,
}: {
  RecipesData: ExtendedRecipeProps[];
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };
  console.log(RecipesData[0].image);

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
        {RecipesData.map((recipeData, index) => (
          <div key={index} className="min-w-[250px] flex-shrink-0 snap-start">
            <RecipeCard recipeData={recipeData} />
          </div>
        ))}
        {}
      </div>
    </div>
  );
};

export default RecipeSlider;
