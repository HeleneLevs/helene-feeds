import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 sm:px-10 py-16">
      <h1 className="text-editorial text-4xl sm:text-5xl font-bold text-[#1c1c1c] mb-10">
        Privacy Policy
      </h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          Helene Feeds respects your privacy. This policy explains how we handle
          information when you visit our website or use our services.
        </p>
        <h2 className="text-xl font-bold text-[#1c1c1c] mt-8">Information We Collect</h2>
        <p>
          We do not collect personal information unless you voluntarily provide
          it. If you connect a social media account (such as TikTok, YouTube, or
          Instagram) through our content management tools, we access only the
          permissions you explicitly grant for the purpose of publishing content
          on your behalf.
        </p>
        <h2 className="text-xl font-bold text-[#1c1c1c] mt-8">Cookies</h2>
        <p>
          This site may use essential cookies for basic functionality. We do not
          use tracking cookies or third-party advertising cookies.
        </p>
        <h2 className="text-xl font-bold text-[#1c1c1c] mt-8">Third-Party Services</h2>
        <p>
          When you authenticate with third-party platforms, your data is handled
          according to their privacy policies. We do not sell, share, or
          distribute your personal data to third parties.
        </p>
        <h2 className="text-xl font-bold text-[#1c1c1c] mt-8">Data Retention</h2>
        <p>
          Any authentication tokens stored are used solely for the purpose of
          content publishing and can be revoked at any time by disconnecting your
          account.
        </p>
        <h2 className="text-xl font-bold text-[#1c1c1c] mt-8">Contact</h2>
        <p>
          If you have questions about this privacy policy, please reach out
          through our social media channels.
        </p>
        <p className="text-sm text-gray-400 mt-10">Last updated: March 2026</p>
      </div>
    </div>
  );
}
