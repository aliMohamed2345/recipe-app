import Link from "next/link";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { MdOutlineRestaurant } from "react-icons/md";
import { ExtendedRecipeProps } from "@/app/utils/types";

const RecipeCard = ({ recipeData }: { recipeData: ExtendedRecipeProps }) => {
  return (
    <Link
      href={`/recipes/${recipeData?.id}`}
      className="group block w-[320px] rounded-2xl border border-border bg-background hover:shadow-lg transition-all overflow-hidden"
    >
      <div className="relative w-full h-[190px]">
        <Image
          src={
            recipeData?.image.includes("https")
              ? recipeData?.image
              : `https://spoonacular.com/recipeImages/${recipeData.image}`
          }
          alt={recipeData?.title}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
          {recipeData?.glutenFree && (
            <span className="bg-green text-white text-[10px] px-2 py-0.5 rounded-full">
              Gluten Free
            </span>
          )}
          {recipeData?.vegan && (
            <span className="bg-destructive text-white text-[10px] px-2 py-0.5 rounded-full">
              Vegan
            </span>
          )}
          {recipeData?.cheap && (
            <span className="bg-destructive text-white text-[10px] px-2 py-0.5 rounded-full">
              Budget
            </span>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 text-center group-hover:text-green transition-all">
          {recipeData?.title}
        </h3>

        <div className="flex justify-between text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-1">
            <FaClock className="text-green" />
            {recipeData?.readyInMinutes} min
          </div>

          {recipeData?.healthScore && (
            <div className="flex items-center gap-1">
              <GiHealthNormal className="text-green" />
              {recipeData?.healthScore}
            </div>
          )}
        </div>

        {recipeData?.dishTypes && recipeData?.dishTypes?.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center">
            {recipeData?.dishTypes.slice(0, 2).map((d) => (
              <span
                key={d}
                className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px]"
              >
                <MdOutlineRestaurant className="inline mr-1" />
                {d}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecipeCard;
