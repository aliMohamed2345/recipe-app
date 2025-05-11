"use client";
import RecommendationTab from "@/app/Components/Nutrition/RecommendationTab";
import React, { useState } from "react";

type tab = "calculator" | "recommendation" | "recipes";
const Nutrition = () => {
  const [currentTab, setCurrentTab] = useState<tab>("calculator");
  console.log(currentTab);
  return (
    <div className="pt-20 container px-2 mx-auto">
      <h2 className="sm:text-3xl text-2xl font-bold text-center sm:text-left">
        Nutrition Planner
      </h2>

      <div className="my-5 bg-secondary w-fit justify-center p-2 rounded-md text-secondary-foreground flex items-center gap-2 sm:gap-4 font-bold mx-auto sm:mx-0">
        <button
          onClick={() => setCurrentTab("calculator")}
          className={`transition cursor-pointer text-sm sm:text-base ${
            currentTab === `calculator` && `bg-background p-1 rounded-md`
          }`}
        >
          Calculator
        </button>
        <button
          className={`transition cursor-pointer text-sm sm:text-base ${
            currentTab === `recommendation` && `bg-background p-1 rounded-md`
          }`}
          onClick={() => setCurrentTab("recommendation")}
        >
          Recommendation
        </button>
        <button
          className={`transition cursor-pointer text-sm sm:text-base ${
            currentTab === `recipes` && `bg-background p-1 rounded-md`
          }`}
          onClick={() => setCurrentTab("recipes")}
        >
          Recipes
        </button>
      </div>
      {currentTab === `recommendation` && <RecommendationTab />}
      {currentTab === `recipes` && <div></div>}
      {currentTab === `calculator` && <div></div>}
    </div>
  );
};

export default Nutrition;
