import { MdNoFood } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCurrentTab } from "@/app/redux/Slices/nutritionTabSlice";
import { meals } from "@/app/data";
import RecipeSlider from "../Recipe/RecipeSlider";
import { mealTypeProps } from "@/app/utils/types";
export const mealType: Record<mealTypeProps, string> = {
  breakfast: "breakfast",
  lunch: "main course",
  dinner: "main course",
  snack: "snack",
};
const RecipesTab = () => {
  const dispatch = useDispatch();
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

      {!isNutritionExist && (
        <div className="text-center p-5  flex flex-col gap-5">
          <MdNoFood size={160} className="m-auto text-destructive" />
          <h4 className="text-3xl font-bold">No recipes found</h4>
          <p className="text-md font-bold text-muted-foreground">
            add your{" "}
            <button
              className="text-destructive cursor-pointer"
              onClick={() => dispatch(setCurrentTab("calculator"))}
            >
              recipe plan
            </button>{" "}
            first
          </p>
        </div>
      )}
      {isNutritionExist && (
        <div className="">
          {meals.map((meal, i) => (
            <div className="flex flex-col gap-5" key={i}>
              <p className="text-lg font-bold">{meal} recipes</p>
              <RecipeSlider key={i} meal={meal as mealTypeProps} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesTab;
