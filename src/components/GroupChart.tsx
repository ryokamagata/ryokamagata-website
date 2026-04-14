"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

export default function GroupChart() {
  const t = useTranslations("group");
  const rawCompanies = t.raw("companies") as { name: string; role: string }[];
  const companies = Array.isArray(rawCompanies) ? rawCompanies : [];

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="mt-16">
          {/* Holdings - top */}
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <div className="inline-block px-8 py-5 border-2 border-gold/40 bg-gold/5 dark:bg-gold/10">
                <div className="text-lg sm:text-xl tracking-[0.1em] text-charcoal dark:text-white"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t("holdings")}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-gold mt-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Founder & CEO — 鎌形 諒
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Connecting line */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-10 bg-gold/30" />
          </div>

          {/* Companies grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {companies.map((company: { name: string; role: string }, i: number) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="relative p-4 sm:p-5 border border-charcoal/8 dark:border-white/8 text-center hover:border-gold/30 transition-all duration-300">
                  <div className="text-sm sm:text-base tracking-[0.05em] text-charcoal dark:text-white mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {company.name}
                  </div>
                  <div className="text-[10px] tracking-[0.1em] uppercase text-charcoal/85 dark:text-gray-100"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {company.role}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
