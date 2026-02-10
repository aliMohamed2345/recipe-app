import { recipeProps } from "@/app/utils/types";
import Link from "next/link";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
// const RecipeCard = ({ recipeData }: { recipeData: recipeProps }) => {
const RecipeCard = () => {
   const recipeDummyData: recipeProps = {
  id: 101,
  title: "Grilled Chicken with Vegetables",
  image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  servings: 2,
  readyInMinutes: 35,
  nutrition: {
    nutrients: [
      {
        name: "Calories",
        amount: 420,
        unit: "kcal",
      },
    ],
  },
};
  return (
    <Link
      href={`/recipes/${recipeDummyData.id}`}
      key={recipeDummyData.id}
      className="group block w-[300px] rounded-xl border-2 border-border h-[280px] transition-all overflow-hidden"
    >
      <div className="relative w-full h-[180px]">
        <Image
          loading="lazy"
          src={recipeDummyData.image}
          alt={recipeDummyData.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-sm text-center font-semibold text-foreground line-clamp-2">
          {recipeDummyData.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground font-medium">
          <div className="flex items-center gap-1">
            <FaClock className="text-green" />
            <span>{recipeDummyData.readyInMinutes} min</span>
          </div>
          <div className="flex items-center gap-1">
            <FaFire className="text-destructive" />
            <span>
              {Math.round(recipeDummyData.nutrition.nutrients[0].amount)}{" "}
              {recipeDummyData.nutrition.nutrients[0].unit}
            </span>
          </div>
        </div>

        {/* <div className="flex gap-2 flex-wrap mt-2">
          {recipeData.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-2 py-0.5 rounded-full text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </Link>
  );
};

export default RecipeCard;
