import { cuisinesData } from "@/app/utils/data";
import { typeCuisinesProps } from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="container mx-auto px-2">
      <h1 className="font-bold text-lg sm:text-3xl text-center sm:text-left pt-20 pb-5 ">
        Discover Recipe category
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-4">
        {cuisinesData.map((cuisine, i) => (
          <Link
            href={`/discover/${cuisine.title as typeCuisinesProps}`}
            key={i}
            className="group w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                <Image
                  src={cuisine.image}
                  alt={cuisine.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center" />
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold text-center px-3">
                  {cuisine.title} Recipes
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
