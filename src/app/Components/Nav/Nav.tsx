"use client";
// import SearchArea from "@/app/Components/Nav/SearchArea";
import SideMenu from "./SideMenu";
import Theme from "@/app/Components/Nav/Theme";
import Link from "next/link";
import Search from "./Search";
import { usePathname } from "next/navigation";
const Nav = () => {
  const path = usePathname();
  return (
    <header className="border-b-1 border-border fixed w-full z-10 ">
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
            <div className="flex items-center gap-5">
              <Link
                href={"/category"}
                className={`hover:bg-accent p-2 transition rounded-md ${
                  path.includes(`category`) && `text-green`
                } `}
              >
                Categories
              </Link>
              <Link
                href={"/nutrition"}
                className={`hover:bg-accent p-2 transition rounded-md ${
                  path.includes(`nutrition`) && `text-green`
                }`}
              >
                Nutrition
              </Link>
              <Link
                href={`/recipes`}
                className={`hover:bg-accent p-2 transition rounded-md ${
                  path.includes(`recipes`) && `text-green`
                }`}
              >
                Discover
              </Link>
              <Link
                href={`/favorites`}
                className={`hover:bg-accent p-2 transition rounded-md ${
                  path.includes(`favorites`) && `text-green`
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
