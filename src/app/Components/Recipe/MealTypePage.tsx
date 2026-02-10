import { allMealTypeData } from "@/app/utils/mealTypeUtility";
import { mealTypeProps } from "@/app/utils/types";
import { CiForkAndKnife } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import RecipeCard from "./RecipeCard";
// import RecipeGridLoadingSkeleton from "./RecipeGridLoadingSkeleton";
const MealTypePage = ({ mealType }: { mealType: mealTypeProps }) => {
  const { description, Icon, style } = allMealTypeData(mealType);
  return (
    <div className="container mx-auto px-2 pt-25">
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex gap-5 items-center">
            <h1 className="text-lg sm:text-4xl font-bold">
              {mealType} Recipes
            </h1>
            <span
              className={`${style} rounded-full p-2 flex items-center gap-1`}
            >
              <Icon />
              {mealType}
            </span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-3 items-center pt-2 flex-wrap justify-center">
          <div className="flex items-center gap-2 p-4 rounded-xl border border-border">
            <CiForkAndKnife size={20} className="text-destructive" />
            <div className="flex flex-col text-xs">
              <p className="font-bold">12</p>
              <p className="text-muted-foreground">Recipes</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-4 rounded-xl border border-border">
            <GoPeople size={20} className="text-destructive" />
            <div className="flex flex-col text-xs">
              <p className="font-bold">5</p>
              <p className="text-muted-foreground">Servings</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-4 rounded-xl border border-border">
            <FaClock size={20} className="text-destructive" />
            <div className="flex flex-col text-xs">
              <p className="font-bold">80</p>
              <p className="text-muted-foreground">Time</p>
            </div>
          </div>
        </div>
      </div>
      {/* <RecipeGridLoadingSkeleton /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-5">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
};

export default MealTypePage;
