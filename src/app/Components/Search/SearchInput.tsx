import { IoSearch } from "react-icons/io5";
import { SearchInputProps } from "@/app/utils/types";
const SearchInput = ({ value, onChange, onSearch }: SearchInputProps) => (
  <div className="flex flex-1 items-center bg-card border border-border rounded-full shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-ring transition">
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onSearch()}
      placeholder="Search recipes, ingredients..."
      className="flex-1 bg-transparent px-5 py-3 font-medium outline-none"
    />

    <button
      onClick={onSearch}
      className="h-full px-5 cursor-pointer bg-green/80 hover:bg-green text-white transition flex items-center"
    >
      <IoSearch size={20} />
    </button>
  </div>
);
export default SearchInput;
