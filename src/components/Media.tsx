"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { mediaItems, type MediaCategory } from "@/data/media";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const INITIAL_COUNT = 5;

const filters: { key: string; value: MediaCategory | "all" }[] = [
  { key: "filterAll", value: "all" },
  { key: "filterArticle", value: "web_article" },
  { key: "filterBook", value: "book" },
  { key: "filterMagazine", value: "magazine" },
  { key: "filterAward", value: "award" },
];

export default function Media() {
  const t = useTranslations("media");
  const locale = useLocale();
  const [active, setActive] = useState<MediaCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    active === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === active);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT && !showAll;

  const handleFilterChange = (value: MediaCategory | "all") => {
    setActive(value);
    setShowAll(false);
  };

  return (
    <section id="media" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => handleFilterChange(f.value)}
              className={`text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                active === f.value
                  ? "border-gold text-gold bg-gold/5"
                  : "border-charcoal/10 dark:border-white/10 text-charcoal/80 dark:text-gray-100 hover:border-gold/30 hover:text-gold"
              }`}
            >
              {t(f.key)}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-4">
          {displayed.map((item, i) => (
            <AnimateOnScroll key={item.id} delay={i * 50}>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 border border-charcoal/5 dark:border-white/5 hover:border-gold/20 dark:hover:border-gold/20 transition-all duration-300"
                >
                  <MediaContent item={item} locale={locale} />
                </a>
              ) : (
                <div className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 border border-charcoal/5 dark:border-white/5">
                  <MediaContent item={item} locale={locale} />
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-charcoal/80 dark:text-gray-100 hover:text-gold transition-colors px-6 py-3 border border-charcoal/10 dark:border-white/10 hover:border-gold/30"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {locale === "ja"
                ? "続きを読む（残り" + (filtered.length - INITIAL_COUNT) + "件）"
                : "Show more (" + (filtered.length - INITIAL_COUNT) + " more)"}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function MediaContent({
  item,
  locale,
}: {
  item: (typeof mediaItems)[0];
  locale: string;
}) {
  const categoryLabel: Record<MediaCategory, string> = {
    web_article: "Article",
    book: "Book",
    award: "Award",
    tv: "TV",
    magazine: "Magazine",
    seminar: "Seminar",
  };

  return (
    <>
      <div
        className="shrink-0 w-12 text-base text-gold"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {item.year}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] tracking-[0.2em] uppercase text-charcoal/85 dark:text-gray-100 mb-1">
          {categoryLabel[item.category]} — {item.publisher}
        </div>
        <h4 className="text-sm sm:text-base text-charcoal dark:text-gray-100 leading-relaxed group-hover:text-gold transition-colors">
          {locale === "ja" ? item.title.ja : item.title.en}
        </h4>
      </div>
      {item.url && (
        <div className="shrink-0 text-charcoal/35 dark:text-gray-100 group-hover:text-gold transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      )}
    </>
  );
}
