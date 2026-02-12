import {
  cuisineDataProps,
  mailTypeProps,
  mealTypeProps,
  typeIntoleranceProps,
} from "./types";
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
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Asian",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "American",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "British",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Cajun",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Caribbean",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Chinese",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Eastern European",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "European",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "French",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "German",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Greek",
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Indian",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Irish",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Italian",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Japanese",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Jewish",
    image:
      "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Korean",
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Latin American",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Mediterranean",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Mexican",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Middle Eastern",
    image:
      "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Nordic",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Southern",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Spanish",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Thai",
    image:
      "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Vietnamese",
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1000&q=80&auto=format&fit=crop",
  },
];

export const mealTypeData: mailTypeProps[] = [
  `main course`,
  `side dish`,
  `dessert`,
  `appetizer`,
  `salad`,
  `bread`,
  `breakfast`,
  `soup`,
  `beverage`,
  `sauce`,
  `marinade`,
  `fingerfood`,
  `snack`,
  `drink`,
];

export const typeIntolerance: typeIntoleranceProps[] = [
  `Dairy`,
  `Egg`,
  `Gluten`,
  `Grain`,
  `Peanut`,
  `Seafood`,
  `Sesame`,
  `Shellfish`,
  `Soy`,
  `Sulfite`,
  `Tree Nut`,
  `Wheat`,
];

export const filterDataInitialState = {
  cuisine: undefined,
  mealType: undefined,
  intolerance: undefined,
};
