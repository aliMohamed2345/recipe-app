"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchInput from "@/app/Components/Search/SearchInput";
import SearchFilter from "@/app/Components/Search/SearchFilter";
import FilterChip from "@/app/Components/Search/FilterChip";
import toast from "react-hot-toast";
import RecipeCard from "@/app/Components/Recipe/RecipeCard";
const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "";
  const cuisine = searchParams.get("cuisine");
  const mealType = searchParams.get("mealType");
  const intolerance = searchParams.get("intolerance");

  const [searchValue, setSearchValue] = useState(query);

  const pushWithParams = (params: URLSearchParams) => {
    router.push(`/search?${params.toString()}`);
  };

  const handleSearch = () => {
    if (!searchValue.trim())
      return toast.error("Please enter a your search term");

    const params = new URLSearchParams(searchParams.toString());
    params.set("q", searchValue);

    pushWithParams(params);
  };

  const handleDeleteFilter = (
    filter: "cuisine" | "mealType" | "intolerance",
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(filter);
    pushWithParams(params);
  };

  const handleClearFilters = () => {
    const params = new URLSearchParams();
    if (searchValue) params.set("q", searchValue);
    pushWithParams(params);
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-20 max-w-4xl space-y-6">
        <div className="flex gap-3">
          <SearchInput
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
          />

          <SearchFilter searchValue={searchValue} />
        </div>
        {searchValue && (
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            Search results for
            <span className="text-green ml-2">&quot;{query}&quot;</span>
          </h1>
        )}

        {(cuisine || mealType || intolerance) && (
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-medium">Active Filters:</p>

            <div className="flex flex-wrap gap-2">
              {cuisine && (
                <FilterChip
                  label={cuisine}
                  onRemove={() => handleDeleteFilter("cuisine")}
                />
              )}

              {mealType && (
                <FilterChip
                  label={mealType}
                  onRemove={() => handleDeleteFilter("mealType")}
                />
              )}

              {intolerance && (
                <FilterChip
                  label={intolerance}
                  onRemove={() => handleDeleteFilter("intolerance")}
                />
              )}

              <button
                onClick={handleClearFilters}
                className="px-3 py-1.5 rounded-lg border border-border text-sm hover:bg-secondary transition cursor-pointer"
              >
                Clear All
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center pt-5 max-w-6xl mx-auto">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </>
  );
};

export default SearchPage;
