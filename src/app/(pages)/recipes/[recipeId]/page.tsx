"use client";
import { useParams } from "next/navigation";
import React from "react";
const RecipeId = () => {
  const { recipeId } = useParams();
  console.log(recipeId);
  return <div>RecipeId</div>;
};

export default RecipeId;
