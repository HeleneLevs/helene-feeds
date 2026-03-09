export type Recipe = {
  slug: string;
  title: string;
  description: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Snacks" | "Desserts";
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  steps: string[];
  nutrition: {
    calories: number;
    fat: number;
    protein: number;
    carbs: number;
  };
  gradient: string;
};

export const recipes: Recipe[] = [
  {
    slug: "chicken-parmigiana",
    title: "Keto Chicken Parmigiana",
    description:
      "A crispy, cheesy classic made keto-friendly with almond flour coating and sugar-free marinara. All the comfort, none of the carbs.",
    category: "Dinner",
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "4 boneless skinless chicken breasts",
      "1 cup almond flour",
      "1/2 cup grated Parmesan cheese",
      "2 large eggs, beaten",
      "1 tsp garlic powder",
      "1 tsp Italian seasoning",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
      "1 cup sugar-free marinara sauce",
      "1 1/2 cups shredded mozzarella cheese",
      "2 tbsp olive oil",
      "Fresh basil leaves for garnish",
    ],
    steps: [
      "Preheat your oven to 400°F (200°C). Line a baking sheet with parchment paper.",
      "Place each chicken breast between two sheets of plastic wrap and pound to an even 1/2-inch thickness.",
      "In a shallow dish, mix almond flour, Parmesan, garlic powder, Italian seasoning, salt, and pepper.",
      "Dip each chicken breast in beaten eggs, then press into the almond flour mixture, coating both sides evenly.",
      "Heat olive oil in a large oven-safe skillet over medium-high heat. Sear the chicken for 3 minutes per side until golden.",
      "Transfer the skillet to the oven (or move chicken to the baking sheet). Spoon marinara sauce over each breast and top with mozzarella.",
      "Bake for 15-18 minutes until the chicken reaches 165°F internally and the cheese is bubbly and golden.",
      "Let rest for 5 minutes, garnish with fresh basil, and serve.",
    ],
    nutrition: { calories: 420, fat: 24, protein: 45, carbs: 5 },
    gradient: "from-amber-400 to-orange-500",
  },
  {
    slug: "keto-bagels",
    title: "Keto Bagels",
    description:
      "Chewy, golden bagels made with the famous fathead dough. Perfect for breakfast sandwiches or topped with cream cheese.",
    category: "Breakfast",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      "2 cups shredded mozzarella cheese",
      "3 tbsp cream cheese",
      "1 1/2 cups almond flour",
      "1 tbsp baking powder",
      "2 large eggs",
      "1 tsp everything bagel seasoning",
      "Pinch of salt",
    ],
    steps: [
      "Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.",
      "Melt mozzarella and cream cheese together in a microwave-safe bowl, heating in 30-second intervals and stirring until smooth.",
      "In a separate bowl, whisk almond flour, baking powder, and salt.",
      "Add the dry ingredients and eggs to the melted cheese mixture. Mix until a uniform dough forms. It will be sticky — wet your hands to make shaping easier.",
      "Divide the dough into 6 equal pieces. Roll each into a rope and join the ends to form a bagel shape.",
      "Place on the baking sheet, brush with a little beaten egg, and sprinkle with everything bagel seasoning.",
      "Bake for 12-15 minutes until golden brown.",
      "Let cool for a few minutes before slicing. Toast for extra crunch!",
    ],
    nutrition: { calories: 280, fat: 22, protein: 16, carbs: 4 },
    gradient: "from-yellow-300 to-amber-400",
  },
  {
    slug: "lamb-gyros",
    title: "Keto Lamb Gyros",
    description:
      "Spiced lamb wrapped in a low-carb tortilla with creamy tzatziki, fresh veggies, and crumbled feta. Street food made keto.",
    category: "Lunch",
    prepTime: "25 min",
    cookTime: "20 min",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "1 lb ground lamb",
      "1 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp cinnamon",
      "1 tsp dried oregano",
      "3 cloves garlic, minced",
      "Salt and pepper to taste",
      "4 low-carb tortillas",
      "1/2 cup crumbled feta cheese",
      "1 cup shredded lettuce",
      "1/2 cup diced cucumber",
      "1/4 cup diced red onion",
      "For tzatziki: 1 cup full-fat Greek yogurt, 1/2 cucumber grated, 1 tbsp lemon juice, 1 clove garlic minced, 1 tbsp fresh dill",
    ],
    steps: [
      "Make the tzatziki: combine Greek yogurt, grated cucumber (squeeze out excess water), lemon juice, garlic, and dill. Season with salt and refrigerate.",
      "In a bowl, mix ground lamb with cumin, paprika, cinnamon, oregano, garlic, salt, and pepper.",
      "Form the seasoned lamb into a flat loaf shape on a baking sheet.",
      "Broil on high for 8-10 minutes per side until cooked through and slightly charred on the edges.",
      "Let the lamb rest for 5 minutes, then slice thinly against the grain.",
      "Warm the low-carb tortillas in a dry skillet for 30 seconds per side.",
      "Assemble: layer lettuce on each tortilla, add sliced lamb, cucumber, red onion, feta, and a generous drizzle of tzatziki.",
      "Roll up tightly and serve immediately.",
    ],
    nutrition: { calories: 480, fat: 34, protein: 32, carbs: 8 },
    gradient: "from-red-400 to-amber-500",
  },
  {
    slug: "cauliflower-mac-and-cheese",
    title: "Cauliflower Mac & Cheese",
    description:
      "Creamy, cheesy, and ultra-comforting — this cauliflower mac replaces pasta with tender cauliflower florets smothered in a rich three-cheese sauce.",
    category: "Dinner",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      "1 large head cauliflower, cut into florets",
      "2 tbsp butter",
      "2 oz cream cheese",
      "1/2 cup heavy cream",
      "1 1/2 cups shredded sharp cheddar cheese",
      "1/2 cup shredded Gruyère cheese",
      "1 tsp Dijon mustard",
      "1/2 tsp garlic powder",
      "1/4 tsp smoked paprika",
      "Salt and pepper to taste",
      "2 slices bacon, cooked and crumbled (optional)",
      "Fresh chives for garnish",
    ],
    steps: [
      "Preheat oven to 375°F (190°C). Grease a baking dish.",
      "Steam or boil cauliflower florets for 5-6 minutes until fork-tender but not mushy. Drain well and pat dry.",
      "In a saucepan over medium heat, melt butter. Add cream cheese and heavy cream, stirring until smooth.",
      "Remove from heat and stir in cheddar, Gruyère, Dijon mustard, garlic powder, and paprika. Season with salt and pepper.",
      "Place the cauliflower in the baking dish and pour the cheese sauce over, folding gently to coat.",
      "Top with a little extra cheddar and bake for 15-18 minutes until bubbly and golden on top.",
      "Garnish with crumbled bacon and chives before serving.",
    ],
    nutrition: { calories: 310, fat: 26, protein: 15, carbs: 6 },
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    slug: "avocado-chocolate-mousse",
    title: "Avocado Chocolate Mousse",
    description:
      "Silky smooth chocolate mousse made with ripe avocados. It sounds unusual but tastes absolutely decadent — and it's naturally low-carb.",
    category: "Desserts",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "2 ripe avocados",
      "1/4 cup unsweetened cocoa powder",
      "1/4 cup powdered erythritol (or monk fruit sweetener)",
      "1/4 cup unsweetened almond milk",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "Whipped cream for topping (optional)",
      "Dark chocolate shavings for garnish",
    ],
    steps: [
      "Cut avocados in half and remove the pit. Scoop the flesh into a food processor or blender.",
      "Add cocoa powder, sweetener, almond milk, vanilla extract, and salt.",
      "Blend on high for 1-2 minutes until completely smooth and creamy. Scrape down the sides as needed.",
      "Taste and adjust sweetness if desired.",
      "Divide into 4 serving cups or ramekins.",
      "Refrigerate for at least 30 minutes to firm up.",
      "Serve topped with whipped cream and dark chocolate shavings.",
    ],
    nutrition: { calories: 190, fat: 16, protein: 3, carbs: 6 },
    gradient: "from-amber-800 to-yellow-900",
  },
  {
    slug: "zucchini-fritters",
    title: "Crispy Zucchini Fritters",
    description:
      "Golden and crispy on the outside, tender on the inside. These zucchini fritters are perfect as a snack, side dish, or light lunch with a dollop of sour cream.",
    category: "Snacks",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "2 medium zucchini, grated",
      "1/2 tsp salt (for sweating)",
      "1/3 cup almond flour",
      "1/4 cup grated Parmesan cheese",
      "2 large eggs",
      "2 green onions, thinly sliced",
      "1 clove garlic, minced",
      "1/4 tsp black pepper",
      "2 tbsp olive oil or avocado oil for frying",
      "Sour cream for serving",
    ],
    steps: [
      "Grate the zucchini and toss with 1/2 tsp salt. Let sit for 10 minutes, then squeeze out as much moisture as possible using a clean kitchen towel.",
      "In a bowl, combine the squeezed zucchini, almond flour, Parmesan, eggs, green onions, garlic, and pepper. Mix well.",
      "Heat oil in a large non-stick skillet over medium-high heat.",
      "Drop heaping spoonfuls of the mixture into the skillet and flatten slightly. Cook 3-4 fritters at a time.",
      "Fry for 3 minutes per side until golden brown and crispy.",
      "Transfer to a paper towel-lined plate to drain.",
      "Serve hot with sour cream on the side.",
    ],
    nutrition: { calories: 160, fat: 12, protein: 9, carbs: 4 },
    gradient: "from-green-400 to-emerald-500",
  },
];

export const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Desserts",
] as const;
