"use client";

import { useEffect, useState } from "react";
import NutritionPlanNotFound from "./NutritionPlanNotFound";
import RecipeSlider from "../Recipe/RecipeSlider";
import { nutritionProps } from "@/app/utils/types";
import RecipeSliderLoadingSkeleton from "../Recipe/RecipeSliderLoadingSkeleton";
import { mealTypeDataConvert } from "@/app/utils/data";

const RecipesTab = () => {
  const [nutrition, setNutrition] = useState<nutritionProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("userNutritionData");
    if (stored) setNutrition(JSON.parse(stored));
    setLoading(false);
  }, []);

  const isNutritionExist = nutrition && Object.keys(nutrition).length > 0;

  return (
    <div className="p-6 sm:p-8 rounded-2xl border bg-card text-card-foreground border-border">
      <div className="space-y-2 mb-6">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-foreground"
        >
          Nutrition-Focused Recipes
        </h2>
        <p
          className="text-sm sm:text-base text-muted-foreground"
        >
          Discover recipes tailored to your nutrition goals.
        </p>
      </div>

      {!isNutritionExist && !loading && (
        <div className="mt-10">
          <NutritionPlanNotFound />
        </div>
      )}

      {isNutritionExist && loading && (
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <RecipeSliderLoadingSkeleton key={i} />
          ))}
        </div>
      )}

      {isNutritionExist && !loading && (
        <div className="space-y-12">
          {Object.entries(mealTypeDataConvert).map(([mealType, value], i) => (
            <div key={i} className="space-y-4">
              <h3
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                {mealType} Recipes
              </h3>

              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                <RecipeSlider mealType={value} nutrition={nutrition} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesTab;
