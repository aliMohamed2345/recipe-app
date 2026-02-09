"use client";
import { useRef } from "react";
// import { useFetch } from "@/app/hooks/useFetch";
// import RecipeCard from "./RecipeCard";
// import { recipeProps } from "@/app/page";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RecipeCard from "./RecipeCard";
import { mealTypeProps } from "@/app/utils/types";
 export const sliderRecipeDummyData = [
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
    {
      id: 101,
      title: "Grilled Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      servings: 2,
      readyInMinutes: 35,
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 420,
            unit: "kcal",
          },
        ],
      },
    },
  ];
const RecipeSlider = ({ meal }: { meal: mealTypeProps }) => {
  console.log(meal);
 
  // const nutrition = JSON.parse(
  // localStorage.getItem("userNutritionData") || "{}"
  // );
  // const { carbs, protein, fat } = nutrition;
  // const {
  //   data: responseRecipes,
  //   loading,
  //   error,
  // } = useFetch<{ results: recipeProps[] }>({
  //   url: `/recipes/complexSearch?minProtein=${protein}&minCarbs=${carbs}&minFat=${fat}&addRecipeInformation=true&type=${mealType[meal]}`,
  // });
  // console.log(responseRecipes);
  // const exampleSliderRecipe = [Array.from({ length: 10 }, (_, index) => index)];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  // if (loading) return <p className="p-5">Loading recipes...</p>;
  // if (error) return <p className="p-5 text-destructive">Error: {error}</p>;

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
        {/* {responseRecipes?.results?.map((recipe) => (
          <div
            key={recipe.id}
            className="min-w-[250px] flex-shrink-0 snap-start"
          >
            <RecipeCard recipeData={recipe} />
          </div>
        ))} */}
        {sliderRecipeDummyData.map((_, index) => (
          <div key={index} className="min-w-[250px] flex-shrink-0 snap-start">
            <RecipeCard />
          </div>
        ))}
        {}
      </div>
    </div>
  );
};

export default RecipeSlider;
