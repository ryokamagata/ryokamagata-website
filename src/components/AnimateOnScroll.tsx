"use client";

import { useRef, useEffect, useState } from "react";

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Absolute safety net: show content within 2s no matter what.
    // This runs before/parallel to the IntersectionObserver logic.
    const safetyTimer = window.setTimeout(() => {
      setVisible(true);
    }, 2000);

    // Fallback for browsers without IntersectionObserver (old in-app browsers)
    if (typeof IntersectionObserver === "undefined") {
      window.setTimeout(() => setVisible(true), Math.max(delay, 0));
      return () => {
        window.clearTimeout(safetyTimer);
      };
    }

    let observer: IntersectionObserver | null = null;
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => setVisible(true), delay);
            observer?.unobserve(el);
          }
        },
        { threshold: 0, rootMargin: "0px" }
      );
      observer.observe(el);
    } catch {
      // If IntersectionObserver constructor throws, defer to safety timer
      window.setTimeout(() => setVisible(true), 0);
    }

    return () => {
      window.clearTimeout(safetyTimer);
      observer?.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
