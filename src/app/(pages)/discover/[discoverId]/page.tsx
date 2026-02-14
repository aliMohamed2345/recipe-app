"use client";
import { useParams } from "next/navigation";
import DiscoverIdPage from "@/app/Components/Recipe/DiscoverIdPage";
import { typeCuisinesProps } from "@/app/utils/types";
// import { cuisineDataProps } from "@/app/utils/types";
const DiscoverId = () => {
  const { discoverId } = useParams();
  const cuisineName = decodeURIComponent(discoverId as typeCuisinesProps);
  return <DiscoverIdPage cuisineType={cuisineName as typeCuisinesProps} />;
};

export default DiscoverId;
