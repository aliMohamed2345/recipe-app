import { Reveal } from "./Reveal";
import { FaUtensils } from "react-icons/fa6";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
const FinalCTASection = () => {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <Reveal>
        <FaUtensils className="h-10 w-10 text-orange-DEFAULT mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-xl mx-auto leading-tight">
          Ready to find your next favorite recipe?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Search thousands of recipes, save your favorites, and plan meals
          around your nutritional goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/search">
            <button className="h-11 px-8 text-white gap-2inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              <BiSearch className="h-5 w-5" />
              Start Searching
            </button>
          </Link>
          <Link href="/favorites">
            <button className="h-11 px-8 gap-2inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              My Favorites
              <BiChevronRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default FinalCTASection;
