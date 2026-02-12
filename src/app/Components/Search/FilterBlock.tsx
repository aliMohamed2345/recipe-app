import { FilterBlockProps } from "@/app/utils/types";
import React from "react";

const FilterBlock = ({ title, children }: FilterBlockProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold text-green">{title}</p>
      {children}
    </div>
  );
};

export default FilterBlock;
