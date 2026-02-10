import { Reveal } from "./Reveal";
import Link from "next/link";
import mealPrepImage from "@/../public/meal-prep-image.jpg";
import { BiCalculator } from "react-icons/bi";
import Image from "next/image";
const MealPrepBannerSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <Reveal>
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] flex items-center">
          <Image
            src={mealPrepImage.src}
            width={mealPrepImage.width}
            height={mealPrepImage.height}
            alt="Meal prep containers with organized portions"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="relative p-8 md:p-14 max-w-lg">
            <p className="text-green font-mono text-xs tracking-widest uppercase mb-3">
              Plan ahead
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meal prep made simple
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Use our nutrition calculator to set your macros, then find recipes
              that fit your plan. Batch cook on Sunday, eat well all week.
            </p>
            <Link href="/nutrition">
              <button className="cursor-pointer h-11 px-8 bg-green text-white gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                <BiCalculator className="h-5 w-5" />
                Open Nutrition Planner
              </button>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default MealPrepBannerSection;
