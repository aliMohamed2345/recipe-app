import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import { LuBookmarkPlus } from "react-icons/lu";
const NotFoundFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto p-8 border border-border rounded-2xl shadow-md bg-card text-card-foreground absolute inset-1/2  -translate-1/2 h-fit">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-green/30 text-green text-5xl">
        <LuBookmarkPlus />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center">
        No Favorites Yet
      </h2>

      <p className="text-center text-muted-foreground text-base sm:text-lg">
        Save your favorite recipes to access them easily later.
      </p>

      <Link
        href="/discover"
        className="flex items-center justify-center gap-2 bg-green hover:bg-green/90 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-lg"
      >
        Discover <BiPlus className="text-lg" />
      </Link>
    </div>
  );
};

export default NotFoundFavorites;
