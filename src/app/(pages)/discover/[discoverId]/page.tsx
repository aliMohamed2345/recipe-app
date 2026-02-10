"use client";
import { useParams } from "next/navigation";
import DiscoverIdPage from "@/app/Components/Recipe/DiscoverIdPage";
import { typeCuisinesProps } from "@/app/utils/types";
// import { cuisineDataProps } from "@/app/utils/types";
const DiscoverId = () => {
  const {discoverId} = useParams() as {discoverId:typeCuisinesProps}
  console.log(discoverId);
  return <DiscoverIdPage cuisineType={discoverId} />;
};

export default DiscoverId;
