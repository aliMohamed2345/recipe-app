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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-items-center">
        {cuisinesData.map((cuisine, i) => (
          <Link
            href={`/discover/${cuisine.title as typeCuisinesProps}`}
            key={i}
            className="group"
          >
            <div className="overflow-hidden h-full transition-all hover:shadow-md rounded-lg border border-border bg-card text-card-foreground shadow-sm">
              <div className="relative h-40 overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={cuisine.image}
                  alt={cuisine.title}
                  className="w-full h-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center" />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground text-center group-hover:text-green transition-all">
                  {cuisine.title} recipes
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
