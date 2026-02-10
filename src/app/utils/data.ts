import { mealTypeProps } from "./types";
import { BiSearch, BiLeaf, BiCalculator, BiBookmarkPlus } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { GiSparkles } from "react-icons/gi";
import breakfastImage from '@/../public/breakfast-food.jpg'
import quickMealsImage from '@/../public/quick-meals-food.jpg'
import healthyImage from '@/../public/healthy-food.jpg'
import dinnerImage from '@/../public/dinner-dinner.jpg'
import  cuisineItalianImage from '@/../public/cuisine-italian.jpg'
import cuisineAsianImage from '@/../public/cuisine-asian.jpg'
import cuisineMexicanImage from '@/../public/cuisine-mexican.jpg'
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
