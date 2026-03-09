import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

export default function Home() {
  const featured = recipes.slice(0, 3);
  const latest = recipes.slice(3, 6);

  return (
    <div>
      {/* Hero — big editorial statement */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 pt-20 pb-24">
        <h1 className="text-editorial text-5xl sm:text-7xl md:text-[8vw] lg:text-[7vw] font-bold text-[#1c1c1c] max-w-5xl leading-[1.05]">
          Keto recipes
          <br />
          made{" "}
          <span className="text-accent italic">simple.</span>
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-10 gap-6">
          <p className="text-lg sm:text-xl text-gray-500 max-w-lg leading-relaxed">
            Delicious low-carb meals that don&apos;t compromise on flavor.
            Simple ingredients, clear instructions, incredible results.
          </p>
          <Link
            href="/recipes"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#1c1c1c] hover:text-accent transition-colors duration-300 group flex-shrink-0"
          >
            Browse all recipes
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Featured — full-width bold grid */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-editorial text-3xl sm:text-5xl font-bold text-[#1c1c1c]">
            Featured
          </h2>
          <span className="text-xs uppercase tracking-widest text-gray-400">
            {recipes.length} recipes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Big statement section */}
      <section className="bg-[#1c1c1c] text-white py-24 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-editorial text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] max-w-4xl">
            Eating keto doesn&apos;t mean eating boring.
            <span className="text-accent"> Every recipe is tested, </span>
            photographed, and shared with love.
          </p>
        </div>
      </section>

      {/* More recipes */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-editorial text-3xl sm:text-5xl font-bold text-[#1c1c1c]">
            More to try
          </h2>
          <Link
            href="/recipes"
            className="text-sm uppercase tracking-widest text-gray-400 hover:text-[#1c1c1c] transition-colors duration-300"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latest.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-gray-200 py-24 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center gap-12">
          {/* Avatar placeholder */}
          <div className="w-40 h-40 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-5xl font-bold text-editorial">
              H
            </span>
          </div>
          <div>
            <h2 className="text-editorial text-3xl sm:text-4xl font-bold text-[#1c1c1c] mb-4">
              Hi, I&apos;m Helene
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-6">
              I create keto recipe videos and share them across Instagram,
              YouTube, and TikTok. This is where you&apos;ll find the full
              written recipes.
            </p>
            <Link
              href="/about"
              className="text-sm uppercase tracking-widest text-[#1c1c1c] hover:text-accent transition-colors duration-300"
            >
              More about me &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
