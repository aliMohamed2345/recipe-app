"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full"
      >
        <div className="rounded-3xl border border-border bg-white/60 backdrop-blur-xl shadow-xl p-10 text-center">
          
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-green/10 flex items-center justify-center">
              <IoSearchOutline className="w-10 h-10 text-green" />
            </div>
          </div>

          <h1 className="sm:text-3xl text-lg font-bold mb-3">
           404: Not Found Page
          </h1>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Oops! We couldn’t find the recipe you’re looking for.  
            It might have been removed, renamed, or never existed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/search">
              <button className="px-6 py-3 rounded-xl bg-green text-white font-medium hover:opacity-90 cursror-pointer transition">
                Browse Recipes
              </button>
            </Link>

          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Tip: Try searching by ingredient or cuisine 🍝
        </p>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
