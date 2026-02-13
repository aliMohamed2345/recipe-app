// import { meals } from "@/app/utils/data";
// import RecipeSlider from "../Recipe/RecipeSlider";
// import { mealTypeProps } from "@/app/utils/types";
import NutritionPlanNotFound from "./NutritionPlanNotFound";
const RecipesTab = () => {
  const nutrition = JSON.parse(
    localStorage.getItem("userNutritionData") || "{}",
  );
  const isNutritionExist = nutrition && Object.keys(nutrition).length > 0;
  console.log(nutrition);
  return (
    <div className="p-5 border-border rounded-xl border mb-5">
      <h4 className="text-2xl font-bold">Nutrition-Focused Recipes</h4>
      <p className="text-sm text-muted-foreground">
        Find recipes that match your nutrition goals
      </p>

      {!isNutritionExist && <NutritionPlanNotFound />}
      {isNutritionExist && (
        <div className="pt-5">
          {/* {meals.map((meal, i) => (
            <div className="flex flex-col gap-5 " key={i}>
              <p className="text-lg font-bold sm:text-2xl">Recommended {meal} recipes</p>
              <RecipeSlider key={i} meal={meal as mealTypeProps} />
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default RecipesTab;