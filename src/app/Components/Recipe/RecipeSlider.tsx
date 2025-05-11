"use client";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const dummyRecipes = [
  { id: 1, title: "Peanut Butter Banana Cookies", time: 45, servings: 16, tags: ["gluten free", "dairy free"] },
  { id: 2, title: "OREO Turkeys for Thanksgiving", time: 40, servings: 48, tags: [] },
  { id: 3, title: "Sausage & Pepperoni Stromboli", time: 28, servings: 6, tags: ["cheesy"] },
  { id: 4, title: "Avocado Toast with Egg", time: 10, servings: 1, tags: ["vegetarian"] },
  { id: 5, title: "Spaghetti Bolognese", time: 35, servings: 4, tags: [] },
  { id: 6, title: "Grilled Chicken Salad", time: 20, servings: 2, tags: ["healthy"] },
  { id: 7, title: "Classic Cheeseburger", time: 25, servings: 3, tags: [] },
  { id: 8, title: "Blueberry Muffins", time: 30, servings: 12, tags: ["dessert"] },
  { id: 9, title: "Vegan Buddha Bowl", time: 25, servings: 2, tags: ["vegan", "gluten free"] },
];

export default function RecipeSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative px-4 py-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-orange-500">📈</span> Trending Now
      </h2>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide"
      >
        {dummyRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="min-w-[300px] bg-white rounded-lg border shadow-sm hover:shadow-md transition-all"
          >
            <div className="h-[150px] bg-gray-800 text-white flex items-center justify-center text-sm rounded-t-lg px-2 text-center">
              {recipe.title}
            </div>
            <div className="p-4">
              <p className="font-semibold text-sm">{recipe.title}</p>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>⏱ {recipe.time} min</span>
                <span>👤 {recipe.servings} servings</span>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                {recipe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100 z-10"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100 z-10"
      >
        <FaArrowRight />
      </button>
    </section>
  );
}
