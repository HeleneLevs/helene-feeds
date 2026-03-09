"use client";

import { useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import { recipes, categories } from "@/data/recipes";

export default function RecipesPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? recipes
      : recipes.filter((r) => r.category === active);

  return (
    <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16">
      {/* Big heading */}
      <div className="mb-16">
        <h1 className="text-editorial text-5xl sm:text-7xl md:text-8xl font-bold text-[#1c1c1c] mb-4">
          Recipes
        </h1>
        <p className="text-lg text-gray-400">
          {recipes.length} keto recipes and counting
        </p>
      </div>

      {/* Category filter — clean pill style */}
      <div className="flex flex-wrap gap-3 mb-14 border-b border-gray-200 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
              active === cat
                ? "bg-[#1c1c1c] text-white"
                : "bg-transparent text-gray-400 hover:text-[#1c1c1c] border border-gray-200 hover:border-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipe grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-editorial text-2xl text-gray-300">
            No recipes here yet.
          </p>
          <p className="text-sm text-gray-400 mt-2">Check back soon!</p>
        </div>
      )}
    </div>
  );
}
