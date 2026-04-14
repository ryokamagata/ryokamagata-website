"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const MOBILE_INITIAL = 2;

const videos = [
  { title: "【店舗まるごとリース】AI TOKYOが選んだ理由", source: "BG PARTNERS", embedId: "MpiHdNdy9RI" },
  { title: "【急成長サロンの裏側】代表は旅人？AI TOKYO代表と新代表が登場！", source: "美容業界チャンネル", embedId: "X3vgQMBfOyE" },
  { title: "GAME CHANGE vol 1 — AI TOKYO 鎌形諒氏", source: "ミツイ東京支社公式", embedId: "0Vyiwzt6S2I" },
  { title: "KAMI CHARISMA FILE70 / AI TOKYO 鎌形 諒", source: "KAMISMA", embedId: "Ph4yuqr3YVo" },
  { title: "【20代経営者】AITOKYO鎌形諒の挑戦が凄すぎる", source: "美容業界チャンネル", embedId: "6Bul0feENpg" },
  { title: "3年で6店舗！年商4億円を叶えるAI TOKYOの組織づくり", source: "soeasy buddy for beauty", embedId: "njHdoY0HzGs" },
];

export default function Video() {
  const t = useTranslations("video");
  const locale = useLocale();
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading>{t("heading")}</SectionHeading>
        <p className="mt-4 text-sm text-charcoal/85 dark:text-gray-100 tracking-wide"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {t("description")}
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <AnimateOnScroll
              key={i}
              delay={i * 80}
              className={!showAll && i >= MOBILE_INITIAL ? "hidden sm:block" : ""}
            >
              <div className="group">
                <div className="aspect-video bg-charcoal/5 dark:bg-white/5 border border-charcoal/5 dark:border-white/5 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <div className="text-[10px] tracking-[0.15em] uppercase text-gold/60 dark:text-gold/90 mb-1"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {video.source}
                  </div>
                  <h4 className="text-sm text-charcoal/80 dark:text-gray-100 leading-relaxed">
                    {video.title}
                  </h4>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-charcoal/80 dark:text-gray-100 hover:text-gold transition-colors px-6 py-3 border border-charcoal/10 dark:border-white/10 hover:border-gold/30"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {locale === "ja" ? `続きを見る（残り${videos.length - MOBILE_INITIAL}件）` : `Show more (${videos.length - MOBILE_INITIAL} more)`}
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
