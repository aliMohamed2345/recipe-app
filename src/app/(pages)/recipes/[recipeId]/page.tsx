"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";

import { fadeUp } from "@/app/utils/animationVariants";
import { useFetch } from "@/app/hooks/useFetch";
import { apiEndpoints } from "@/app/utils/axios";
import toast from "react-hot-toast";
import RecipeSectionId from "@/app/Components/Recipe/RecipeSectionId";
import RecipeTabsId from "@/app/Components/Recipe/RecipeTabsId";
import {
  RecipeInformationResponseProps,
  ExtendedIngredientProps,
  NutrientProps,
  InstructionStepProps,
  ExtendedRecipeProps,
} from "@/app/utils/types";
import RecipeIdLoadingSkeleton from "@/app/Components/Recipe/RecipeIdLoadingSkeleton";
import RecipeSlider from "@/app/Components/Recipe/RecipeSlider";
import RecipeSliderLoadingSkeleton from "@/app/Components/Recipe/RecipeSliderLoadingSkeleton";
import { switchFavorite } from "@/app/utils/switchFavorite";
const RecipeId = () => {
  const { recipeId } = useParams();

  const favoriteRecipeList: ExtendedRecipeProps[] =
    typeof window === "undefined"
      ? []
      : JSON.parse(localStorage.getItem("favorite-recipes") || "[]");
  const favoriteInitialState =
    favoriteRecipeList.find((r) => +recipeId! === r.id)?.isFavorite || false;

  const [currentTab, setCurrentTab] = useState<"ingredients" | "instructions">(
    "ingredients",
  );

  const { data, error, loading } = useFetch<RecipeInformationResponseProps>({
    url: apiEndpoints.getRecipeInformation(Number(recipeId), {
      includeNutrition: true,
    }),
  });
  const { data: similarRecipes, loading: loadingSimilarRecipes } = useFetch<
    ExtendedRecipeProps[]
  >({
    url: apiEndpoints.getSimilarRecipes(Number(recipeId), { number: 20 }),
  });
  const [isFavorite, setIsFavorite] = useState<boolean>(favoriteInitialState);
  const calories = useMemo(() => {
    return data?.nutrition?.nutrients?.find(
      (n: NutrientProps) => n.name === "Calories",
    )?.amount;
  }, [data]);

  const ingredients: ExtendedIngredientProps[] = useMemo(() => {
    return data?.extendedIngredients ?? [];
  }, [data]);

  const instructions: InstructionStepProps[] = useMemo(() => {
    return data?.analyzedInstructions?.[0]?.steps ?? [];
  }, [data]);

  if (loading) {
    return <RecipeIdLoadingSkeleton />;
  }

  if (!data) return null;

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 space-y-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>
        {error && toast.error(`Something Went Wrong:${error}`)}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {data.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <IoMdTime /> {data.readyInMinutes} min
            </div>

            <div className="flex items-center gap-2">
              <GoPeople /> {data.servings} servings
            </div>

            {calories && (
              <div className="flex items-center gap-2">
                🔥 {Math.round(calories)} kcal
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {data.vegan && (
              <span className="px-3 py-1 rounded-full text-xs bg-muted hover:bg-green transition-all cursor-pointer">
                Vegan
              </span>
            )}
            {data.vegetarian && (
              <span className="px-3 py-1 rounded-full text-xs bg-muted hover:bg-green transition-all cursor-pointer">
                Vegetarian
              </span>
            )}
            {data.glutenFree && (
              <span className="px-3 py-1 rounded-full text-xs bg-muted hover:bg-green transition-all cursor-pointer">
                Gluten Free
              </span>
            )}
            {data.veryHealthy && (
              <span className="px-3 py-1 rounded-full text-xs bg-muted hover:bg-green transition-all cursor-pointer">
                Very Healthy
              </span>
            )}
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            {data.healthScore && <span>Health Score: {data.healthScore}</span>}

            {data.pricePerServing && (
              <span>${(data.pricePerServing / 100).toFixed(2)} / serving</span>
            )}
          </div>
        </div>
      </motion.div>
      <div>
        <h1 className="sm:text-2xl text-lg text-foreground font-bold flex gap-2 items-center my-3 ">
          <CiForkAndKnife className="text-destructive" size={30} />
          Description
        </h1>
        <p
          className="text-muted-foreground leading-relaxed my-5"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />

        <button
          onClick={(e) =>
            switchFavorite(e, setIsFavorite, data)
          }
          className="rounded-xl cursor-pointer mx-auto border px-5 py-2 hover:bg-muted transition flex gap-2 items-center"
        >
          {isFavorite ? (
            <GoHeartFill className="text-destructive" />
          ) : (
            <GoHeart className="text-destructive" />
          )}{" "}
          Add To Favorite
        </button>
      </div>

      {data.nutrition?.nutrients && (
        <RecipeSectionId title="Nutrition Facts">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {data.nutrition.nutrients.slice(0, 6).map((n: NutrientProps, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="border rounded-2xl p-4 text-center"
              >
                <p className="text-sm text-muted-foreground">{n.name}</p>
                <p className="text-xl font-bold">
                  {Math.round(n.amount)} {n.unit}
                </p>
              </motion.div>
            ))}
          </div>
        </RecipeSectionId>
      )}

      <RecipeSectionId>
        <RecipeTabsId currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <AnimatePresence mode="wait">
          {currentTab === "ingredients" && (
            <motion.ul
              key="ingredients"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-3"
            >
              {ingredients.map((ingredient: ExtendedIngredientProps, i) => (
                <li
                  key={i}
                  className="flex gap-3 p-3 rounded-xl hover:bg-muted"
                >
                  • {ingredient.original}
                </li>
              ))}
            </motion.ul>
          )}

          {currentTab === "instructions" && (
            <motion.ul
              key="instructions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {instructions.map((s: InstructionStepProps) => (
                <li key={s.number} className="flex gap-4 items-center">
                  <span className="flex items-center justify-center min-w-[2rem] aspect-square rounded-full bg-green text-white font-bold">
                    {s.number}
                  </span>
                  <p className="flex-1">{s.step}</p>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </RecipeSectionId>

      <h1 className="sm:text-2xl text-lg text-foreground font-bold flex gap-2 items-center my-3 ">
        <IoFastFoodOutline className="text-destructive" /> Similar Recipes
      </h1>
      {loadingSimilarRecipes ? (
        <RecipeSliderLoadingSkeleton />
      ) : (
        <RecipeSlider RecipesData={similarRecipes ?? []} />
      )}
    </div>
  );
};

export default RecipeId;
