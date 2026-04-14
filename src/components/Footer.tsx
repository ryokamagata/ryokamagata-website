"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-8 border-t border-charcoal/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-xs tracking-[0.1em] text-charcoal/45 dark:text-gray-300"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {t("copyright")}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs tracking-[0.15em] uppercase text-charcoal/45 dark:text-gray-300 hover:text-gold transition-colors"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}
