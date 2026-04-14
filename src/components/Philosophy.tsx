"use client";

import { useTranslations } from "next-intl";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section
      id="philosophy"
      className="relative py-32 sm:py-40 lg:py-52 overflow-hidden"
    >
      <div className="absolute inset-0 bg-charcoal dark:bg-dark-surface">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(197, 165, 90, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(197, 165, 90, 0.1) 0%, transparent 50%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <AnimateOnScroll>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] uppercase text-white/60 mb-20"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("heading")}
          </h2>
        </AnimateOnScroll>

        {/* 経営理念 */}
        <AnimateOnScroll>
          <div className="mb-20">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {t("creedLabel")}
            </div>
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed text-white/95">
              {t("creed")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* MISSION */}
        <AnimateOnScroll delay={100}>
          <div className="mb-16 sm:mb-20">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {t("missionLabel")}
            </div>
            <blockquote className="relative">
              <div className="absolute -left-4 sm:-left-6 top-0 bottom-0 w-px bg-gold/30" />
              <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white/90 pl-4 sm:pl-8">
                {t("mission")}
              </p>
            </blockquote>
          </div>
        </AnimateOnScroll>

        {/* VISION */}
        <AnimateOnScroll delay={200}>
          <div className="mb-16 sm:mb-20">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {t("visionLabel")}
            </div>
            <blockquote className="relative">
              <div className="absolute -left-4 sm:-left-6 top-0 bottom-0 w-px bg-gold/30" />
              <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white/90 pl-4 sm:pl-8">
                {t("vision")}
              </p>
            </blockquote>
          </div>
        </AnimateOnScroll>

        {/* VALUE */}
        <AnimateOnScroll delay={300}>
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {t("valueLabel")}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              {(["value1", "value2", "value3"] as const).map((key) => (
                <div key={key} className="text-lg sm:text-xl text-white/90 tracking-wide" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {t(key)}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
