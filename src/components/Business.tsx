"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const businessKeys = [
  "salon",
  "product",
  "realestate",
  "architecture",
  "ai",
  "advisory",
] as const;

const businessIcons: Record<string, React.ReactNode> = {
  salon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
  product: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01" />
    </svg>
  ),
  realestate: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  architecture: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
      <path d="M2 20h20M4 20V8l8-5 8 5v12M10 20v-4h4v4M8 12h.01M16 12h.01M12 8h.01" />
    </svg>
  ),
  ai: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
      <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4zM8 14h8l2 8H6l2-8z" />
    </svg>
  ),
  advisory: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
};

export default function Business() {
  const t = useTranslations("business");

  return (
    <section
      id="business"
      className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-dark-surface"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessKeys.map((key, i) => (
            <AnimateOnScroll key={key} delay={i * 100}>
              <div className="group relative p-8 border border-charcoal/5 dark:border-white/5 hover:border-gold/30 dark:hover:border-gold/30 transition-all duration-500 cursor-default h-full">
                <div className="mb-4">{businessIcons[key]}</div>

                <div className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
                  {t(`items.${key}.category`)}
                </div>

                <h3
                  className="text-xl tracking-[0.05em] text-charcoal dark:text-white mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t(`items.${key}.name`)}
                </h3>

                <p className="text-sm leading-relaxed text-charcoal/80 dark:text-gray-100">
                  {t(`items.${key}.description`)}
                </p>

                {key === "salon" && (
                  <div className="mt-5 space-y-3 border-t border-charcoal/5 dark:border-white/5 pt-4">
                    {(["0", "1", "2", "3"] as const).map((idx) => (
                      <div key={idx}>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-medium text-charcoal dark:text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
                            {t(`items.salon.brands.${idx}.name`)}
                          </span>
                          <span className="text-[10px] tracking-wider text-gold">
                            {t(`items.salon.brands.${idx}.label`)}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-charcoal/60 dark:text-gray-400 mt-0.5">
                          {t(`items.salon.brands.${idx}.description`)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
