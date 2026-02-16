"use client";

import { FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import { NotFoundRecipesProps } from "@/app/utils/interfaces";

const NotFoundRecipes = ({
  searchTerm,
  onClearFilters,
}: NotFoundRecipesProps) => {
  return (
    <div className="w-full h-screen flex items-center justify-center py-16 px-4 ">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full text-center space-y-5 border-2 border-border shadow-muted p-3 rounded-lg"
      >
        <div className="mx-auto w-20 h-20 rounded-2xl bg-green/30 flex items-center justify-center">
          <FaUtensils className="text-green text-3xl" />
        </div>

        <h2 className="text-2xl font-bold text-foreground">No Recipes Found</h2>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {searchTerm
            ? `We couldn't find any recipes for "${searchTerm}". Try another search or remove some filters.`
            : "We couldn't find any recipes matching your filters. Try adjusting them."}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          {onClearFilters && (
            <button
              onClick={onClearFilters}
              className="px-5 py-2 rounded-xl bg-green/80 border border-border hover:bg-green cursor-pointer hover:text-white transition text-sm font-bold"
            >
              Clear Filters
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundRecipes;
