import heroImag from "@/../public/hero-food.jpg";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[640px] flex items-end overflow-hidden">
      <Image
        loading="lazy"
        width={heroImag.width}
        height={heroImag.height}
        src={heroImag.src}
        alt="Beautifully plated dishes on a rustic table"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[scale-in_1.2s_ease-out_forwards]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative container mx-auto px-4 pb-20 md:pb-28">
        <p className="text-green font-mono text-sm tracking-widest uppercase mb-4 animate-fade-in">
          Discover · Cook · Enjoy
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-3xl leading-tight mb-6 animate-fade-in"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          Your next great meal starts&nbsp;here.
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          Thousands of recipes at your fingertips — search by ingredient,
          cuisine, or dietary need and cook with confidence.
        </p>
        <div
          className="flex flex-wrap gap-4 animate-fade-in"
          style={{ animationDelay: "0.45s", animationFillMode: "both" }}
        >
          <Link href="/search">
            <button className="bg-green cursor-pointer h-11 rounded-md px-8 text-white gap-2 text-base inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              <BiSearch className="h-5 w-5" />
              Explore Recipes
            </button>
          </Link>
          <Link href="/nutrition">
            <button className="border cursor-pointer bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 gap-2 text-base border-border inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              Nutrition Planner
              <BiChevronRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
