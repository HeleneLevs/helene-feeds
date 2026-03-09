import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 sm:px-10 py-16">
      <h1 className="text-editorial text-4xl sm:text-5xl font-bold text-[#1c1c1c] mb-10">
        Terms of Service
      </h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          Welcome to Helene Feeds. By accessing and using this website, you
          agree to the following terms.
        </p>
        <h2 className="text-xl font-bold text-[#1c1c1c] mt-8">Use of Content</h2>
        <p>
          All recipes, images, videos, and written content on this site are the
          property of Helene Feeds. You may use the recipes for personal,
          non-commercial purposes. Reproducing, distributing, or republishing
          content without written permission is not permitted.
        </p>
        <h2 className="text-xl font-bold text-[#1c1c1c] mt-8">Third-Party Services</h2>
        <p>
          This site may integrate with third-party services such as TikTok,
          YouTube, and Instagram for content sharing. Your use of those services
          is subject to their respective terms.
        </p>
        <h2 className="text-xl font-bold text-[#1c1c1c] mt-8">Disclaimer</h2>
        <p>
          Recipes and nutritional information are provided for general
          informational purposes only. We make no guarantees regarding accuracy
          of nutritional data. Consult a healthcare professional for dietary
          advice.
        </p>
        <h2 className="text-xl font-bold text-[#1c1c1c] mt-8">Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the site
          constitutes acceptance of any changes.
        </p>
        <p className="text-sm text-gray-400 mt-10">Last updated: March 2026</p>
      </div>
    </div>
  );
}
