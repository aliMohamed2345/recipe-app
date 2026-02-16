"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchInput from "@/app/Components/Search/SearchInput";
import SearchFilter from "@/app/Components/Search/SearchFilter";
import FilterChip from "@/app/Components/Search/FilterChip";
import toast from "react-hot-toast";
import {
  dietTypeProps,
  equipmentTypeProps,
  ExtendedRecipeProps,
  FilterTypeProps,
  mailTypeProps,
  searchRecipesResponseProps,
  sortTypeProps,
  typeCuisinesProps,
  typeIntoleranceProps,
} from "@/app/utils/types";
import { useFetch } from "@/app/hooks/useFetch";
import { apiEndpoints } from "@/app/utils/axios";
import InfiniteScroll from "@/app/Components/Recipe/InfiniteScroll";
import RecipeCard from "@/app/Components/Recipe/RecipeCard";
import RecipeGridLoadingSkeleton from "@/app/Components/Recipe/RecipeGridLoadingSkeleton";
import { useDebounce } from "@/app/hooks/useDebounce";
import NotFoundRecipes from "@/app/Components/Recipe/NotFoundRecipes";

const PAGE_SIZE = 15;

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "";
  const cuisine = searchParams.get("cuisine");
  const mealType = searchParams.get("mealType");
  const intolerance = searchParams.get("intolerance");
  const sortBy = searchParams.get("sortBy");
  const equipment = searchParams.get("equipment");
  const diet = searchParams.get("diet");

  const [searchValue, setSearchValue] = useState(query);
  const [recipes, setRecipes] = useState<ExtendedRecipeProps[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const debouncedValue = useDebounce(searchValue, 1000);

  const url = useMemo(
    () =>
      apiEndpoints.searchRecipes({
        diet: (diet as dietTypeProps) ?? "",
        equipment: (equipment as equipmentTypeProps) ?? "",
        cuisine: (cuisine as typeCuisinesProps) ?? "",
        type: (mealType as mailTypeProps) ?? "",
        intolerances: (intolerance as typeIntoleranceProps) ?? "",
        sort: (sortBy as sortTypeProps) ?? "",
        number: PAGE_SIZE,
        offset,
        query: debouncedValue ?? "",
        addRecipeInformation: true,
      }),
    [
      diet,
      equipment,
      cuisine,
      mealType,
      intolerance,
      sortBy,
      offset,
      debouncedValue,
    ],
  );

  const { data, loading, error } = useFetch<searchRecipesResponseProps>({
    url,
  });
  console.log(data);

  useEffect(() => {
    if (!data) return;

    setRecipes((prev) =>
      offset === 0 ? data.results : [...prev, ...data.results],
    );

    if (data.results.length < PAGE_SIZE) setHasMore(false);
  }, [data, offset]);

  useEffect(() => {
    setRecipes([]);
    setOffset(0);
    setHasMore(true);
  }, [debouncedValue, cuisine, mealType, intolerance, sortBy, equipment, diet]);

  useEffect(() => {
    if (error) toast.error(`Something went wrong: ${error}`);
  }, [error]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setOffset((prev) => prev + PAGE_SIZE);
    }
  }, [loading, hasMore]);

  const pushWithParams = (params: URLSearchParams) => {
    router.push(`/search?${params.toString()}`);
  };

  const handleSearch = () => {
    if (!searchValue.trim()) {
      toast.error("Please enter your search term");
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set("q", searchValue);
    pushWithParams(params);
  };

  const handleDeleteFilter = (filter: FilterTypeProps) => {
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

        {debouncedValue && (
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            Search results for
            <span className="text-green ml-2">
              &quot;{debouncedValue}&quot;
            </span>
          </h1>
        )}

        {(cuisine ||
          mealType ||
          intolerance ||
          diet ||
          equipment ||
          sortBy) && (
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

              {sortBy && (
                <FilterChip
                  label={sortBy}
                  onRemove={() => handleDeleteFilter("sortBy")}
                />
              )}

              {equipment && (
                <FilterChip
                  label={equipment}
                  onRemove={() => handleDeleteFilter("equipment")}
                />
              )}

              {diet && (
                <FilterChip
                  label={diet}
                  onRemove={() => handleDeleteFilter("diet")}
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

      {offset === 0 && loading && <RecipeGridLoadingSkeleton />}

      {recipes.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-5 justify-items-center">
            {recipes.map((recipe,i) => (
              <RecipeCard key={i} recipeData={recipe} />
            ))}
          </div>

          <InfiniteScroll
            onLoadMore={loadMore}
            hasMore={hasMore}
            loading={loading}
          />
        </>
      )}

      {loading && offset > 0 && (
        <div className="py-6 text-center text-muted-foreground text-sm">
          Loading more recipes...
        </div>
      )}
      {!loading && recipes.length === 0 && (
        <NotFoundRecipes
          searchTerm={searchValue}
          onClearFilters={handleClearFilters}
        />
      )}
    </>
  );
};

export default SearchPage;
