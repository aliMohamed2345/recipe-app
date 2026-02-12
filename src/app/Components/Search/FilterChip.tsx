import { IoClose } from "react-icons/io5";
import { FilterChipProps } from "@/app/utils/types";
const FilterChip = ({ label, onRemove }: FilterChipProps) => {
  return (
    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green text-white text-sm shadow-sm">
      {label}
      <IoClose
        size={16}
        onClick={onRemove}
        className="cursor-pointer rounded-full p-0.5 hover:bg-white/20 transition"
      />
    </span>
  );
};

export default FilterChip;
