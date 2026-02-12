"use client";
import FilterBlock from "./FilterBlock";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiFilter } from "react-icons/bi";
import DropDownMenu from "./DropDownMenu";
import { cuisinesData, mealTypeData, typeIntolerance } from "@/app/utils/data";
import {
  FilterDataProps,
  typeCuisinesProps,
  typeIntoleranceProps,
  mailTypeProps,
} from "@/app/utils/types";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
const SearchFilter = ({ searchValue }: { searchValue: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState<FilterDataProps>({
    cuisine: undefined,
    mealType: undefined,
    intolerance: undefined,
  });

  const isEmpty = !filters.cuisine && !filters.mealType && !filters.intolerance;

  const applyFilters = () => {
    if (isEmpty) return toast.error("Please select at least one filter");

    const params = new URLSearchParams(searchParams.toString());

    if (searchValue) params.set("q", searchValue);

    if (filters.cuisine) params.set("cuisine", filters.cuisine);
    if (filters.mealType) params.set("mealType", filters.mealType);
    if (filters.intolerance) params.set("intolerance", filters.intolerance);

    router.push(`/search?${params.toString()}`);
    setOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      cuisine: undefined,
      mealType: undefined,
      intolerance: undefined,
    });
    router.push(`/search${searchValue && `?q=${searchValue}`}`);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-3 rounded-full cursor-pointer bg-secondary hover:bg-accent border border-border shadow-sm transition"
      >
        <BiFilter size={20} />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed left-1/2 top-1/2 z-50 w-[92%] max-w-[720px] -translate-x-1/2 -translate-y-1/2 bg-background border border-border rounded-2xl shadow-xl transition ${
          open
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-lg font-semibold">Filters</h2>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-secondary transition cursor-pointer"
          >
            <IoClose size={20} />
          </button>
        </div>

        <div className="p-5 grid sm:grid-cols-2 gap-5">
          <FilterBlock title="Cuisine">
            <DropDownMenu
              items={cuisinesData.map((c) => c.title)}
              value={filters.cuisine || ""}
              placeholder="Select cuisine"
              onSelect={(v) =>
                setFilters((p) => ({
                  ...p,
                  cuisine: v as typeCuisinesProps,
                }))
              }
            />
          </FilterBlock>

          <FilterBlock title="Intolerance">
            <DropDownMenu
              items={typeIntolerance}
              value={filters.intolerance || ""}
              placeholder="Select intolerance"
              onSelect={(v) =>
                setFilters((p) => ({
                  ...p,
                  intolerance: v as typeIntoleranceProps,
                }))
              }
            />
          </FilterBlock>

          <FilterBlock title="Meal Type">
            <DropDownMenu
              items={mealTypeData}
              placeholder="Select meal type"
              value={filters.mealType || ""}
              onSelect={(v) =>
                setFilters((p) => ({
                  ...p,
                  mealType: v as mailTypeProps,
                }))
              }
            />
          </FilterBlock>
        </div>

        <div className="flex justify-end gap-3 p-5 border-t border-border">
          <button
            onClick={resetFilters}
            className="px-4 py-2 cursor-pointer rounded-lg border border-border hover:bg-secondary transition"
          >
            Cancel
          </button>

          <button
            disabled={isEmpty}
            onClick={applyFilters}
            className="px-4 py-2 rounded-lg border border-border cursor-pointer bg-background hover:bg-accent disabled:opacity-40 transition"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
