import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Helene and the Helene Feeds brand.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 pt-20 pb-16">
        <h1 className="text-editorial text-5xl sm:text-7xl md:text-8xl font-bold text-[#1c1c1c] mb-6">
          About
        </h1>
      </section>

      <div className="border-t border-gray-200" />

      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left — avatar */}
          <div className="md:col-span-4">
            <div className="w-full aspect-square max-w-sm bg-gradient-to-br from-amber-300 to-orange-400 rounded-sm flex items-center justify-center">
              <span className="text-white text-8xl font-bold text-editorial">
                H
              </span>
            </div>
            {/* Social */}
            <div className="mt-8 space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                Find me on
              </p>
              {["Instagram", "YouTube", "TikTok"].map((platform) => (
                <span
                  key={platform}
                  className="block text-base text-[#1c1c1c] hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  {platform} &rarr;
                </span>
              ))}
            </div>
          </div>

          {/* Right — bio */}
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-editorial text-2xl sm:text-3xl font-bold text-[#1c1c1c] leading-snug mb-8">
              Hi, I&apos;m Helene. I create keto recipe videos and share them
              with the world.
            </p>

            <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
              <p>
                I started my keto journey because I wanted to eat healthier
                without giving up the foods I love. Turns out, you really can
                have your (sugar-free) cake and eat it too.
              </p>

              <p>
                What began as a personal experiment quickly became a passion for
                creating recipes that prove low-carb doesn&apos;t mean
                low-flavor. I share my creations through short-form videos on
                Instagram, YouTube, and TikTok — and this website is where
                you&apos;ll find the full written recipes with all the details.
              </p>

              <p>
                Every recipe on Helene Feeds is something I&apos;ve personally
                developed and tested. I focus on using simple, accessible
                ingredients and providing clear, step-by-step instructions so
                anyone can follow along.
              </p>
            </div>

            <div className="mt-14 border-t border-gray-200 pt-10">
              <h2 className="text-editorial text-2xl font-bold text-[#1c1c1c] mb-8">
                What you&apos;ll find here
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Full written recipes",
                    desc: "Ingredients, step-by-step instructions, and nutrition info for every dish",
                  },
                  {
                    title: "Every meal covered",
                    desc: "Breakfast, lunch, dinner, snacks, and desserts — all keto-friendly",
                  },
                  {
                    title: "Video companions",
                    desc: "Watch me make each recipe before you try it yourself",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 py-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-[#1c1c1c] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1c1c1c] py-24 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-editorial text-3xl sm:text-5xl font-bold text-white mb-8">
            Ready to cook?
          </p>
          <Link
            href="/recipes"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent hover:text-amber-400 transition-colors duration-300"
          >
            Browse all recipes
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
