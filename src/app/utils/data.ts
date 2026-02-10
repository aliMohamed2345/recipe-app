import { cuisineDataProps, mealTypeProps } from "./types";
import { BiSearch, BiLeaf, BiCalculator, BiBookmarkPlus } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { GiSparkles } from "react-icons/gi";
import breakfastImage from "@/../public/breakfast-food.jpg";
import quickMealsImage from "@/../public/quick-meals-food.jpg";
import healthyImage from "@/../public/healthy-food.jpg";
import dinnerImage from "@/../public/dinner-dinner.jpg";
import cuisineItalianImage from "@/../public/cuisine-italian.jpg";
import cuisineAsianImage from "@/../public/cuisine-asian.jpg";
import cuisineMexicanImage from "@/../public/cuisine-mexican.jpg";
export const meals = ["breakfast", "lunch", "dinner", "snack"];
export const mealType: Record<mealTypeProps, string> = {
  breakfast: "breakfast",
  lunch: "main course",
  dinner: "main course",
  snack: "snack",
};

export const categories = [
  {
    title: "Breakfast",
    description: "Start your morning right with energizing recipes.",
    image: breakfastImage,
    link: "/category/breakfast",
    accent: "from-yellow-600/80 to-yellow-900/90",
  },
  {
    title: "Quick Meals",
    description: "Delicious dishes ready in 30 minutes or less.",
    image: quickMealsImage,
    link: "/search?type=quick",
    accent: "from-orange-600/80 to-orange-900/90",
  },
  {
    title: "Healthy",
    description: "Nutritious bowls, salads, and balanced plates.",
    image: healthyImage,
    link: "/search?diet=healthy",
    accent: "from-emerald-600/80 to-emerald-900/90",
  },
  {
    title: "Dinner",
    description: "Impressive mains for every night of the week.",
    image: dinnerImage,
    link: "/category/dinner",
    accent: "from-violet-600/80 to-violet-900/90",
  },
];

export const cuisines = [
  {
    title: "Italian",
    image: cuisineItalianImage,
    link: "/search?cuisine=italian",
  },
  { title: "Asian", image: cuisineAsianImage, link: "/search?cuisine=asian" },
  {
    title: "Mexican",
    image: cuisineMexicanImage,
    link: "/search?cuisine=mexican",
  },
];

export const features = [
  {
    icon: BiSearch,
    title: "Smart Search",
    description:
      "Filter by ingredients, diet, intolerances, and cuisine to find exactly what you need.",
    link: "/search",
  },
  {
    icon: BsClock,
    title: "Meal Types",
    description:
      "Browse curated collections for breakfast, lunch, dinner, and snacks.",
    link: "/categories",
  },
  {
    icon: BiLeaf,
    title: "Dietary Filters",
    description: "Vegan, gluten-free, keto — we've got every diet covered.",
    link: "/search",
  },
  {
    icon: BiCalculator,
    title: "Nutrition Planner",
    description:
      "Calculate your macros and plan meals around your fitness goals.",
    link: "/nutrition",
  },
  {
    icon: BiBookmarkPlus,
    title: "Favorites",
    description: "Save the recipes you love and build your personal cookbook.",
    link: "/favorites",
  },
  {
    icon: GiSparkles,
    title: "Featured Picks",
    description:
      "Handpicked trending recipes updated regularly by our editors.",
    link: "/featured",
  },
];

export const stats = [
  { value: "5,000+", label: "Recipes" },
  { value: "120+", label: "Cuisines" },
  { value: "30+", label: "Diet Filters" },
  { value: "100%", label: "Free to Use" },
];

export const howItWorks = [
  {
    step: "1",
    title: "Search",
    desc: "Type an ingredient, cuisine, or diet — our smart search does the rest.",
  },
  {
    step: "2",
    title: "Cook",
    desc: "Follow step-by-step instructions with nutritional info at a glance.",
  },
  {
    step: "3",
    title: "Save",
    desc: "Bookmark your favorites and build a personal recipe collection.",
  },
];

export const cuisinesData: cuisineDataProps[] = [
  {
    title: "African",
    image: "https://images.unsplash.com/photo-1604908176997-4318f20b3c1b",
  },
  {
    title: "Asian",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    title: "American",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    title: "British",
    image: "https://images.unsplash.com/photo-1604908177522-0403f1c6fba9",
  },
  {
    title: "Cajun",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    title: "Caribbean",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
  },
  {
    title: "Chinese",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d",
  },
  {
    title: "Eastern European",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  },
  {
    title: "European",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    title: "French",
    image: "https://images.unsplash.com/photo-1543352634-8730b1b9c1b4",
  },
  {
    title: "German",
    image: "https://images.unsplash.com/photo-1604909053196-8c0c9d9b0d58",
  },
  {
    title: "Greek",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
  },
  {
    title: "Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
  },
  {
    title: "Irish",
    image: "https://images.unsplash.com/photo-1604908177447-1d5c6b9b0b7b",
  },
  {
    title: "Italian",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
  },
  {
    title: "Japanese",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  {
    title: "Jewish",
    image: "https://images.unsplash.com/photo-1604908177265-bb4c4b965221",
  },
  {
    title: "Korean",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
  },
  {
    title: "Latin American",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
  },
  {
    title: "Mediterranean",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    title: "Mexican",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
  },
  {
    title: "Middle Eastern",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea",
  },
  {
    title: "Nordic",
    image: "https://images.unsplash.com/photo-1604908177302-7b2f9b391d4b",
  },
  {
    title: "Southern",
    image: "https://images.unsplash.com/photo-1625944525903-c4628d43cbd5",
  },
  {
    title: "Spanish",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710",
  },
  {
    title: "Thai",
    image: "https://images.unsplash.com/photo-1559847844-d721426d6edc",
  },
  {
    title: "Vietnamese",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
  },
];
