"use client";
import MealTypePage from "@/app/Components/Recipe/MealTypePage";
import { mealTypeProps } from "@/app/utils/types";
import { useParams } from "next/navigation";
import React from "react";
const Category = () => {
  const { categoryId } = useParams() as { categoryId: mealTypeProps };
  console.log(categoryId);
  return (
    <div>
      <MealTypePage mealType={categoryId } />
    </div>
  );
};

export default Category;
