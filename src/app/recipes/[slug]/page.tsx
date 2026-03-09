import { notFound } from "next/navigation";
import Link from "next/link";
import { recipes } from "@/data/recipes";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return {};
  return {
    title: recipe.title,
    description: recipe.description,
  };
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  return (
    <div>
      {/* Full-width hero image */}
      <div
        className={`w-full h-[50vh] sm:h-[60vh] bg-gradient-to-br ${recipe.gradient} relative`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 bg-gradient-to-t from-black/60 to-transparent">
          <div className="max-w-[1400px] mx-auto">
            <span className="text-white/60 text-xs uppercase tracking-widest mb-3 block">
              {recipe.category}
            </span>
            <h1 className="text-editorial text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05]">
              {recipe.title}
            </h1>
          </div>
        </div>
        {/* Photo coming soon badge */}
        <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-white/80 text-xs">Photo coming soon</span>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 sm:px-10">
        {/* Description */}
        <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed py-12 border-b border-gray-200">
          {recipe.description}
        </p>

        {/* Quick info bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 py-8 border-b border-gray-200">
          {[
            { label: "Prep", value: recipe.prepTime },
            { label: "Cook", value: recipe.cookTime },
            { label: "Serves", value: `${recipe.servings}` },
            { label: "Level", value: recipe.difficulty },
          ].map((item) => (
            <div key={item.label} className="py-3">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                {item.label}
              </p>
              <p className="text-lg font-semibold text-[#1c1c1c]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Nutrition */}
        <div className="py-8 border-b border-gray-200">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-5">
            Nutrition per serving
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: "Calories", value: `${recipe.nutrition.calories}` },
              { label: "Fat", value: `${recipe.nutrition.fat}g` },
              { label: "Protein", value: `${recipe.nutrition.protein}g` },
              { label: "Net Carbs", value: `${recipe.nutrition.carbs}g` },
            ].map((n) => (
              <div key={n.label}>
                <p className="text-editorial text-2xl sm:text-3xl font-bold text-accent">
                  {n.value}
                </p>
                <p className="text-xs text-gray-400 mt-1">{n.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredients */}
        <div className="py-12">
          <h2 className="text-editorial text-3xl sm:text-4xl font-bold text-[#1c1c1c] mb-8">
            Ingredients
          </h2>
          <ul className="space-y-4">
            {recipe.ingredients.map((ing, i) => (
              <li
                key={i}
                className="flex items-start gap-4 group py-2 border-b border-gray-100 last:border-0"
              >
                <input
                  type="checkbox"
                  className="mt-1.5 w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent cursor-pointer"
                />
                <span className="text-lg text-gray-700 group-has-[:checked]:line-through group-has-[:checked]:text-gray-300 transition-colors duration-300">
                  {ing}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-editorial text-3xl sm:text-4xl font-bold text-[#1c1c1c] mb-10">
            Instructions
          </h2>
          <ol className="space-y-10">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-6">
                <span className="text-editorial text-4xl sm:text-5xl font-bold text-gray-200 leading-none flex-shrink-0 w-14 text-right">
                  {i + 1}
                </span>
                <p className="text-lg text-gray-700 leading-relaxed pt-2">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Video CTA */}
        <div className="py-12 border-t border-gray-200">
          <div className="bg-[#1c1c1c] rounded-sm p-10 sm:p-14 text-center">
            <p className="text-editorial text-2xl sm:text-3xl font-bold text-white mb-4">
              Want to see this made?
            </p>
            <p className="text-gray-400 mb-6">
              Watch the full video recipe on my channel.
            </p>
            <span className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-widest cursor-pointer hover:text-amber-400 transition-colors duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch video — coming soon
            </span>
          </div>
        </div>

        {/* Back */}
        <div className="py-8 border-t border-gray-200">
          <Link
            href="/recipes"
            className="text-sm uppercase tracking-widest text-gray-400 hover:text-[#1c1c1c] transition-colors duration-300"
          >
            &larr; All recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
