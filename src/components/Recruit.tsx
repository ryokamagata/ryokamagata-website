"use client";

import { useTranslations } from "next-intl";
import AnimateOnScroll from "./AnimateOnScroll";

const igIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
  </svg>
);

const arrowIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const mailIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13 2 4" />
  </svg>
);

export default function Recruit() {
  const t = useTranslations("recruit");

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] uppercase text-charcoal dark:text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("heading")}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-charcoal/80 dark:text-gray-100 leading-relaxed">
              {t("title")}
            </p>
            <p className="mt-3 text-sm text-charcoal/80 dark:text-gray-100 leading-relaxed">
              {t("description")}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* AITOKYO MEN */}
          <AnimateOnScroll delay={100}>
            <div className="p-6 border border-charcoal/5 dark:border-white/5 h-full flex flex-col">
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                AITOKYO MEN
              </div>
              <p className="text-xs text-charcoal/80 dark:text-gray-100 mb-4">メンズ美容師・アシスタント・レセプション</p>
              <div className="mt-auto flex flex-col gap-2">
                <a
                  href="https://aitokyo-pb.jp/recruit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold text-white text-[11px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors"
                >
                  採用情報 {arrowIcon}
                </a>
                <a
                  href="https://www.instagram.com/aitokyo_men_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-charcoal/10 dark:border-white/10 text-charcoal/85 dark:text-gray-100 text-[11px] tracking-[0.1em] uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  @aitokyo_men_official {igIcon}
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* AITOKYO HAIR */}
          <AnimateOnScroll delay={200}>
            <div className="p-6 border border-charcoal/5 dark:border-white/5 h-full flex flex-col">
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                AITOKYO HAIR
              </div>
              <p className="text-xs text-charcoal/80 dark:text-gray-100 mb-4">レディース美容師・アシスタント・レセプション</p>
              <div className="mt-auto flex flex-col gap-2">
                <a
                  href="https://aitokyo-pb.jp/recruit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold text-white text-[11px] tracking-[0.1em] uppercase hover:bg-gold-light transition-colors"
                >
                  採用情報 {arrowIcon}
                </a>
                <a
                  href="https://www.instagram.com/aitokyo_hair_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-charcoal/10 dark:border-white/10 text-charcoal/85 dark:text-gray-100 text-[11px] tracking-[0.1em] uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  @aitokyo_hair_official {igIcon}
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Group Companies */}
          <AnimateOnScroll delay={300}>
            <div className="p-6 border border-charcoal/5 dark:border-white/5 h-full flex flex-col">
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                P.B Group Holdings
              </div>
              <p className="text-xs text-charcoal/80 dark:text-gray-100 mb-4">建築現場監督・不動産営業・バックオフィス・総務・マーケター・エンジニア</p>
              <div className="mt-auto">
                <a
                  href="mailto:aitokyo.official@gmail.com?subject=採用に関するお問い合わせ"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-charcoal dark:bg-white text-white dark:text-charcoal text-[11px] tracking-[0.1em] uppercase hover:bg-charcoal-light dark:hover:bg-gray-200 transition-colors"
                >
                  お問い合わせ {mailIcon}
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
