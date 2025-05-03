"use client";
import { useParams } from "next/navigation";
const SearchId = () => {
  const searchValue = useParams();
  console.log(searchValue);
  return <div>searchId</div>;
};

export default SearchId;
