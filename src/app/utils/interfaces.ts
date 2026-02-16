import { AxiosRequestConfig } from "axios";
import { ReactNode } from "react";
import {
  activityLevelType,
  cuisineDataProps,
  dietTypeProps,
  equipmentTypeProps,
  mailTypeProps,
  nutrientTypeProps,
  sortTypeProps,
  typeCuisinesProps,
  typeIntoleranceProps,
} from "./types";
export interface DropDownMenuProps {
  items: string[];
  placeholder: string;
  onSelect?: (value: string) => void;
  value?: string;
}

export interface FilterDataProps {
  cuisine?: typeCuisinesProps;
  mealType?: mailTypeProps;
  intolerance?: typeIntoleranceProps;
  diet?: dietTypeProps;
  equipment?: equipmentTypeProps;
  sortBy?: sortTypeProps;
}

export interface FilterBlockProps {
  title: string;
  children: ReactNode;
}

export interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

export interface SearchInputProps {
  value: string;
  onChange: (v: string) => void;
  onSearch: () => void;
}
export interface nutritionTypes {
  minCarbs?: number;
  maxCarbs?: number;
  minProtein?: number;
  maxProtein?: number;
  minCalories?: number;
  maxCalories?: number;
  minFat?: number;
  maxFat?: number;
  minAlcohol?: number;
  maxAlcohol?: number;
  minCaffeine?: number;
  maxCaffeine?: number;
  minCopper?: number;
  maxCopper?: number;
  minCalcium?: number;
  maxCalcium?: number;
  minCholine?: number;
  maxCholine?: number;
  minCholesterol?: number;
  maxCholesterol?: number;
  minFluoride?: number;
  maxFluoride?: number;
  minSaturatedFat?: number;
  maxSaturatedFat?: number;
  minVitaminA?: number;
  maxVitaminA?: number;
  minVitaminC?: number;
  maxVitaminC?: number;
  minVitaminD?: number;
  maxVitaminD?: number;
  minVitaminE?: number;
  maxVitaminE?: number;
  minVitaminK?: number;
  maxVitaminK?: number;
  minVitaminB1?: number;
  maxVitaminB1?: number;
  minVitaminB2?: number;
  maxVitaminB2?: number;
  minVitaminB5?: number;
  maxVitaminB5?: number;
  minVitaminB3?: number;
  maxVitaminB3?: number;
  minVitaminB6?: number;
  maxVitaminB6?: number;
  minVitaminB12?: number;
  maxVitaminB12?: number;
  minFiber?: number;
  maxFiber?: number;
  minFolate?: number;
  maxFolate?: number;
  minFolicAcid?: number;
  maxFolicAcid?: number;
  minIodine?: number;
  maxIodine?: number;
  minIron?: number;
  maxIron?: number;
  minMagnesium?: number;
  maxMagnesium?: number;
  minManganese?: number;
  maxManganese?: number;
  minPhosphorus?: number;
  maxPhosphorus?: number;
  minPotassium?: number;
  maxPotassium?: number;
  minSelenium?: number;
  maxSelenium?: number;
  minSodium?: number;
  maxSodium?: number;
  minSugar?: number;
  maxSugar?: number;
  minZinc?: number;
  maxZinc?: number;
}

export interface complexSearchProps extends nutritionTypes {
  query?: string;
  cuisine?: typeCuisinesProps;
  excludeCuisine?: cuisineDataProps | string;
  diet?: dietTypeProps;
  intolerances?: typeIntoleranceProps;
  equipment?: equipmentTypeProps;
  includeIngredients?: string;
  excludeIngredients?: string;
  type?: mailTypeProps;
  instructionsRequired?: boolean;
  fillIngredients?: boolean;
  addRecipeInformation?: boolean;
  addRecipeInstructions?: boolean;
  addRecipeNutrition?: boolean;
  author?: boolean;
  tags?: string;
  recipeBoxId?: number;
  titleMatch?: string;
  maxReadyTime?: number;
  minServings?: number;
  maxServings?: number;
  ignorePantry?: boolean;
  sort?: sortTypeProps;
  sortDirection?: `asc` | `desc`;
  offset?: number;
  number?: number;
}

export interface searchRecipesByIngredientsProps {
  ingredients: string;
  number?: number;
  ranking: number;
  ignorePantry?: boolean;
}
export interface getRecipeInformationProps {
  includeNutrition?: boolean;
  addWinePairing?: boolean;
  addTasteData?: boolean;
}

export interface getRandomRecipesProps {
  includeNutrition?: boolean;
  number?: number;
}

export interface IngredientSearchProps {
  query: string;
  addChildren?: boolean;
  minProteinPercent?: number;
  maxProteinPercent?: number;
  minFatPercent?: number;
  maxFatPercent?: number;
  minCarbsPercent?: number;
  maxCarbsPercent?: number;
  metaInformation?: boolean;
  intolerances?: typeIntoleranceProps;
  sort?: sortTypeProps;
  sortDirection?: `asc` | `desc`;
  language?: `en` | `de`;
  offset?: number;
  number?: number;
}

export interface getIngredientsInformationProps {
  amount: number;
  unit: string | `grams`;
  locale: `en_US` | `en_GB`;
}
export interface computeIngredientAmountProps {
  nutrient: nutrientTypeProps;
  target: number;
  unit: string;
}

export interface convertAmountProps {
  ingredientName: string;
  sourceAmount: number;
  sourceUnit: string;
  targetUnit: string;
}

export interface InfiniteScrollProps {
  onLoadMore: () => void;
  hasMore: boolean;
  loading: boolean;
  rootMargin?: string;
}
export interface searchRecipesResponseProps {
  offset: number;
  totalResults: number;
  results: ExtendedRecipeProps[];
}
export interface ExtendedRecipeProps extends recipeProps {
  cheap?: boolean;
  glutenFree?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
  veryHealthy?: boolean;
  healthScore?: number;
  cuisines?: string[];
  dishTypes?: string[];
  pricePerServing?: number;
  isFavorite?: boolean;
}

export interface RecipeInformationResponseProps {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;

  weightWatcherSmartPoints: number;
  gaps: string;

  preparationMinutes: number | null;
  cookingMinutes: number | null;
  readyInMinutes: number;

  healthScore: number;
  pricePerServing: number;

  aggregateLikes: number;
  spoonacularScore: number;

  id: number;
  title: string;
  image: string;
  imageType: string;

  servings: number;

  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;

  license?: string | null;
  creditsText?: string;

  summary: string;
  instructions?: string | null;

  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];

  nutrition?: NutritionProps;

  extendedIngredients: ExtendedIngredientProps[];

  analyzedInstructions: AnalyzedInstructionProps[];

  language: string;
}

export interface NutritionProps {
  nutrients: NutrientProps[];
  properties: NutritionPropertyProps[];
  flavonoids: FlavonoidProps[];
  ingredients: NutritionIngredientProps[];
  caloricBreakdown?: CaloricBreakdownProps;
  weightPerServing?: WeightPerServingProps;
}

export interface NutrientProps {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds?: number;
}

export interface NutritionPropertyProps {
  name: string;
  amount: number;
  unit: string;
}

export interface FlavonoidProps {
  name: string;
  amount: number;
  unit: string;
}

export interface NutritionIngredientProps {
  id: number;
  name: string;
  amount: number;
  unit: string;
  nutrients: NutrientProps[];
}

export interface CaloricBreakdownProps {
  percentProtein: number;
  percentFat: number;
  percentCarbs: number;
}

export interface WeightPerServingProps {
  amount: number;
  unit: string;
}

export interface ExtendedIngredientProps {
  id: number;
  aisle: string;
  image: string;
  consistency: string;

  name: string;
  nameClean?: string;
  original: string;
  originalName: string;

  amount: number;
  unit: string;

  meta: string[];

  measures: {
    us: MeasureProps;
    metric: MeasureProps;
  };
}

export interface MeasureProps {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface AnalyzedInstructionProps {
  name: string;
  steps: InstructionStepProps[];
}

export interface InstructionStepProps {
  number: number;
  step: string;
  ingredients: StepIngredientProps[];
  equipment: StepEquipmentProps[];
  length?: {
    number: number;
    unit: string;
  };
}

export interface StepIngredientProps {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface StepEquipmentProps {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}
export interface recipeProps {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  nutrition: {
    nutrients: {
      name: string;
      amount: number;
      unit: string;
    }[];
  };
}

export interface recipeType {
  results: recipeProps[];
}

export interface MacrosState {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  activityLevel: activityLevelType;
}

export interface nutritionProps {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}
export interface UseFetchProps {
  url: string | null;
  options?: AxiosRequestConfig;
  dependencies?: unknown[];
}

export interface MacroSliderProps {
  label: string;
  unit: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
  step: number;
  totalCalories: number;
}

export interface NotFoundRecipesProps {
  searchTerm?: string;
  onClearFilters?: () => void;
}