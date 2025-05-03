"use client";
import { useState } from "react";
import { PiListBold } from "react-icons/pi";
import { IoArrowBackSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="p-1 rounded-full cursor-pointer transition-all ease-in-out hover:bg-accent font-bold opacity-80 hover:opacity-100 text-foreground sm:hidden"
      >
        <PiListBold size={25} />
      </button>

      <div
        className={`h-full fixed ${
          isOpen ? `left-0` : `left-[-500px]`
        } min-w-[250px] lg:min-w-[300px] z-10 top-0 transition-all bg-background flex-col shadow-lg  flex justify-start gap-10 px-2`}
      >
        <div className="flex content-start gap-3 items-center my-5 ml-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="hover:bg-accent hover:text-accent-foreground cursor-pointer hover:opacity-100 rounded-full transition-all p-1 text-foreground"
          >
            <IoArrowBackSharp size={25} />
          </button>

          <div className="text-center">
            <Link
              href="/"
              className="text-2xl font-bold hover:text-green transition "
            >
              CookBooker
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-foreground font-bold">categories</p>
          <span className="h-0.5 w-full bg-border" />

          <div className="flex gap-2 flex-col items-center mt-5 text-lg font-bold">
            <Link
              className={`p-2 hover:bg-accent hover:text-green transition w-full text-center rounded-md text-foreground ${
                pathname.includes(`breakfast`) && `bg-accent text-green`
              }`}
              href={`/category/breakfast`}
            >
              Breakfast
            </Link>
            <Link
              className={`p-2 hover:bg-accent hover:text-green transition w-full text-center rounded-md text-foreground ${
                pathname.includes(`lunch`) && `bg-accent text-green`
              }`}
              href={`/category/lunch`}
            >
              Lunch
            </Link>
            <Link
              className={`p-2 hover:bg-accent hover:text-green transition w-full text-center rounded-md text-foreground ${
                pathname.includes(`dinner`) && `bg-accent text-green`
              }`}
              href={`/category/dinner`}
            >
              Dinner
            </Link>
            <Link
              className={`p-2 hover:bg-accent hover:text-green transition w-full text-center rounded-md text-foreground ${
                pathname.includes(`snacks`) && `bg-accent text-green`
              }`}
              href={`/category/snacks`}
            >
              Snacks
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-foreground font-bold">Explore</p>
          <span className="h-0.5 w-full bg-border" />

          <div className="flex gap-2 flex-col items-center mt-5 text-lg font-bold">
            <Link
              className={`p-2 hover:bg-accent hover:text-green transition w-full text-center rounded-md text-foreground ${
                pathname.includes(`recipes`) && `bg-accent text-green`
              }`}
              href={`/recipes`}
            >
              Discover
            </Link>
            <Link
              className={`p-2 hover:bg-accent hover:text-green transition w-full text-center rounded-md text-foreground ${
                pathname.includes(`nutrition`) && `bg-accent text-green`
              }`}
              href={`/nutrition`}
            >
              Nutrition
            </Link>
            <Link
              className={`p-2 hover:bg-accent hover:text-green transition w-full text-center rounded-md text-foreground ${
                pathname.includes(`favorites`) && `bg-accent text-green`
              }`}
              href={`/favorites`}
            >
              Favorites
            </Link>
          </div>
        </div>
      </div>
      {
        // Overlay for the side menu
        isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 z-5"
          ></div>
        )
      }
    </>
  );
};

export default SideMenu;
