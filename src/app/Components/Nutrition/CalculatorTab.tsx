"use client";
import MacroSlider from "./MacroSlider";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setCarbs,
  getTotalCalories,
  setFat,
  setProtein,
} from "@/app/redux/Slices/macroSlice";
import { RootState } from "@/app/redux/store";
import { useEffect, useState } from "react";

type activityLevelType = "sedentary" | "light" | "moderate" | "very" | "extra";
const CalculatorTab = () => {
  const dispatch = useDispatch();
  const { carbs, protein, fat, calories } = useSelector(
    (state: RootState) => state.macro
  );
  const [activityLevel, setActivityLevel] =
    useState<activityLevelType>("sedentary");

  const handleCreateNutritionPlan = () => {
    const nutritionData = {
      calories,
      carbs,
      protein,
      fat,
    };
    localStorage.setItem("userNutritionData", JSON.stringify(nutritionData));
  };

  const proteinPercentage = (((protein * 4) / calories) * 100).toFixed(1);
  const carbsPercentage = (((carbs * 4) / calories) * 100).toFixed(1);
  const fatsPercentage = (((fat * 9) / calories) * 100).toFixed(1);
  useEffect(() => {
    dispatch(getTotalCalories());
  }, [fat, protein, carbs, dispatch]);

  console.log(activityLevel);
  console.log(carbs, protein);
  return (
    <div className="flex flex-col gap-3">
      <div className="p-5 border-border rounded-xl border mb-5">
        <h4 className="sm:text-2xl text-lg font-bold">
          Dietary Recommendations
        </h4>
        <p className="sm:text-md text-xs text-muted-foreground">
          General nutrition guidelines based on your goals
        </p>
        <div className="p-5 space-y-6 max-w-xl">
          {/* <MacroSlider
            label="Calories"
            unit=""
            value={calories}
            onChange={(e) => dispatch(setCalories(e))}
            min={1000}
            max={4000}
            step={50}
            totalCalories={calories}
          /> */}
          <MacroSlider
            label="Protein"
            unit="g"
            value={protein}
            onChange={(e) => dispatch(setProtein(e))}
            min={50}
            max={300}
            step={5}
            totalCalories={protein * 4}
          />
          <MacroSlider
            label="Carbs"
            unit="g"
            value={carbs}
            onChange={(e) => dispatch(setCarbs(e))}
            min={50}
            max={500}
            step={5}
            totalCalories={carbs * 4}
          />
          <MacroSlider
            label="Fat"
            unit="g"
            value={fat}
            onChange={(e) => dispatch(setFat(e))}
            min={20}
            max={200}
            step={1}
            totalCalories={fat * 9}
          />
        </div>
        <div className="">
          <p className="font-bold text-lg">Daily Activity Levels</p>
          <div className="flex flex-col gap-5 font-bold mt-5">
            <div className="gap-2 flex items-center ">
              <input
                onClick={() => setActivityLevel("sedentary")}
                type="radio"
                name="activity"
                id="sedentary"
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              <label
                htmlFor="sedentary"
                onClick={() => setActivityLevel("sedentary")}
              >
                Sedentary (little or no exercise)
              </label>
            </div>
            <div className="gap-2 flex items-center ">
              <input
                type="radio"
                onClick={() => setActivityLevel("light")}
                name="activity"
                id="light"
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              <label htmlFor="light" onClick={() => setActivityLevel("light")}>
                Light Activity (light exercise 1-3 days/week)
              </label>
            </div>
            <div className="gap-2 flex items-center ">
              <input
                onClick={() => setActivityLevel("moderate")}
                type="radio"
                name="activity"
                id="moderate"
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              <label
                htmlFor="moderate"
                onClick={() => setActivityLevel("moderate")}
              >
                Moderate Activity (moderate exercise 3-5 days/week)
              </label>
            </div>
            <div className="gap-2 flex items-center ">
              <input
                onClick={() => setActivityLevel("very")}
                type="radio"
                name="activity"
                id="very"
                className="h-4 w-4 accent-primary cursor-pointer"
              />
              <label htmlFor="very" onClick={() => setActivityLevel("very")}>
                Very Active (heavy exercise 6-7 days/week)
              </label>
            </div>
            <div className="gap-2 flex items-center ">
              <input
                onClick={() => setActivityLevel("extra")}
                type="radio"
                name="activity"
                id="extra"
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              <label htmlFor="extra" onClick={() => setActivityLevel("extra")}>
                Extra Active (very heavy exercise, physical job)
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 border-border rounded-xl border mb-5">
        <h4 className="sm:text-2xl text-lg font-bold mb-5 text-center sm:text-left">
          Summary
        </h4>
        <p className="text-muted-foreground font-bold text-base text-center sm:text-left">
          Total Calories:
        </p>
        <p className="text-bold text-2xl text-center sm:text-left">
          {calories}
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 mt-10 justify-center gap-3">
          <div className="flex flex-col text-center bg-secondary hover:bg-green group transition text-primary-secondary font-bold p-5 rounded-lg cursor-pointer">
            <p className="text-green text-lg group-hover:text-secondary-foreground">
              Protein
            </p>
            <p>
              {proteinPercentage}% ({protein}g)
            </p>
          </div>
          <div className="flex flex-col text-center bg-secondary hover:bg-green group transition text-primary-secondary font-bold p-5 rounded-lg cursor-pointer">
            <p className="text-green text-lg group-hover:text-secondary-foreground">
              Carbs
            </p>
            <p>
              {carbsPercentage}% ({carbs}g)
            </p>
          </div>
          <div className="flex flex-col text-center bg-secondary hover:bg-green group transition text-primary-secondary font-bold p-5 rounded-lg cursor-pointer">
            <p className="text-green text-lg group-hover:text-secondary-foreground">
              Fats
            </p>
            <p>
              {fatsPercentage}% ({fat}g)
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={handleCreateNutritionPlan}
        className="bg-primary text-primary-foreground p-3 rounded-lg mx-auto font-bold cursor-pointer"
      >
        Find Recipes Matching your plans
      </button>
    </div>
  );
};

export default CalculatorTab;
