"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { CiHeart, CiForkAndKnife } from "react-icons/ci";
import { LuChefHat } from "react-icons/lu";
import { sliderRecipeDummyData } from "@/app/Components/Recipe/RecipeSlider";
import RecipeCard from "@/app/Components/Recipe/RecipeCard";
import { fadeUp } from "@/app/utils/animationVariants";
// import RecipeIdLoadingSkeleton from "../../../Components/Recipe/RecipeIdLoadingSkeleton";
const recipeDataId = {
  image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  title:
    "Peanut Butter Banana Oat Breakfast Cookies with Carob / Chocolate Chips",
  cookingTime: 45,
  servings: 16,
  nutrition: {
    calories: 103,
    protein: 4,
    carbs: 15,
    fat: 5,
    fiber: 2,
    sugar: 6,
  },
  About:
    "If you want to add more gluten free and dairy free recipes to your repertoire, this recipe is a great healthy breakfast option.",
  Ingredients: [
    "2 ripe bananas, mashed until smooth & creamy",
    "1/4 cup carob or chocolate chips",
    "1/4 cup chopped nuts",
    "2/3 cup unsweetened applesauce",
    "1 scoop vanilla protein powder",
    "1 tsp butter flavor extract",
    "1/3 cup peanut butter",
  ],
  Instructions: [
    "Preheat oven to 350°F (175°C). Mix mashed banana & peanut butter.",
    "Add applesauce, protein powder and extract. Mix well.",
    "Add oatmeal & nuts and combine.",
    "Let dough rest 10 minutes then form cookies.",
    "Bake 20–30 minutes until golden brown.",
  ],
};



const RecipeId = () => {
  const { recipeId } = useParams();
  console.log(recipeId)
  const [currentTab, setCurrentTab] = useState<"ingredients" | "instructions">(
    "ingredients"
  );

  return (
    // <RecipeIdLoadingSkeleton/>
    <div className="container mx-auto px-4 pt-24 pb-12 space-y-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center pt-5 max-w-6xl mx-auto"
      >
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={recipeDataId.image}
            alt={recipeDataId.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {recipeDataId.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <IoMdTime size={20} /> {recipeDataId.cookingTime} minutes
            </div>
            <div className="flex items-center gap-2">
              <GoPeople size={20} /> {recipeDataId.servings} servings
            </div>
          </div>

          <button className="rounded-xl cursor-pointer border px-5 py-2 hover:bg-muted transition flex gap-2 items-center">
            <CiHeart size={18} /> Add To Favorite
          </button>

          <p className="text-muted-foreground leading-relaxed">
            {recipeDataId.About}
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <div className="border rounded-3xl p-6 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold">Nutrition Facts</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(recipeDataId.nutrition).map(([key, value]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.05 }}
                className="border rounded-2xl p-4 text-center"
              >
                <p className="text-sm capitalize text-muted-foreground">
                  {key}
                </p>
                <p className="text-xl font-bold">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <div className="border rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex justify-center">
            <div className="flex bg-muted p-2 rounded-2xl gap-2">
              <button
                className={`px-4 py-2 rounded-xl cursor-pointer flex gap-2 items-center transition ${
                  currentTab === "ingredients" ? "bg-background shadow" : ""
                }`}
                onClick={() => setCurrentTab("ingredients")}
              >
                <CiForkAndKnife /> Ingredients
              </button>

              <button
                className={`px-4 py-2 rounded-xl flex gap-2 items-center transition ${
                  currentTab === "instructions" ? "bg-background shadow" : ""
                }`}
                onClick={() => setCurrentTab("instructions")}
              >
                <LuChefHat /> Instructions
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentTab === "ingredients" && (
              <motion.ul
                key="ingredients"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-3"
              >
                {recipeDataId.Ingredients.map((ingredient, i) => (
                  <li
                    key={i}
                    className="flex gap-3 p-3 rounded-xl hover:bg-muted transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    {ingredient}
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
                {recipeDataId.Instructions.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <p>{step}</p>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <h2 className="text-2xl font-bold mb-6">Similar Recipes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sliderRecipeDummyData.map((recipe, i) => (
            <RecipeCard key={i}  />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RecipeId;
