import Link from "next/link";
import { Recipe } from "@/data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.slug}`} className="group block">
      <div className="overflow-hidden">
        {/* Bold placeholder image */}
        <div
          className={`aspect-[4/5] bg-gradient-to-br ${recipe.gradient} relative overflow-hidden rounded-sm`}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
            <span className="text-white/70 text-xs uppercase tracking-widest">
              {recipe.category}
            </span>
          </div>
          {/* Scale on hover */}
          <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>

        <div className="pt-5 pb-2">
          <h3 className="text-editorial text-xl sm:text-2xl font-bold text-[#1c1c1c] group-hover:text-accent transition-colors duration-300 mb-2">
            {recipe.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-3">
            {recipe.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-400 uppercase tracking-wide">
            <span>{recipe.prepTime}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>{recipe.difficulty}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>{recipe.nutrition.carbs}g carbs</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
