"use client";
import { useParams } from "next/navigation";
import React from "react";
const Category = () => {
  const searchValue = useParams();
  console.log(searchValue);
  return <div>Category</div>;
};

export default Category;
