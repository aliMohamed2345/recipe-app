import { useState, useRef, useEffect } from "react";
import { DropDownMenuProps } from "@/app/utils/types";
import { IoIosArrowDown } from "react-icons/io";

const DropDownMenu = ({
  items,
  placeholder = "select option",
  onSelect,
  value
}: DropDownMenuProps  ) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(item: string) {
    onSelect?.(item);
    setOpen(false);
  }

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center cursor-pointer justify-between px-4 py-2 rounded-xl border border-border bg-card hover:bg-accent transition"
      >
        <span className="text-sm">{value || placeholder}</span>

        <IoIosArrowDown
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute mt-2 w-full z-20 rounded-xl border border-border bg-popover shadow-lg overflow-hidden transition-all origin-top
        ${
          open
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {items.map((item) => (
          <button
            key={item}
            onClick={() => handleSelect(item)}
            className="w-full text-left px-4 py-2 text-sm hover:bg-accent transition cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropDownMenu;
