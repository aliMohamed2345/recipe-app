import { useDispatch } from "react-redux";
import { MdNoFood } from "react-icons/md";
import { setCurrentTab } from "@/app/redux/Slices/nutritionTabSlice";
const NutritionPlanNotFound = ({}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md w-full rounded-2xl bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-destructive/10">
          <MdNoFood size={48} className="text-destructive" />
        </div>

        <h4 className="mb-2 text-2xl font-semibold tracking-tight">
          No recipes yet
        </h4>

        <p className="mb-6 text-sm text-muted-foreground">
          Looks a little empty here. Start by adding your first recipe plan and
          we’ll take care of the rest.
        </p>

        <button
          onClick={() => dispatch(setCurrentTab("calculator"))}
          className="inline-flex items-center justify-center rounded-lg bg-destructive px-5 py-2.5 text-sm font-medium text-white transition hover:bg-destructive/90 focus:outline-none focus:ring-2 focus:ring-destructive/40 cursor-pointer"
        >
          Create recipe plan
        </button>
      </div>
    </div>
  );
};

export default NutritionPlanNotFound;
