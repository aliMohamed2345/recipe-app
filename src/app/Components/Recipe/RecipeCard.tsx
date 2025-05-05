import { recipeProps } from "@/app/page";
import Image from "next/image";
import { TbClockHour4 } from "react-icons/tb";
import { FaFireAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Link from "next/link";
import { calculateTime } from "@/app/utils/calculateTime";
const RecipeCard = ({ recipeData }: { recipeData: recipeProps }) => {
  return (
    <Link
      href={`/recipes/${recipeData.id}`}
      className="w[350px] w-fit block rounded-md bg-secondary p-2 text-secondary-foreground group  hover:shadow-green hover:shadow-md hover:-translate-y-1 transition"
    >
      <Image
        src={recipeData.image}
        className="overflow-hidden rounded-md w-full "
        alt={recipeData.id.toString()}
        width={300}
        height={100}
      />
      <p className="text-center text-md font-bold group-hover:text-green transition py-2">
        {recipeData.title}
      </p>
      <div className="flex items-center justify-between pt-2">
        <span className="flex gap-1 items-center bg-green rounded-lg p-1 font-bold">
          <TbClockHour4 />
          {calculateTime(recipeData.readyInMinutes)}
        </span>
        <span className="flex gap-1 items-center bg-green rounded-lg p-1 font-bold">
          <FaFireAlt />
          {recipeData.nutrition.nutrients[0].amount}{" "}
          {recipeData.nutrition.nutrients[0].unit}
        </span>
        <span className="flex gap-1 items-center bg-green rounded-lg p-1 font-bold">
          <IoPerson />
          {recipeData.servings} serving
        </span>
      </div>
    </Link>
  );
};

export default RecipeCard;
