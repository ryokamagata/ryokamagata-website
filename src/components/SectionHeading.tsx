"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimateOnScroll>
      <h2
        className={`font-heading-en text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] uppercase text-charcoal dark:text-white ${className}`}
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {children}
      </h2>
    </AnimateOnScroll>
  );
}
