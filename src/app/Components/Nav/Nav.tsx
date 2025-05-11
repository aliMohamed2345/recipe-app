"use client";
import SideMenu from "./SideMenu";
import Theme from "@/app/Components/Nav/Theme";
import Link from "next/link";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Search from "./Search";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const Nav = () => {
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const path = usePathname();
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="border-b-1 border-border fixed w-full z-10 bg-secondary ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-3 ">
              <SideMenu />
              <Link
                href="/"
                className="text-xl sm:text-3xl font-bold hover:text-green transition "
              >
                CookBooker
              </Link>
            </div>
          </div>

          <div className="hidden md:block font-bold">
            <div className="flex items-center gap-5" ref={dropdownRef}>
              <div
                onClick={() => setCategoryOpen((prev) => !prev)}
                className={`hover:bg-background p-2 transition rounded-md flex items-center gap-1 cursor-pointer relative`}
              >
                Categories
                <MdOutlineKeyboardArrowUp
                  className={`${categoryOpen && `rotate-180`} transition`}
                />
                <div
                  className={`absolute flex bg-secondary flex-wrap w-[400px] gap-4 p-2 rounded-lg -bottom-[190px] -left-[20px] transition
                    ${
                      categoryOpen
                        ? "opacity-100 scale-100 visible pointer-events-auto"
                        : "opacity-0 scale-95 invisible pointer-events-none"
                    }
                  `}
                >
                  <Link
                    href={`/category/breakfast`}
                    className={`flex-1/3 transition hover:bg-background text-green p-2 font-bold rounded-lg ${
                      path.includes("breakfast") && `bg-background`
                    }`}
                  >
                    Breakfast
                    <p className="text-xs text-muted-foreground">
                      Start your day with our delicious breakfast recipes
                    </p>
                  </Link>
                  <Link
                    href={`/category/lunch`}
                    className={`flex-1/3 transition hover:bg-background text-green p-2  rounded-lg ${
                      path.includes("lunch") && `bg-background`
                    }`}
                  >
                    Lunch
                    <p className="text-xs text-muted-foreground">
                      Quick and satisfying lunch recipes
                    </p>
                  </Link>
                  <Link
                    href={`/category/dinner`}
                    className={`flex-1/3 transition hover:bg-background text-green p-2  rounded-lg ${
                      path.includes("dinner") && `bg-background`
                    }`}
                  >
                    Dinner
                    <p className="text-xs text-muted-foreground">
                      Impress your family with our dinner idea
                    </p>
                  </Link>
                  <Link
                    href={`/category/snacks`}
                    className={`flex-1/3 transition hover:bg-background text-green p-2  rounded-lg ${
                      path.includes("snacks") && `bg-background`
                    }`}
                  >
                    Snacks
                    <p className="text-xs text-muted-foreground">
                      Perfect bites for any time of day
                    </p>
                  </Link>
                </div>
              </div>
              <Link
                href={"/nutrition"}
                className={`hover:bg-background p-2 transition rounded-md  ${
                  path.includes(`nutrition`) && `text-green bg-background`
                }`}
              >
                Nutrition
              </Link>
              <Link
                href={`/recipes`}
                className={`hover:bg-background p-2 transition rounded-md  ${
                  path.includes(`recipes`) && `text-green bg-background`
                }`}
              >
                Discover
              </Link>
              <Link
                href={`/favorites`}
                className={`hover:bg-background p-2 transition rounded-md  ${
                  path.includes(`favorites`) && `text-green bg-background`
                }`}
              >
                Favorites
              </Link>
            </div>
          </div>

          <div className="gap-3 cursor-pointer flex items-center ">
            <Search />
            <Theme />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
