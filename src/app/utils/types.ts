export * from "./interfaces";

export type activityLevelType =
  | "sedentary"
  | "light"
  | "moderate"
  | "very"
  | "extra";

export type tabType = "calculator" | "recommendation" | "recipes";

export type mealTypeProps = "breakfast" | "lunch" | "dinner" | "snack";

export type typeCuisinesProps =
  | `African`
  | `Asian`
  | `American`
  | `British`
  | `Cajun`
  | `Caribbean`
  | `Chinese`
  | `Eastern European`
  | `European`
  | `French`
  | `German`
  | `Greek`
  | `Indian`
  | `Irish`
  | `Italian`
  | `Japanese`
  | `Jewish`
  | `Korean`
  | `Latin American`
  | `Mediterranean`
  | `Mexican`
  | `Middle Eastern`
  | `Nordic`
  | `Southern`
  | `Spanish`
  | `Thai`
  | `Vietnamese`;

export type typeIntoleranceProps =
  | `Dairy`
  | `Egg`
  | `Gluten`
  | `Grain`
  | `Peanut`
  | `Seafood`
  | `Sesame`
  | `Shellfish`
  | `Soy`
  | `Sulfite`
  | `Tree Nut`
  | `Wheat`;

export type mailTypeProps =
  | `main course`
  | `side dish`
  | `dessert`
  | `appetizer`
  | `salad`
  | `bread`
  | `breakfast`
  | `soup`
  | `beverage`
  | `sauce`
  | `marinade`
  | `fingerfood`
  | `snack`
  | `drink`;

export type dietTypeProps =
  | `Gluten Free`
  | `Ketogenic`
  | `Vegetarian`
  | `Lacto-Vegetarian`
  | `Ovo-Vegetarian`
  | `Vegan`
  | `Pescetarian`
  | `Paleo`
  | `Primal`
  | `Low FODMAP`
  | `Whole30`;

export type equipmentTypeProps =
  | `skimmer`
  | `pie form`
  | `glass baking pan`
  | `garlic press`
  | `meat grinder`
  | `tongs`
  | `bread knife`
  | `tajine pot`
  | `wire rack`
  | `mincing knife`
  | `cherry pitter`
  | `wooden skewers`
  | `kitchen scissors`
  | `blow torch`
  | `broiler pan`
  | `heart shaped silicone form`
  | `grill`
  | `immersion blender`
  | `baking sheet`
  | `oven mitt`
  | `pastry bag`
  | `palette knife`
  | `pizza cutter`
  | `bottle opener`
  | `bowl`
  | `pizza pan`
  | `candy thermometer`
  | `rolling pin`
  | `frying pan`
  | `casserole dish`
  | `plastic wrap`
  | `salad spinner`
  | `broiler`
  | `silicone muffin tray`
  | `meat tenderizer`
  | `edible cake image`
  | `measuring spoon`
  | `kitchen thermometer`
  | `sifter`
  | `muffin tray`
  | `chocolate mold`
  | `kitchen towels`
  | `potato ricer`
  | `silicone kugelhopf pan`
  | `offset spatula`
  | `cheesecloth`
  | `lemon squeezer`
  | `cake form`
  | `mini muffin tray`
  | `carving fork`
  | `egg slicer`
  | `ice cube tray`
  | `corkscrew`
  | `ice cream machine`
  | `sieve`
  | `kugelhopf pan`
  | `pastry brush`
  | `popsicle sticks`
  | `spatula`
  | `cake server`
  | `poultry shears`
  | `box grater`
  | `cupcake toppers`
  | `funnel`
  | `drinking straws`
  | `slotted spoon`
  | `ceramic pie form`
  | `pepper grinder`
  | `mortar and pestle`
  | `baster`
  | `melon baller`
  | `zester`
  | `pastry cutter`
  | `ziploc bags`
  | `aluminum foil`
  | `toothpicks`
  | `pot`
  | `baking pan`
  | `ladle`
  | `apple cutter`
  | `fillet knife`
  | `toaster`
  | `heart shaped cake form`
  | `grill pan`
  | `wooden spoon`
  | `paper towels`
  | `cookie cutter`
  | `tart form`
  | `pizza board`
  | `glass casserole dish`
  | `madeleine form`
  | `metal skewers`
  | `microplane`
  | `stand mixer`
  | `whisk`
  | `mixing bowl`
  | `deep fryer`
  | `canning jar`
  | `cheese knife`
  | `hand mixer`
  | `butter curler`
  | `food processor`
  | `wax paper`
  | `grater`
  | `gravy boat`
  | `muffin liners`
  | `butter knife`
  | `waffle iron`
  | `double boiler`
  | `can opener`
  | `mandoline`
  | `kitchen twine`
  | `juicer`
  | `wok`
  | `measuring cup`
  | `ramekin`
  | `airfryer`
  | `instant pot`
  | `spoon`
  | `dough scraper`
  | `microwave`
  | `roasting pan`
  | `pressure cooker`
  | `dehydrator`
  | `baking paper`
  | `silicone muffin liners`
  | `loaf pan`
  | `cake topper`
  | `dutch oven`
  | `baking spatula`
  | `popsicle molds`
  | `teapot`
  | `cocktail sticks`
  | `cleaver`
  | `rice cooker`
  | `bread machine`
  | `fork`
  | `ice cream scoop`
  | `slow cooker`
  | `knife`
  | `kitchen scale`
  | `griddle`
  | `frosting cake topper`
  | `cutting board`
  | `cake pop mold`
  | `oven`
  | `colander`
  | `kitchen timer`
  | `panini press`
  | `pasta machine`
  | `popcorn maker`
  | `lollipop sticks`
  | `steamer basket`
  | `chopsticks`
  | `chefs knife`
  | `blender`
  | `pizza stone`
  | `skewers`
  | `sauce pan`
  | `peeler`
  | `stove`
  | `pot holder`
  | `springform pan`
  | `apple corer`
  | `potato masher`
  | `serrated knife`;

export type sortTypeProps =
  | `meta-score`
  | `popularity`
  | `healthiness`
  | `price`
  | `time`
  | `random`
  | `max-used-ingredients`
  | `min-missing-ingredients`
  | `alcohol`
  | `caffeine`
  | `copper`
  | `energy`
  | `calories`
  | `calcium`
  | `carbohydrates`
  | `carbs`
  | `choline`
  | `cholesterol`
  | `total-fat`
  | `fluoride`
  | `trans-fat`
  | `saturated-fat`
  | `mono-unsaturated-fat`
  | `poly-unsaturated-fat`
  | `fiber`
  | `folate`
  | `folic-acid`
  | `iodine`
  | `iron`
  | `magnesium`
  | `manganese`
  | `vitamin-b3`
  | `niacin`
  | `vitamin-b5`
  | `pantothenic-acid`
  | `phosphorus`
  | `potassium`
  | `protein`
  | `vitamin-b2`
  | `riboflavin`
  | `selenium`
  | `sodium`
  | `vitamin-b1`
  | `thiamin`
  | `vitamin-a`
  | `vitamin-b6`
  | `vitamin-b12`
  | `vitamin-c`
  | `vitamin-d`
  | `vitamin-e`
  | `vitamin-k`
  | `sugar`
  | `zinc`;

export type nutrientTypeProps =
  | `Calories`
  | `Fat`
  | `Trans Fat`
  | `Saturated Fat`
  | `Mono Unsaturated Fat`
  | `Poly Unsaturated Fat`
  | `Protein`
  | `Cholesterol`
  | `Carbohydrates`
  | `Net Carbohydrates`
  | `Alcohol`
  | `Fiber`
  | `Sugar`
  | `Sodium`
  | `Caffein`
  | `Manganese`
  | `Potassium`
  | `Magnesium`
  | `Calcium`
  | `Copper`
  | `Zinc`
  | `Phosphorus`
  | `Fluoride`
  | `Choline`
  | `Iron`
  | `Vitamin A`
  | `Vitamin B1`
  | `Vitamin B2`
  | `Vitamin B3`
  | `Vitamin B5`
  | `Vitamin B6`
  | `Vitamin B12`
  | `Vitamin C`
  | `Vitamin D`
  | `Vitamin E`
  | `Vitamin K`
  | `Folate`
  | `Folic Acid`
  | `Iodine`
  | `Selenium `;

export type cuisineDataProps = { title: typeCuisinesProps; image: string };

export type FilterTypeProps =
  | "cuisine"
  | "mealType"
  | "intolerance"
  | "equipment"
  | "sortBy"
  | "diet";
