import { SetStateAction, Dispatch } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { LuChefHat } from "react-icons/lu";
const RecipeTabsId = ({
  currentTab,
  setCurrentTab,
}: {
  currentTab: "ingredients" | "instructions";
  setCurrentTab: Dispatch<SetStateAction<"ingredients" | "instructions">>;
}) => (
  <div className="flex justify-center">
    <div className="flex bg-muted p-2 rounded-2xl gap-2">
      <button
        onClick={() => setCurrentTab("ingredients")}
        className={`sm:px-4 sm:py-2 px-2 py-1 rounded-xl flex gap-2 items-center cursor-pointer ${
          currentTab === "ingredients" ? "bg-background shadow" : ""
        }`}
      >
        <CiForkAndKnife /> Ingredients
      </button>

      <button
        onClick={() => setCurrentTab("instructions")}
        className={`sm:px-4 sm:py-2 px-2 py-1 rounded-xl flex gap-2 items-center cursor-pointer ${
          currentTab === "instructions" ? "bg-background shadow" : ""
        }`}
      >
        <LuChefHat /> Instructions
      </button>
    </div>
  </div>
);

export default RecipeTabsId;
