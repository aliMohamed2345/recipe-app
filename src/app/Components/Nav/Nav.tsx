// import SideMenu from "@/app/Components/Nav/SideMenu";
// import SearchArea from "@/app/Components/Nav/SearchArea";
import Theme from "@/app/Components/Nav/Theme";
import Link from "next/link";
import Search from "./Search";
const Nav = () => {
  return (
    <header className="border-b-1 border-border bg-background  fixed w-full z-10 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-background">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-3 ">
              {/* <SideMenu /> */}
              <Link
                href="/"
                className="text-3xl font-bold hover:text-text_green  transition "
              >
                CookBooker
              </Link>
            </div>
          </div>

          <div className="hidden md:block font-bold">
            <ul className="flex items-center gap-5">
              <li className="hover:bg-accent p-2 border-md ">Categories</li>
              <li className="hover:bg-accent p-2 border-md ">Nutrition</li>
              <li className="hover:bg-accent p-2 border-md ">Discover</li>
              <li className="hover:bg-accent p-2 border-md ">Favorites</li>
            </ul>
          </div>

          <div className="gap-3 cursor-pointer flex items-center ">
            <Theme />
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
