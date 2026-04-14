"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRef, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const TIMELINE_INITIAL = 8;

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for browsers without IntersectionObserver (some in-app browsers)
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setStarted(true), 0);
      return () => window.clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <span ref={ref} className={`stat-number ${started ? "is-counting" : ""}`}>
      <span>{count}</span>
      {suffix && <span className="text-[0.4em] ml-1 font-normal">{suffix}</span>}
    </span>
  );
}

type TimelineItem = { year: string; text: string };

export default function About() {
  const t = useTranslations("about");
  const tl = useTranslations("timeline");
  const locale = useLocale();
  const [showAllTimeline, setShowAllTimeline] = useState(false);

  const stats = [
    { value: 11, suffix: "", label: t("stats.stores") },
    { value: 6, suffix: "", label: t("stats.companies") },
    { value: 5, suffix: "", label: t("stats.domains") },
    { value: 100, suffix: locale === "ja" ? "億" : "億", label: t("stats.goal") },
  ];

  const rawItems = tl.raw("items") as TimelineItem[];
  const allItems: TimelineItem[] = Array.isArray(rawItems) ? [...rawItems].reverse() : [];
  const timelineItems = showAllTimeline ? allItems : allItems.slice(0, TIMELINE_INITIAL);
  const hasMore = allItems.length > TIMELINE_INITIAL && !showAllTimeline;

  // Pre-compute which items should display their year (avoids mid-render mutation)
  const showYearFlags: boolean[] = [];
  {
    let prevYear = "";
    for (const item of timelineItems) {
      showYearFlags.push(item.year !== prevYear);
      prevYear = item.year;
    }
  }

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading>{t("heading")}</SectionHeading>

        <AnimateOnScroll delay={200}>
          <p className="mt-10 max-w-3xl text-base sm:text-lg leading-[1.9] sm:leading-[2] text-charcoal/85 dark:text-gray-100">
            {t("intro")}
          </p>
        </AnimateOnScroll>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <div className="relative text-center py-10 px-4">
                {i > 0 && (
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-charcoal/8 dark:bg-white/8 hidden lg:block" />
                )}
                <div
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none"
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700 }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-4 text-[10px] tracking-[0.2em] uppercase text-charcoal/80 dark:text-gray-100"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {stat.label}
                </div>
                <div className="mt-4 w-6 h-px bg-gold/30 mx-auto" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Timeline - newest first */}
        <div className="mt-28">
          <AnimateOnScroll>
            <h3
              className="text-2xl sm:text-3xl tracking-[0.15em] uppercase text-charcoal dark:text-white mb-14"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {tl("heading")}
            </h3>
          </AnimateOnScroll>

          <div className="relative">
            <div className="absolute left-[68px] sm:left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-charcoal/10 to-charcoal/5 dark:from-gold/40 dark:via-white/10 dark:to-white/5" />

            <div className="space-y-5">
              {timelineItems.map((item: TimelineItem, i: number) => {
                const showYear = showYearFlags[i];

                return (
                  <AnimateOnScroll key={`tl-${i}`} delay={i * 40}>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div
                        className="w-[68px] sm:w-[88px] shrink-0 text-right text-[12px] sm:text-[13px] text-gold/70 tracking-wide pt-0.5"
                        style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }}
                      >
                        {showYear && item.year}
                      </div>
                      <div className="relative flex-1">
                        <div className="absolute -left-[10px] sm:-left-[14px] top-[7px] w-[7px] h-[7px] rounded-full border border-gold/50 bg-off-white dark:bg-dark-bg" />
                        <p className="text-[13px] sm:text-[15px] text-charcoal/85 dark:text-gray-100 leading-relaxed pl-1">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllTimeline(true)}
                className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-charcoal/80 dark:text-gray-100 hover:text-gold transition-colors px-6 py-3 border border-charcoal/10 dark:border-white/10 hover:border-gold/30"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {locale === "ja"
                  ? "過去も見る（残り" + (allItems.length - TIMELINE_INITIAL) + "件）"
                  : "View earlier (" + (allItems.length - TIMELINE_INITIAL) + " more)"}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
