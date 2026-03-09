import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-editorial text-3xl font-bold text-[#1c1c1c] block mb-4">
              Helene Feeds
            </span>
            <p className="text-base text-gray-500 leading-relaxed max-w-sm">
              Keto recipes made simple. Delicious low-carb meals that
              don&apos;t compromise on flavor.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/recipes", label: "Recipes" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-[#1c1c1c] hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Follow
            </h3>
            <ul className="space-y-3">
              {["Instagram", "YouTube", "TikTok"].map((platform) => (
                <li key={platform}>
                  <span className="text-base text-[#1c1c1c] hover:text-accent transition-colors duration-300 cursor-pointer">
                    {platform}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Helene Feeds
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-gray-400 hover:text-[#1c1c1c] transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-[#1c1c1c] transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
