"use client";

import { useTranslations, useLocale } from "next-intl";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const newsData = {
  ja: [
    { date: "2026.02", text: "ブランドシェア2号店オープン" },
    { date: "2025.10", text: "ams by AITOKYO オープン（アイラッシュ＆アイブロウ新業態）" },
    { date: "2025.06", text: "aisalon事業始動 — AI × サロンDXの新規事業を発表" },
    { date: "2025.04", text: "株式会社unique 参画、建築事業をグループに追加" },
    { date: "2025.01", text: "P.Bグループホールディングス体制を確立" },
  ],
  en: [
    { date: "2026.02", text: "Opened Brand Share location #2" },
    { date: "2025.10", text: "Opened ams by AITOKYO (eyelash & eyebrow — new format)" },
    { date: "2025.06", text: "Launched aisalon — AI × Salon DX venture" },
    { date: "2025.04", text: "Acquired unique Inc., adding architecture to the group" },
    { date: "2025.01", text: "Established P.B Group Holdings structure" },
  ],
};

export default function News() {
  const locale = useLocale();
  const items = locale === "ja" ? newsData.ja : newsData.en;

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading>News</SectionHeading>

        <div className="mt-12">
          {items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="flex items-baseline gap-6 py-5 border-b border-charcoal/5 dark:border-white/5">
                <time
                  className="shrink-0 text-[12px] sm:text-[13px] text-gold/60 dark:text-gold/90 tracking-wider w-[70px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.date}
                </time>
                <p className="text-sm sm:text-[15px] text-charcoal/80 dark:text-gray-100 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
