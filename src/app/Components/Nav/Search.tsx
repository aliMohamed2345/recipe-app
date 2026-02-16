"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoArrowBackSharp, IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  overlayVariants,
  panelVariants,
  listContainer,
  listItem,
} from "@/app/utils/animationVariants";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValues, setSearchValues] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedValues = JSON.parse(
      localStorage.getItem("search-values") || "[]",
    );
    setSearchValues(
      storedValues.length > 3 ? storedValues.slice(-4) : storedValues,
    );
  }, []);

  const handleSearchBtn = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<SVGElement, MouseEvent>,
  ) => {
    if (!searchValue.trim()) return e.preventDefault();

    const updatedValues =
      searchValues.length > 3
        ? [...searchValues, searchValue].slice(-4)
        : [...searchValues, searchValue];

    setSearchValues(updatedValues);
    localStorage.setItem("search-values", JSON.stringify(updatedValues));

    const query = searchValue;
    setSearchValue("");
    setOpenSearch(false);
    router.push(`/search?q=${query}`);
  };

  const handleRemoveSearchValue = (value: string) => {
    const storedValues: string[] = JSON.parse(
      localStorage.getItem("search-values") || "[]",
    );
    const newValues = storedValues.filter((v) => v !== value);
    localStorage.setItem("search-values", JSON.stringify(newValues));
    setSearchValues(newValues);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpenSearch(true)}
        className="p-1 cursor-pointer rounded-full bg-secondary hover:bg-background text-foreground transition"
      >
        <IoMdSearch size={22} />
      </motion.button>

      <AnimatePresence>
        {openSearch && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-2xl mx-auto px-2 pt-3 sm:px-4 sm:pt-6"
            >
              <div className="flex items-center gap-1 sm:gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpenSearch(false)}
                  className="p-2 rounded-full cursor-pointer bg-secondary hover:bg-accent text-foreground transition"
                >
                  <IoArrowBackSharp size={20} />
                </motion.button>

                <div className="flex items-center gap-2 flex-1 bg-card border border-border rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-ring transition">
                  <IoMdSearch className="opacity-60" size={20} />

                  <input
                    autoFocus
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearchBtn(e)}
                    placeholder="Search recipes, ingredients..."
                    className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />

                  {searchValue && (
                    <IoClose
                      size={18}
                      className="cursor-pointer transition-all hover:scale-[1.01] opacity-60 hover:opacity-100"
                      onClick={() => setSearchValue("")}
                    />
                  )}
                </div>
              </div>

              <div className="h-px bg-border my-6" />

              {searchValues.length > 0 && (
                <motion.div
                  variants={listContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  <p className="text-sm text-muted-foreground">
                    Recent searches
                  </p>

                  {searchValues
                    .slice(-4)
                    .reverse()
                    .map((value, i) => (
                      <motion.div key={value + i} variants={listItem}>
                        <Link
                          onClick={() => setOpenSearch(false)}
                          href={`/search?q=${value}`}
                          className="flex items-center justify-between p-3 rounded-xl bg-secondary hover:scale-[1.01] text-secondary-foreground transition"
                        >
                          <span className="flex items-center gap-3">
                            <FaClockRotateLeft className="opacity-60" />
                            {value}
                          </span>

                          <IoClose
                            size={25}
                            onClick={(e) => {
                              e.preventDefault();
                              handleRemoveSearchValue(value);
                            }}
                            className="p-1 rounded-full hover:bg-background  transition"
                          />
                        </Link>
                      </motion.div>
                    ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Search;
