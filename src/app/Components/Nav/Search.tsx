"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [searchValues, setSearchValues] = useState<string[]>([]);
  const router = useRouter();
  useEffect(() => {
    // Load stored search values from localStorage
    const storedValues = JSON.parse(
      localStorage.getItem("search-values") || "[]"
    );
    setSearchValues(
      storedValues.length > 3 ? storedValues.slice(-4) : storedValues
    );
  }, []);

  const handleSearchBtn = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    if (searchValue.trim()) {
      // Update search values and store in localStorage
      const updatedValues =
        searchValues.length > 3
          ? [...searchValues, searchValue].slice(-4)
          : [...searchValues, searchValue];
      setSearchValues(updatedValues);
      localStorage.setItem("search-values", JSON.stringify(updatedValues)); // Update localStorage
      setSearchValue("");

      router.push(`/search/${searchValue}`);
    } else {
      e.preventDefault();
    }
  };
  const handleRemoveSearchValue = (value: string) => {
    const storedValues: string[] = JSON.parse(
      localStorage.getItem("search-values") || "[]"
    );
    const newSearchValue = storedValues.filter((val: string) => val !== value);
    localStorage.setItem("search-values", JSON.stringify(newSearchValue));
    setSearchValues(newSearchValue);
  };

  return (
    <>
      <IoMdSearch
        size={30}
        className={`block rounded-full p-1 transition-all lg-hidden hover:bg-accent text-text_color opacity-90 hover:opacity-100`}
        onClick={() => setOpenSearch(true)}
      />

      {openSearch && (
        <div className={` bg-secondary w-full h-screen inset-0 absolute`}>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => setOpenSearch(false)}
              aria-label="Close menu"
              className={`hover:bg-slate-200 hover:opacity-100 rounded-full transition-all p-1 dark:text-gray-00 dark:hover:bg-gray-500 dark:text-gray-300 ml-2`}
            >
              <IoArrowBackSharp size={25} />
            </button>
            <input
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && handleSearchBtn(e)}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              type="text"
              placeholder="search..."
              className="outline-none w-full bg-transparent dark:text-gray-300 rounded-md p-2 placeholder:text-xl"
            />
          </div>
          <div className="h-px w-full bg-gray-400 relative my-4"></div>
          <div className="mx-3">
            {searchValues
              .slice(-4)
              .reverse()
              .map((value, i) => (
                <Link
                  key={i}
                  href={{
                    pathname: `/search/${value}`,
                    query: { q: value },
                  }}
                  className="p-3 rounded-md transition-all text-text_color"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex content-start gap-2  items-center">
                      <FaClockRotateLeft /> {value}
                    </span>
                    <IoClose
                      onClick={() => handleRemoveSearchValue(value)}
                      className=" text-text_color hover:bg-secondary transition-all rounded-full"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
